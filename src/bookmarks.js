var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
#;
VS;
Code;
Workspace;
Bookmarks;
Extension;
A;
lightweight;
extension;
that;
lets;
you;
bookmark;
lines;
across;
all;
files in a;
workspace.
;
-- - ;
#;
File;
Layout(__makeTemplateObject([""], [""]))(__makeTemplateObject(["\nworkspace-bookmarks-extension/\n\u251C\u2500\u2500 media/\n\u2502   \u2514\u2500\u2500 bookmark.svg\n\u251C\u2500\u2500 src/\n\u2502   \u251C\u2500\u2500 bookmarks.ts\n\u2502   \u251C\u2500\u2500 extension.ts\n\u2502   \u2514\u2500\u2500 viewProvider.ts\n\u251C\u2500\u2500 .vscodeignore\n\u251C\u2500\u2500 package.json\n\u251C\u2500\u2500 README.md\n\u2514\u2500\u2500 tsconfig.json\n"], ["\nworkspace-bookmarks-extension/\n\u251C\u2500\u2500 media/\n\u2502   \u2514\u2500\u2500 bookmark.svg\n\u251C\u2500\u2500 src/\n\u2502   \u251C\u2500\u2500 bookmarks.ts\n\u2502   \u251C\u2500\u2500 extension.ts\n\u2502   \u2514\u2500\u2500 viewProvider.ts\n\u251C\u2500\u2500 .vscodeignore\n\u251C\u2500\u2500 package.json\n\u251C\u2500\u2500 README.md\n\u2514\u2500\u2500 tsconfig.json\n"]))(__makeTemplateObject([""], [""]));
-- - ;
#;
package.json(__makeTemplateObject([""], [""]))(__makeTemplateObject(["json\n{\n  \"name\": \"workspace-bookmarks\",\n  \"displayName\": \"Workspace\u00A0Bookmarks\",\n  \"description\": \"Quickly bookmark lines across files within a workspace.\",\n  \"version\": \"0.0.1\",\n  \"publisher\": \"your-name\",\n  \"engines\": {\n    \"vscode\": \"^1.90.0\"\n  },\n  \"categories\": [\"Other\"],\n  \"activationEvents\": [\n    \"onStartupFinished\",\n    \"onCommand:workspaceBookmarks.toggle\",\n    \"onCommand:workspaceBookmarks.next\",\n    \"onCommand:workspaceBookmarks.prev\",\n    \"onView:workspaceBookmarks.view\"\n  ],\n  \"main\": \"./dist/extension.js\",\n  \"contributes\": {\n    \"commands\": [\n      {\n        \"command\": \"workspaceBookmarks.toggle\",\n        \"title\": \"Toggle Bookmark\"\n      },\n      {\n        \"command\": \"workspaceBookmarks.next\",\n        \"title\": \"Next Bookmark\"\n      },\n      {\n        \"command\": \"workspaceBookmarks.prev\",\n        \"title\": \"Previous Bookmark\"\n      },\n      {\n        \"command\": \"workspaceBookmarks.clearAll\",\n        \"title\": \"Clear All Bookmarks\"\n      }\n    ],\n    \"views\": {\n      \"explorer\": [\n        {\n          \"id\": \"workspaceBookmarks.view\",\n          \"name\": \"Bookmarks\"\n        }\n      ]\n    },\n    \"keybindings\": [\n      {\n        \"command\": \"workspaceBookmarks.toggle\",\n        \"key\": \"alt+b\",\n        \"mac\": \"alt+b\",\n        \"when\": \"editorTextFocus\"\n      },\n      {\n        \"command\": \"workspaceBookmarks.next\",\n        \"key\": \"alt+n\",\n        \"mac\": \"alt+n\",\n        \"when\": \"editorTextFocus\"\n      },\n      {\n        \"command\": \"workspaceBookmarks.prev\",\n        \"key\": \"alt+p\",\n        \"mac\": \"alt+p\",\n        \"when\": \"editorTextFocus\"\n      }\n    ]\n  },\n  \"scripts\": {\n    \"vscode:prepublish\": \"npm run compile\",\n    \"compile\": \"tsc -p ./\"\n  },\n  \"devDependencies\": {\n    \"@types/vscode\": \"^1.90.0\",\n    \"typescript\": \"^5.4.0\",\n    \"vsce\": \"^3.15.0\"\n  }\n}\n"], ["json\n{\n  \"name\": \"workspace-bookmarks\",\n  \"displayName\": \"Workspace\u00A0Bookmarks\",\n  \"description\": \"Quickly bookmark lines across files within a workspace.\",\n  \"version\": \"0.0.1\",\n  \"publisher\": \"your-name\",\n  \"engines\": {\n    \"vscode\": \"^1.90.0\"\n  },\n  \"categories\": [\"Other\"],\n  \"activationEvents\": [\n    \"onStartupFinished\",\n    \"onCommand:workspaceBookmarks.toggle\",\n    \"onCommand:workspaceBookmarks.next\",\n    \"onCommand:workspaceBookmarks.prev\",\n    \"onView:workspaceBookmarks.view\"\n  ],\n  \"main\": \"./dist/extension.js\",\n  \"contributes\": {\n    \"commands\": [\n      {\n        \"command\": \"workspaceBookmarks.toggle\",\n        \"title\": \"Toggle Bookmark\"\n      },\n      {\n        \"command\": \"workspaceBookmarks.next\",\n        \"title\": \"Next Bookmark\"\n      },\n      {\n        \"command\": \"workspaceBookmarks.prev\",\n        \"title\": \"Previous Bookmark\"\n      },\n      {\n        \"command\": \"workspaceBookmarks.clearAll\",\n        \"title\": \"Clear All Bookmarks\"\n      }\n    ],\n    \"views\": {\n      \"explorer\": [\n        {\n          \"id\": \"workspaceBookmarks.view\",\n          \"name\": \"Bookmarks\"\n        }\n      ]\n    },\n    \"keybindings\": [\n      {\n        \"command\": \"workspaceBookmarks.toggle\",\n        \"key\": \"alt+b\",\n        \"mac\": \"alt+b\",\n        \"when\": \"editorTextFocus\"\n      },\n      {\n        \"command\": \"workspaceBookmarks.next\",\n        \"key\": \"alt+n\",\n        \"mac\": \"alt+n\",\n        \"when\": \"editorTextFocus\"\n      },\n      {\n        \"command\": \"workspaceBookmarks.prev\",\n        \"key\": \"alt+p\",\n        \"mac\": \"alt+p\",\n        \"when\": \"editorTextFocus\"\n      }\n    ]\n  },\n  \"scripts\": {\n    \"vscode:prepublish\": \"npm run compile\",\n    \"compile\": \"tsc -p ./\"\n  },\n  \"devDependencies\": {\n    \"@types/vscode\": \"^1.90.0\",\n    \"typescript\": \"^5.4.0\",\n    \"vsce\": \"^3.15.0\"\n  }\n}\n"]))(__makeTemplateObject([""], [""]));
-- - ;
#;
tsconfig.json(__makeTemplateObject([""], [""]))(__makeTemplateObject(["json\n{\n  \"compilerOptions\": {\n    \"module\": \"commonjs\",\n    \"target\": \"ES2020\",\n    \"outDir\": \"dist\",\n    \"lib\": [\"ES2020\"],\n    \"sourceMap\": true,\n    \"rootDir\": \"src\",\n    \"strict\": true\n  },\n  \"exclude\": [\"node_modules\", \".vscode-test\"]\n}\n"], ["json\n{\n  \"compilerOptions\": {\n    \"module\": \"commonjs\",\n    \"target\": \"ES2020\",\n    \"outDir\": \"dist\",\n    \"lib\": [\"ES2020\"],\n    \"sourceMap\": true,\n    \"rootDir\": \"src\",\n    \"strict\": true\n  },\n  \"exclude\": [\"node_modules\", \".vscode-test\"]\n}\n"]))(__makeTemplateObject([""], [""]));
-- - ;
#;
src / bookmarks.ts(__makeTemplateObject([""], [""]))(__makeTemplateObject(["ts\nimport * as vscode from \"vscode\";\nimport path from \"path\";\n\nexport class Bookmark {\n  constructor(\n    public uri: vscode.Uri,\n    public line: number,\n    public preview: string\n  ) {}\n}\n\ninterface BookmarkData {\n  uri: string;\n  line: number;\n  preview: string;\n}\n\nexport class BookmarkManager {\n  private bookmarks: Bookmark[] = [];\n  private _onDidChange = new vscode.EventEmitter<void>();\n  readonly onDidChange = this._onDidChange.event;\n\n  load(context: vscode.ExtensionContext) {\n    const raw = context.workspaceState.get<BookmarkData[]>(\"bookmarks\", []);\n    this.bookmarks = raw.map(\n      (b) => new Bookmark(vscode.Uri.parse(b.uri), b.line, b.preview)\n    );\n  }\n\n  save(context: vscode.ExtensionContext) {\n    const raw: BookmarkData[] = this.bookmarks.map((b) => ({\n      uri: b.uri.toString(),\n      line: b.line,\n      preview: b.preview,\n    }));\n    context.workspaceState.update(\"bookmarks\", raw);\n  }\n\n  toggle(document: vscode.TextDocument, line: number) {\n    const idx = this.bookmarks.findIndex(\n      (b) => b.uri.toString() === document.uri.toString() && b.line === line\n    );\n    if (idx >= 0) {\n      this.bookmarks.splice(idx, 1);\n    } else {\n      const preview = document.lineAt(line).text.trim();\n      this.bookmarks.push(new Bookmark(document.uri, line, preview));\n    }\n    this._onDidChange.fire();\n  }\n\n  clear() {\n    this.bookmarks = [];\n    this._onDidChange.fire();\n  }\n\n  getAll(): Bookmark[] {\n    return this.bookmarks;\n  }\n\n  /** Sorted list for deterministic next/prev. */\n  private sorted() {\n    return this.bookmarks\n      .slice()\n      .sort(\n        (a, b) =>\n          a.uri.fsPath.localeCompare(b.uri.fsPath) || a.line - b.line\n      );\n  }\n\n  next(current: vscode.Location): Bookmark | undefined {\n    const list = this.sorted();\n    for (const b of list) {\n      if (\n        b.uri.fsPath > current.uri.fsPath ||\n        (b.uri.fsPath === current.uri.fsPath && b.line > current.range.start.line)\n      ) {\n        return b;\n      }\n    }\n    return list[0]; // wrap\n  }\n\n  prev(current: vscode.Location): Bookmark | undefined {\n    const list = this.sorted();\n    for (let i = list.length - 1; i >= 0; i--) {\n      const b = list[i];\n      if (\n        b.uri.fsPath < current.uri.fsPath ||\n        (b.uri.fsPath === current.uri.fsPath && b.line < current.range.start.line)\n      ) {\n        return b;\n      }\n    }\n    return list[list.length - 1]; // wrap\n  }\n}\n"], ["ts\nimport * as vscode from \"vscode\";\nimport path from \"path\";\n\nexport class Bookmark {\n  constructor(\n    public uri: vscode.Uri,\n    public line: number,\n    public preview: string\n  ) {}\n}\n\ninterface BookmarkData {\n  uri: string;\n  line: number;\n  preview: string;\n}\n\nexport class BookmarkManager {\n  private bookmarks: Bookmark[] = [];\n  private _onDidChange = new vscode.EventEmitter<void>();\n  readonly onDidChange = this._onDidChange.event;\n\n  load(context: vscode.ExtensionContext) {\n    const raw = context.workspaceState.get<BookmarkData[]>(\"bookmarks\", []);\n    this.bookmarks = raw.map(\n      (b) => new Bookmark(vscode.Uri.parse(b.uri), b.line, b.preview)\n    );\n  }\n\n  save(context: vscode.ExtensionContext) {\n    const raw: BookmarkData[] = this.bookmarks.map((b) => ({\n      uri: b.uri.toString(),\n      line: b.line,\n      preview: b.preview,\n    }));\n    context.workspaceState.update(\"bookmarks\", raw);\n  }\n\n  toggle(document: vscode.TextDocument, line: number) {\n    const idx = this.bookmarks.findIndex(\n      (b) => b.uri.toString() === document.uri.toString() && b.line === line\n    );\n    if (idx >= 0) {\n      this.bookmarks.splice(idx, 1);\n    } else {\n      const preview = document.lineAt(line).text.trim();\n      this.bookmarks.push(new Bookmark(document.uri, line, preview));\n    }\n    this._onDidChange.fire();\n  }\n\n  clear() {\n    this.bookmarks = [];\n    this._onDidChange.fire();\n  }\n\n  getAll(): Bookmark[] {\n    return this.bookmarks;\n  }\n\n  /** Sorted list for deterministic next/prev. */\n  private sorted() {\n    return this.bookmarks\n      .slice()\n      .sort(\n        (a, b) =>\n          a.uri.fsPath.localeCompare(b.uri.fsPath) || a.line - b.line\n      );\n  }\n\n  next(current: vscode.Location): Bookmark | undefined {\n    const list = this.sorted();\n    for (const b of list) {\n      if (\n        b.uri.fsPath > current.uri.fsPath ||\n        (b.uri.fsPath === current.uri.fsPath && b.line > current.range.start.line)\n      ) {\n        return b;\n      }\n    }\n    return list[0]; // wrap\n  }\n\n  prev(current: vscode.Location): Bookmark | undefined {\n    const list = this.sorted();\n    for (let i = list.length - 1; i >= 0; i--) {\n      const b = list[i];\n      if (\n        b.uri.fsPath < current.uri.fsPath ||\n        (b.uri.fsPath === current.uri.fsPath && b.line < current.range.start.line)\n      ) {\n        return b;\n      }\n    }\n    return list[list.length - 1]; // wrap\n  }\n}\n"]))(__makeTemplateObject([""], [""]));
-- - ;
#;
src / viewProvider.ts(__makeTemplateObject([""], [""]))(__makeTemplateObject(["ts\nimport * as vscode from \"vscode\";\nimport * as path from \"path\";\nimport { Bookmark, BookmarkManager } from \"./bookmarks\";\n\nexport class BookmarkTreeProvider implements vscode.TreeDataProvider<BookmarkItem> {\n  private _onDidChangeTreeData = new vscode.EventEmitter<BookmarkItem | undefined>();\n  readonly onDidChangeTreeData = this._onDidChangeTreeData.event;\n\n  constructor(private manager: BookmarkManager) {\n    this.manager.onDidChange(() => this.refresh());\n  }\n\n  getTreeItem(element: BookmarkItem): vscode.TreeItem {\n    return element;\n  }\n\n  getChildren(): BookmarkItem[] {\n    return this.manager.getAll().map(\n      (b) =>\n        new BookmarkItem(\n          "], ["ts\nimport * as vscode from \"vscode\";\nimport * as path from \"path\";\nimport { Bookmark, BookmarkManager } from \"./bookmarks\";\n\nexport class BookmarkTreeProvider implements vscode.TreeDataProvider<BookmarkItem> {\n  private _onDidChangeTreeData = new vscode.EventEmitter<BookmarkItem | undefined>();\n  readonly onDidChangeTreeData = this._onDidChangeTreeData.event;\n\n  constructor(private manager: BookmarkManager) {\n    this.manager.onDidChange(() => this.refresh());\n  }\n\n  getTreeItem(element: BookmarkItem): vscode.TreeItem {\n    return element;\n  }\n\n  getChildren(): BookmarkItem[] {\n    return this.manager.getAll().map(\n      (b) =>\n        new BookmarkItem(\n          "]));
$;
{
    path.basename(b.uri.fsPath);
}
$;
{
    b.line + 1;
}
$;
{
    b.preview;
}
",\n          b\n        )\n    );\n  }\n\n  refresh(): void {\n    this._onDidChangeTreeData.fire(undefined);\n  }\n}\n\nclass BookmarkItem extends vscode.TreeItem {\n  constructor(label: string, private bookmark: Bookmark) {\n    super(label, vscode.TreeItemCollapsibleState.None);\n    this.command = {\n      command: \"workspaceBookmarks.open\",\n      title: \"Open Bookmark\",\n      arguments: [this.bookmark],\n    };\n    this.iconPath = new vscode.ThemeIcon(\"bookmark\");\n  }\n}\n"(__makeTemplateObject([""], [""]));
-- - ;
#;
src / extension.ts(__makeTemplateObject([""], [""]))(__makeTemplateObject(["ts\nimport * as vscode from \"vscode\";\nimport { BookmarkManager } from \"./bookmarks\";\nimport { BookmarkTreeProvider } from \"./viewProvider\";\n\nconst manager = new BookmarkManager();\n\nexport function activate(context: vscode.ExtensionContext) {\n  manager.load(context);\n\n  const tree = new BookmarkTreeProvider(manager);\n  context.subscriptions.push(\n    vscode.window.registerTreeDataProvider(\"workspaceBookmarks.view\", tree)\n  );\n\n  const decorationType = vscode.window.createTextEditorDecorationType({\n    gutterIconPath: context.asAbsolutePath(\"media/bookmark.svg\"),\n    gutterIconSize: \"100%\",\n  });\n\n  function updateGutter(editor: vscode.TextEditor) {\n    const ranges = manager\n      .getAll()\n      .filter((b) => b.uri.toString() === editor.document.uri.toString())\n      .map((b) => new vscode.Range(b.line, 0, b.line, 0));\n    editor.setDecorations(decorationType, ranges);\n  }\n\n  function updateActive() {\n    const ed = vscode.window.activeTextEditor;\n    if (ed) updateGutter(ed);\n  }\n\n  // Commands\n  context.subscriptions.push(\n    vscode.commands.registerCommand(\"workspaceBookmarks.toggle\", () => {\n      const editor = vscode.window.activeTextEditor;\n      if (!editor) return;\n      manager.toggle(editor.document, editor.selection.active.line);\n      manager.save(context);\n      tree.refresh();\n      updateGutter(editor);\n    }),\n\n    vscode.commands.registerCommand(\"workspaceBookmarks.open\", async (b) => {\n      const doc = await vscode.workspace.openTextDocument(b.uri);\n      const ed = await vscode.window.showTextDocument(doc);\n      const pos = new vscode.Position(b.line, 0);\n      ed.selection = new vscode.Selection(pos, pos);\n      ed.revealRange(new vscode.Range(pos, pos));\n    }),\n\n    vscode.commands.registerCommand(\"workspaceBookmarks.next\", () => {\n      const ed = vscode.window.activeTextEditor;\n      if (!ed) return;\n      const loc = new vscode.Location(\n        ed.document.uri,\n        new vscode.Range(ed.selection.active, ed.selection.active)\n      );\n      const nb = manager.next(loc);\n      if (nb) vscode.commands.executeCommand(\"workspaceBookmarks.open\", nb);\n    }),\n\n    vscode.commands.registerCommand(\"workspaceBookmarks.prev\", () => {\n      const ed = vscode.window.activeTextEditor;\n      if (!ed) return;\n      const loc = new vscode.Location(\n        ed.document.uri,\n        new vscode.Range(ed.selection.active, ed.selection.active)\n      );\n      const pb = manager.prev(loc);\n      if (pb) vscode.commands.executeCommand(\"workspaceBookmarks.open\", pb);\n    })\n  );\n\n  // Gutter decoration updates\n  context.subscriptions.push(\n    vscode.window.onDidChangeActiveTextEditor(updateActive),\n    vscode.workspace.onDidChangeTextDocument((e) => {\n      const ed = vscode.window.activeTextEditor;\n      if (ed && e.document === ed.document) updateGutter(ed);\n    })\n  );\n\n  updateActive();\n}\n\nexport function deactivate() {}\n"], ["ts\nimport * as vscode from \"vscode\";\nimport { BookmarkManager } from \"./bookmarks\";\nimport { BookmarkTreeProvider } from \"./viewProvider\";\n\nconst manager = new BookmarkManager();\n\nexport function activate(context: vscode.ExtensionContext) {\n  manager.load(context);\n\n  const tree = new BookmarkTreeProvider(manager);\n  context.subscriptions.push(\n    vscode.window.registerTreeDataProvider(\"workspaceBookmarks.view\", tree)\n  );\n\n  const decorationType = vscode.window.createTextEditorDecorationType({\n    gutterIconPath: context.asAbsolutePath(\"media/bookmark.svg\"),\n    gutterIconSize: \"100%\",\n  });\n\n  function updateGutter(editor: vscode.TextEditor) {\n    const ranges = manager\n      .getAll()\n      .filter((b) => b.uri.toString() === editor.document.uri.toString())\n      .map((b) => new vscode.Range(b.line, 0, b.line, 0));\n    editor.setDecorations(decorationType, ranges);\n  }\n\n  function updateActive() {\n    const ed = vscode.window.activeTextEditor;\n    if (ed) updateGutter(ed);\n  }\n\n  // Commands\n  context.subscriptions.push(\n    vscode.commands.registerCommand(\"workspaceBookmarks.toggle\", () => {\n      const editor = vscode.window.activeTextEditor;\n      if (!editor) return;\n      manager.toggle(editor.document, editor.selection.active.line);\n      manager.save(context);\n      tree.refresh();\n      updateGutter(editor);\n    }),\n\n    vscode.commands.registerCommand(\"workspaceBookmarks.open\", async (b) => {\n      const doc = await vscode.workspace.openTextDocument(b.uri);\n      const ed = await vscode.window.showTextDocument(doc);\n      const pos = new vscode.Position(b.line, 0);\n      ed.selection = new vscode.Selection(pos, pos);\n      ed.revealRange(new vscode.Range(pos, pos));\n    }),\n\n    vscode.commands.registerCommand(\"workspaceBookmarks.next\", () => {\n      const ed = vscode.window.activeTextEditor;\n      if (!ed) return;\n      const loc = new vscode.Location(\n        ed.document.uri,\n        new vscode.Range(ed.selection.active, ed.selection.active)\n      );\n      const nb = manager.next(loc);\n      if (nb) vscode.commands.executeCommand(\"workspaceBookmarks.open\", nb);\n    }),\n\n    vscode.commands.registerCommand(\"workspaceBookmarks.prev\", () => {\n      const ed = vscode.window.activeTextEditor;\n      if (!ed) return;\n      const loc = new vscode.Location(\n        ed.document.uri,\n        new vscode.Range(ed.selection.active, ed.selection.active)\n      );\n      const pb = manager.prev(loc);\n      if (pb) vscode.commands.executeCommand(\"workspaceBookmarks.open\", pb);\n    })\n  );\n\n  // Gutter decoration updates\n  context.subscriptions.push(\n    vscode.window.onDidChangeActiveTextEditor(updateActive),\n    vscode.workspace.onDidChangeTextDocument((e) => {\n      const ed = vscode.window.activeTextEditor;\n      if (ed && e.document === ed.document) updateGutter(ed);\n    })\n  );\n\n  updateActive();\n}\n\nexport function deactivate() {}\n"]))(__makeTemplateObject([""], [""]));
-- - ;
#;
media / bookmark.svg
    * A;
