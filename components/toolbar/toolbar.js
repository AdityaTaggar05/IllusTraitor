import { renderSidebar } from "../../js/sidebar.js";
import { PencilTool } from "../../js/tools/pencil.js";
import { RectangleTool } from "../../js/tools/rectangle.js";

function selectTool(tool, tools) {
  if (!tool.classList.contains("active")) {
    tools.forEach((t) => t.classList.remove("active"));
    tool.classList.add("active");
  }

  document.querySelector(".sidebar").classList.add("active");
}

const pencil = new PencilTool();
const rectangle = new RectangleTool();

export function setupToolbarEvents(tools, toolManager) {
  tools.forEach((tool) => {
    tool.addEventListener("click", () => {
      const name = tool.getAttribute("data-action");

      switch (name) {
        case "pencil":
          toolManager.setTool(pencil);
          selectTool(tool, tools);
          break;
        case "rectangle":
          toolManager.setTool(rectangle);
          selectTool(tool, tools);
          break;
        case "undo":
          console.log("UNDO");
          break;
      }

      renderSidebar(toolManager.currentTool);
    });
  });
}
