import * as vscode from "vscode";
import { Bookmark, BookmarkManager } from "./bookmarks";
import { BookmarkTreeProvider } from "./viewProvider";

const manager = new BookmarkManager();

export function activate(context: vscode.ExtensionContext) {
  manager.load(context);

  const tree = new BookmarkTreeProvider(manager);
  context.subscriptions.push(
    vscode.window.registerTreeDataProvider("workspaceBookmarks.view", tree)
  );

  const decorationType = vscode.window.createTextEditorDecorationType({
    gutterIconPath: context.asAbsolutePath("media/bookmark.svg"),
    gutterIconSize: "100%",
  });

  // Inline cursor line decoration with command link
  const cursorLineDecorationType = vscode.window.createTextEditorDecorationType({
    after: {
      contentText: ' 🔖',
      margin: '0 0 0 1em',
      color: new vscode.ThemeColor('editorLineNumber.foreground'),
    },
    rangeBehavior: vscode.DecorationRangeBehavior.ClosedClosed,
  });

  function updateGutter(editor: vscode.TextEditor) {
    const ranges = manager
      .getAll()
      .filter((b) => b.uri.toString() === editor.document.uri.toString())
      .map((b) => new vscode.Range(b.line, 0, b.line, 0));
    editor.setDecorations(decorationType, ranges);
  }

  // Inline clickable decoration at the end of the current line
  function updateCursorLine(editor: vscode.TextEditor) {
    const line = editor.selection.active.line;
    const isBookmarked = manager.getAll().some(b =>
      b.uri.toString() === editor.document.uri.toString() && b.line === line);

    const icon = isBookmarked ? '✖' : '🔖';
    const range = new vscode.Range(line, editor.document.lineAt(line).range.end.character, line, editor.document.lineAt(line).range.end.character);

    const decoration = {
      range,
      renderOptions: {
        after: {
          contentText: ` ${icon}`,
          margin: '0 0 0 1em',
          color: new vscode.ThemeColor('editorLineNumber.foreground'),
        }
      },
      hoverMessage: 'Click to toggle bookmark'
    };

    // Hack: bind click via commandUri
    const commandUri = vscode.Uri.parse(`command:workspaceBookmarks.toggleFromLine?${encodeURIComponent(JSON.stringify([editor.document.uri, line]))}`);
    (decoration as any).renderOptions.after.contentText = ` ${icon}`;
    (decoration as any).renderOptions.after.textDecoration = `none;cursor:pointer;`;
    (decoration as any).renderOptions.after.command = {
      command: 'workspaceBookmarks.toggleFromLine',
      arguments: [editor.document.uri, line]
    };

    editor.setDecorations(cursorLineDecorationType, [decoration]);
  }

  function updateActive() {
    const ed = vscode.window.activeTextEditor;
    if (ed) {
      updateGutter(ed);
      updateCursorLine(ed);
    }
  }

  // Commands
  context.subscriptions.push(
    vscode.commands.registerCommand("workspaceBookmarks.toggle", () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) return;
      manager.toggle(editor.document, editor.selection.active.line);
      manager.save(context);
      tree.refresh();
      updateGutter(editor);
      updateCursorLine(editor);
    }),

    vscode.commands.registerCommand("workspaceBookmarks.open", async (b: Bookmark) => {
      const doc = await vscode.workspace.openTextDocument(b.uri);
      const ed = await vscode.window.showTextDocument(doc);
      const pos = new vscode.Position(b.line, 0);
      ed.selection = new vscode.Selection(pos, pos);
      ed.revealRange(new vscode.Range(pos, pos));
    }),

    vscode.commands.registerCommand("workspaceBookmarks.next", () => {
      const ed = vscode.window.activeTextEditor;
      if (!ed) return;
      const loc = new vscode.Location(
        ed.document.uri,
        new vscode.Range(ed.selection.active, ed.selection.active)
      );
      const nb = manager.next(loc);
      if (nb) vscode.commands.executeCommand("workspaceBookmarks.open", nb);
    }),

    vscode.commands.registerCommand("workspaceBookmarks.prev", () => {
      const ed = vscode.window.activeTextEditor;
      if (!ed) return;
      const loc = new vscode.Location(
        ed.document.uri,
        new vscode.Range(ed.selection.active, ed.selection.active)
      );
      const pb = manager.prev(loc);
      if (pb) vscode.commands.executeCommand("workspaceBookmarks.open", pb);
    }),

    vscode.commands.registerCommand("workspaceBookmarks.toggleFromLine", (uri: vscode.Uri, line: number) => {
      vscode.workspace.openTextDocument(uri).then(doc => {
        manager.toggle(doc, line);
        manager.save(context);
        tree.refresh();
        const editor = vscode.window.visibleTextEditors.find(e => e.document.uri.toString() === uri.toString());
        if (editor) {
          updateGutter(editor);
          updateCursorLine(editor);
        }
      });
    })
  );

  // Gutter decoration updates
  context.subscriptions.push(
    vscode.window.onDidChangeActiveTextEditor(updateActive),
    vscode.workspace.onDidChangeTextDocument((e: vscode.TextDocumentChangeEvent) => {
      const ed = vscode.window.activeTextEditor;
      if (ed && e.document === ed.document) {
        updateGutter(ed);
        updateCursorLine(ed);
      }
    }),
    vscode.window.onDidChangeTextEditorSelection(e => {
      if (e.textEditor === vscode.window.activeTextEditor) {
        updateCursorLine(e.textEditor);
      }
    })
  );

  updateActive();
}

export function deactivate() {}
