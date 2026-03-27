import { Element } from "./element.js";

export class RectangleElement extends Element {
  constructor(properties) {
    super(properties);
    this.type = "rectangle";
  }

  isTargetted(x, y, ctx) {
    if (
      x > this.properties.x &&
      x < this.properties.x + this.properties.width &&
      y > this.properties.y &&
      y < this.properties.y + this.properties.height
    )
      return true;
    return false;
  }

  getBounds() {
    return {
      x: this.properties.x,
      y: this.properties.y,
      w: this.properties.width,
      h: this.properties.height,
    };
  }

  resize(handle, dx, dy) {
    const p = this.properties;
    switch (handle) {
      case "tl":
        p.x += dx;
        p.y += dy;
        p.width -= dx;
        p.height -= dy;
        break;
      case "tm":
        p.y += dy;
        p.height -= dy;
        break;
      case "tr":
        p.y += dy;
        p.width += dx;
        p.height -= dy;
        break;
      case "ml":
        p.x += dx;
        p.width -= dx;
        break;
      case "mr":
        p.width += dx;
        break;
      case "bl":
        p.x += dx;
        p.width -= dx;
        p.height += dy;
        break;
      case "bm":
        p.height += dy;
        break;
      case "br":
        p.width += dx;
        p.height += dy;
        break;
    }
    // Prevent negative dimensions
    if (p.width < 1) {
      if (handle.includes("l")) p.x -= 1 - p.width;
      p.width = 1;
    }
    if (p.height < 1) {
      if (handle.includes("t")) p.y -= 1 - p.height;
      p.height = 1;
    }
  }

  translate(dx, dy) {
    this.properties.x += dx;
    this.properties.y += dy;
  }

  draw(ctx) {
    if (this.properties.strokeWidth > 0) {
      ctx.lineWidth = this.properties.strokeWidth;
      ctx.strokeStyle = this.properties.strokeColor;
      ctx.strokeRect(
        this.properties.x,
        this.properties.y,
        this.properties.width,
        this.properties.height,
      );
    }

    if (this.properties.fill) {
      ctx.fillStyle = this.properties.fillColor;

      ctx.fillRect(
        this.properties.x + this.properties.strokeWidth / 2,
        this.properties.y + this.properties.strokeWidth / 2,
        this.properties.width - this.properties.strokeWidth,
        this.properties.height - this.properties.strokeWidth,
      );
    }
  }
}
