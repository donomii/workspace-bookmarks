import * as vscode from "vscode";
import * as path from "path";
import { Bookmark, BookmarkManager } from "./bookmarks";

class CommandItem extends vscode.TreeItem {
  constructor(label: string, command: string, icon: string) {
    super(label, vscode.TreeItemCollapsibleState.None);
    this.command = {
      command,
      title: label,
    };
    this.iconPath = new vscode.ThemeIcon(icon);
  }
}

export class BookmarkTreeProvider implements vscode.TreeDataProvider<vscode.TreeItem> {
  private _onDidChangeTreeData = new vscode.EventEmitter<vscode.TreeItem | undefined>();
  readonly onDidChangeTreeData = this._onDidChangeTreeData.event;

  constructor(private manager: BookmarkManager, private context: vscode.ExtensionContext) {
    this.manager.onDidChange(() => this.refresh());
    vscode.commands.registerCommand("workspaceBookmarks.toggleFromSidebar", () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) return;

      const line = editor.selection.active.line;
      this.manager.toggle(editor.document, line);
      this.manager.save(this.context);
      this.refresh();
    });
  }

  getTreeItem(element: vscode.TreeItem): vscode.TreeItem {
    return element;
  }

  getChildren(element?: vscode.TreeItem): vscode.ProviderResult<vscode.TreeItem[]> {
    if (element) {
      return [];
    }
    return [
      
      ...this.manager.getAll().map(
        (b) =>
          new BookmarkItem(
            `${path.basename(b.uri.fsPath)}:${b.line + 1}  ${b.preview}`,
            b
          )
      )
    ];
  }

  refresh(): void {
    this._onDidChangeTreeData.fire(undefined);
  }
}

class BookmarkItem extends vscode.TreeItem {
  constructor(label: string, private bookmark: Bookmark) {
    super(label, vscode.TreeItemCollapsibleState.None);
    this.command = {
      command: "workspaceBookmarks.open",
      title: "Open Bookmark",
      arguments: [this.bookmark],
    };
    this.iconPath = new vscode.ThemeIcon("bookmark");
    this.contextValue = "workspaceBookmarkItem";

    const args = encodeURIComponent(JSON.stringify([this.bookmark]));
    this.tooltip = new vscode.MarkdownString(`[❌ Delete](command:workspaceBookmarks.delete?${args})`);
    this.tooltip.isTrusted = true;
  }
}