simple;
bookmark;
icon;
replace;
with (any)
    SVG;
you;
prefer. * ""(__makeTemplateObject(["svg\n<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\">\n  <path d=\"M6 2h12a2 2 0 0 1 2 2v18l-8-4-8 4V4a2 2 0 0 1 2-2z\" />\n</svg>\n"], ["svg\n<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\">\n  <path d=\"M6 2h12a2 2 0 0 1 2 2v18l-8-4-8 4V4a2 2 0 0 1 2-2z\" />\n</svg>\n"]))(__makeTemplateObject([""], [""]));
-- - ;
.vscodeignore(__makeTemplateObject([""], [""]))(__makeTemplateObject(["\n.vscode/\nREADME.md\n"], ["\n.vscode/\nREADME.md\n"]))(__makeTemplateObject([""], [""]));
-- - ;
#;
README.md(__makeTemplateObject([""], [""]))(__makeTemplateObject([""], [""]));
markdown;
#;
Workspace;
Bookmarks;
VS;
Code;
Extension;
Bookmark;
lines;
of;
code;
across;
your;
workspace;
with (a)
    single;
click.
;
#;
#;
Features
    * Math.pow(, Math.pow(Toggle, a));
bookmark;
by;
clicking;
the;
gutter;
or;
pressing < kbd > Alt < /kbd>+<kbd>B</kbd > .
    * Math.pow(Navigate, Math.pow(Next, (Alt < /kbd>+<kbd>N</kbd > )));
