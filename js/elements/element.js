export class Element {
  constructor(properties) {
    this.properties = properties;
    this.isSelected = false;
    this.hidden = false;
  }

  getBounds() { }
  resize(handle, dx, dy) { }

  draw(ctx) { }
  isTargetted(x, y, ctx) { }
  translate(x, y) { }

  toJson() {
    return {
      type: this.type,
      properties: this.properties,
    };
  }
}
