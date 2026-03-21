import { PencilTool } from "./tools/pencil.js";
import { ToolManager } from "./tool.js";
import { setupCanvas } from "./canvas.js";
import { renderSidebar } from "./sidebar.js";
import { state } from "./state.js";

const canvas = document.querySelector(".canvas");
const toolManager = new ToolManager(state);

const pencil = new PencilTool(state);
toolManager.setTool(pencil);

setupCanvas(canvas, toolManager);
renderSidebar(toolManager.currentTool, state);
