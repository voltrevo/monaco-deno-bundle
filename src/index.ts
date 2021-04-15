import './deps/monaco-editor-0.23.0/vs/editor/editor.all.js';

export * from './deps/monaco-editor-0.23.0/vs/editor/editor.api.js';

(self as any).MonacoEnvironment = {
  getWorkerUrl (/* moduleId, label */) {
    // if (label === 'json') {
    //   return './json.worker.bundle.js';
    // }
    // if (label === 'css') {
    //   return './css.worker.bundle.js';
    // }
    // if (label === 'html') {
    //   return './html.worker.bundle.js';
    // }
    // if (label === 'typescript' || label === 'javascript') {
    //   return './ts.worker.bundle.js';
    // }
    return '/editor.worker.bundle.js';
  },
};
