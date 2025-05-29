"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
const bookmarks_1 = require("./bookmarks");
const viewProvider_1 = require("./viewProvider");

const manager = new bookmarks_1.BookmarkManager();

function activate(context) {
    manager.load(context);
    const tree = new viewProvider_1.BookmarkTreeProvider(manager);
    context.subscriptions.push(vscode.window.registerTreeDataProvider("workspaceBookmarks.view", tree));
    const decorationType = vscode.window.createTextEditorDecorationType({
        gutterIconPath: context.asAbsolutePath("media/bookmark.svg"),
        gutterIconSize: "100%",
    });

    function updateGutter(editor) {
        const ranges = manager
            .getAll()
            .filter((b) => b.uri.toString() === editor.document.uri.toString())
            .map((b) => new vscode.Range(b.line, 0, b.line, 0));
        editor.setDecorations(decorationType, ranges);
    }

    function updateActive() {
        const ed = vscode.window.activeTextEditor;
        if (ed) {
            updateGutter(ed);
        }
    }

    context.subscriptions.push(
        vscode.commands.registerCommand("workspaceBookmarks.toggle", () => {
            const editor = vscode.window.activeTextEditor;
            if (!editor)
                return;
            manager.toggle(editor.document, editor.selection.active.line);
            manager.save(context);
            tree.refresh();
            updateGutter(editor);
        }),
        vscode.commands.registerCommand("workspaceBookmarks.open", async (b) => {
            const doc = await vscode.workspace.openTextDocument(b.uri);
            const ed = await vscode.window.showTextDocument(doc);
            const pos = new vscode.Position(b.line, 0);
            ed.selection = new vscode.Selection(pos, pos);
            ed.revealRange(new vscode.Range(pos, pos));
        }),
        vscode.commands.registerCommand("workspaceBookmarks.next", () => {
            const ed = vscode.window.activeTextEditor;
            if (!ed)
                return;
            const loc = new vscode.Location(ed.document.uri, new vscode.Range(ed.selection.active, ed.selection.active));
            const nb = manager.next(loc);
            if (nb)
                vscode.commands.executeCommand("workspaceBookmarks.open", nb);
        }),
        vscode.commands.registerCommand("workspaceBookmarks.prev", () => {
            const ed = vscode.window.activeTextEditor;
            if (!ed)
                return;
            const loc = new vscode.Location(ed.document.uri, new vscode.Range(ed.selection.active, ed.selection.active));
            const pb = manager.prev(loc);
            if (pb)
                vscode.commands.executeCommand("workspaceBookmarks.open", pb);
        })
    );

    context.subscriptions.push(
        vscode.window.onDidChangeActiveTextEditor(updateActive),
        vscode.workspace.onDidChangeTextDocument((e) => {
            const ed = vscode.window.activeTextEditor;
            if (ed && e.document === ed.document) {
                updateGutter(ed);
            }
        })
    );

    updateActive();
}
exports.activate = activate;

function deactivate() {}
exports.deactivate = deactivate;