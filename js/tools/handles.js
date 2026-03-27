export const HANDLE_SIZE = 8;

export function getHandles(x, y, w, h) {
  const cx = x + w / 2;
  const cy = y + h / 2;
  return [
    { id: "tl", x: x, y: y }, // top-left
    { id: "tm", x: cx, y: y }, // top-mid
    { id: "tr", x: x + w, y: y }, // top-right
    { id: "ml", x: x, y: cy }, // mid-left
    { id: "mr", x: x + w, y: cy }, // mid-right
    { id: "bl", x: x, y: y + h }, // bottom-left
    { id: "bm", x: cx, y: y + h }, // bottom-mid
    { id: "br", x: x + w, y: y + h }, // bottom-right
  ];
}

export function drawHandles(ctx, x, y, w, h, fillColor, strokeColor) {
  const handles = getHandles(x, y, w, h);
  const hs = HANDLE_SIZE;

  ctx.fillStyle = fillColor;
  ctx.strokeStyle = strokeColor;
  ctx.lineWidth = 1;
  ctx.setLineDash([]);

  for (const h of handles) {
    ctx.fillRect(h.x - hs / 2, h.y - hs / 2, hs, hs);
    ctx.strokeRect(h.x - hs / 2, h.y - hs / 2, hs, hs);
  }
}

// Returns handle id if (x, y) is within any handle, else null
export function getHitHandle(mx, my, bx, by, bw, bh) {
  const handles = getHandles(bx, by, bw, bh);
  const hs = HANDLE_SIZE;

  for (const h of handles) {
    if (
      mx >= h.x - hs / 2 &&
      mx <= h.x + hs / 2 &&
      my >= h.y - hs / 2 &&
      my <= h.y + hs / 2
    )
      return h.id;
  }
  return null;
}