Math.pow(or, Math.pow(Previous, (Alt < /kbd>+<kbd>P</kbd > )));
bookmark.
    * Math.pow(, Bookmarks);
Math.pow(Panel, ) in the;
Explorer;
shows;
all;
bookmarks;
click;
any;
entry;
to;
jump.
    * Bookmarks;
are;
stored;
_per;
workspace_;
so;
they;
don;
t;
pollute;
other;
projects.
;
#;
#;
Development(__makeTemplateObject([""], [""]))(__makeTemplateObject(["bash\nnpm install\nnpm run compile\n# Press F5 in VS\u00A0Code to launch the Extension Development Host\n"], ["bash\nnpm install\nnpm run compile\n# Press F5 in VS\u00A0Code to launch the Extension Development Host\n"]))(__makeTemplateObject([""], [""]))(__makeTemplateObject(["\n\n## Packaging & Publishing\n\n"], ["\n\n## Packaging & Publishing\n\n"]))(__makeTemplateObject([""], [""]));
bash;
npm;
install - g;
vsce;
vsce;
package;
#;
produces;
a.vsix(__makeTemplateObject([""], [""]))(__makeTemplateObject(["\n\n"], ["\n\n"]))(__makeTemplateObject([""], [""]));
-- - ;
#;
Usage;
Notes
    * Bookmarks;
are;
kept in "workspaceState";
delete them;
with (Math.pow(, Command))
    Palette;
Clear;
All;
Bookmarks;
Math.pow(, .
)
    * Decorations;
refresh;
automatically;
on;
document;
change / activate.
;
Happy;
coding;
""(__makeTemplateObject(["\n\n"], ["\n\n"]));
