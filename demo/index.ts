import monaco from "../mod.ts";

window.addEventListener("load", () => {
  const editor = monaco.editor.create(document.body, {
    theme: "vs-dark",
    value: "",
    padding: { top: 20 },
  });

  document.body.style.margin = "0";
  document.body.style.height = "100vh";

  editor.layout();

  (window as any).editor = editor;
});
