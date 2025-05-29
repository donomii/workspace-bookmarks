import * as vscode from "vscode";
import * as path from "path";

export class Bookmark {
  constructor(
    public uri: vscode.Uri,
    public line: number,
    public preview: string
  ) {}
}

interface BookmarkData {
  uri: string;
  line: number;
  preview: string;
}

export class BookmarkManager {
  private bookmarks: Bookmark[] = [];
  private _onDidChange = new vscode.EventEmitter<void>();
  readonly onDidChange = this._onDidChange.event;

  load(context: vscode.ExtensionContext) {
    const raw = context.workspaceState.get<BookmarkData[]>("bookmarks", []);
    this.bookmarks = raw.map(
      (b) => new Bookmark(vscode.Uri.parse(b.uri), b.line, b.preview)
    );
  }

  save(context: vscode.ExtensionContext) {
    const raw: BookmarkData[] = this.bookmarks.map((b) => ({
      uri: b.uri.toString(),
      line: b.line,
      preview: b.preview,
    }));
    context.workspaceState.update("bookmarks", raw);
  }

  toggle(document: vscode.TextDocument, line: number) {
    const idx = this.bookmarks.findIndex(
      (b) => b.uri.toString() === document.uri.toString() && b.line === line
    );
    if (idx >= 0) {
      this.bookmarks.splice(idx, 1);
    } else {
      const preview = document.lineAt(line).text.trim();
      this.bookmarks.push(new Bookmark(document.uri, line, preview));
    }
    this._onDidChange.fire();
  }

  clear() {
    this.bookmarks = [];
    this._onDidChange.fire();
  }

  getAll(): Bookmark[] {
    return this.bookmarks;
  }

  /** Sorted list for deterministic next/prev. */
  private sorted() {
    return this.bookmarks
      .slice()
      .sort(
        (a, b) =>
          a.uri.fsPath.localeCompare(b.uri.fsPath) || a.line - b.line
      );
  }

  next(current: vscode.Location): Bookmark | undefined {
    const list = this.sorted();
    for (const b of list) {
      if (
        b.uri.fsPath > current.uri.fsPath ||
        (b.uri.fsPath === current.uri.fsPath && b.line > current.range.start.line)
      ) {
        return b;
      }
    }
    return list[0]; // wrap
  }

  prev(current: vscode.Location): Bookmark | undefined {
    const list = this.sorted();
    for (let i = list.length - 1; i >= 0; i--) {
      const b = list[i];
      if (
        b.uri.fsPath < current.uri.fsPath ||
        (b.uri.fsPath === current.uri.fsPath && b.line < current.range.start.line)
      ) {
        return b;
      }
    }
    return list[list.length - 1]; // wrap
  }
}
