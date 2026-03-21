function selectTool(tool, tools) {
  if (!tool.classList.contains("active")) {
    tools.forEach((t) => t.classList.remove("active"));
    tool.classList.add("active");
  }

  document.querySelector(".sidebar").classList.add("active");
}

export function setupToolbarEvents(tools, toolManager) {
  tools.forEach((tool) => {
    tool.addEventListener("click", () => {
      const name = tool.getAttribute("data-action");

      switch (name) {
        case "pencil":
          toolManager.setTool(pencil);
          selectTool(tool, tools);
          break;
        case "undo":
          console.log("UNDO");
          break;
      }
    });
  });
}
