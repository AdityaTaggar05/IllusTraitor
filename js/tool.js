export class Tool {
  constructor(state) {
    this.state = state;
  }

  getSidebarOptions() { }
  bindSidebarEvents(state) { }
  onMouseDown(e, ctx) { }
  onMouseMove(e, ctx) { }
  onMouseUp(e, ctx) { }
  onSelect() { }
  onDeselect() { }
}

export class ToolManager {
  constructor(state) {
    this.state = state;
    this.currentTool = null;
  }

  setTool(tool) {
    if (this.currentTool?.onDeselect) {
      this.currentTool.onDeselect();
    }

    this.state.currentTool = tool;
    this.currentTool = tool;

    if (this.currentTool.onSelect) {
      this.currentTool.onSelect();
    }
  }
}
