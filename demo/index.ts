import monaco from "../mod.ts";

(window as any).editor = monaco.editor.create(document.body, {
  theme: "vs-dark",
  value: "",
  padding: { top: 20 },
});
