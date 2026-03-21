export function setupCanvas(canvas, toolManager) {
  const ctx = canvas.getContext("2d");

  // Handle DPI scaling
  const dpr = window.devicePixelRatio || 1;
  canvas.width = canvas.clientWidth * dpr;
  canvas.height = canvas.clientHeight * dpr;
  ctx.scale(dpr, dpr);

  // Smooth strokes
  ctx.lineCap = "round";

  canvas.addEventListener("mousedown", (e) => {
    toolManager.currentTool?.onMouseDown(e, ctx);
  });

  canvas.addEventListener("mousemove", (e) => {
    toolManager.currentTool?.onMouseMove(e, ctx);
  });

  canvas.addEventListener("mouseup", (e) => {
    toolManager.currentTool?.onMouseUp(e, ctx);
  });

  return ctx;
}
