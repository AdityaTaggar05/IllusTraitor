export class StateManager {
  constructor() {
    this.currentTool = null;
    this.elements = [];
    this.undoneElements = [];
  }

  setTool(tool) {
    if (this.currentTool?.onDeselect) {
      this.currentTool.onDeselect();
    }

    this.currentTool = tool;

    if (this.currentTool.onSelect) {
      this.currentTool.onSelect();
    }
  }

  add(element) {
    this.elements.push(element);
  }

  undo() {
    if (this.elements.length > 0) {
      this.undoneElements.push(this.elements.pop());
    }
  }

  redo() {
    if (this.undoneElements.length > 0) {
      this.elements.push(this.undoneElements.pop());
    }
  }
}
