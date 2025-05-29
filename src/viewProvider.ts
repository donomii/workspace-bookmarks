import * as vscode from "vscode";
import * as path from "path";
import { Bookmark, BookmarkManager } from "./bookmarks";

export class BookmarkTreeProvider implements vscode.TreeDataProvider<BookmarkItem> {
  private _onDidChangeTreeData = new vscode.EventEmitter<BookmarkItem | undefined>();
  readonly onDidChangeTreeData = this._onDidChangeTreeData.event;

  constructor(private manager: BookmarkManager) {
    this.manager.onDidChange(() => this.refresh());
  }

  getTreeItem(element: BookmarkItem): vscode.TreeItem {
    return element;
  }

  getChildren(): BookmarkItem[] {
    return this.manager.getAll().map(
      (b) =>
        new BookmarkItem(
          `${path.basename(b.uri.fsPath)}:${b.line + 1}  ${b.preview}`,
          b
        )
    );
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
  }
}
