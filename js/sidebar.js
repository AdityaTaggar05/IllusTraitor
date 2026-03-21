function updateTooltip(slider, tooltip) {
  const value = slider.value;
  tooltip.textContent = value;
}

export function renderSidebar(tool) {
  const content = document.querySelector(".sidebar .content");
  content.innerHTML = tool.getSidebarOptions();
  tool.bindSidebarEvents();

  const slider = document.querySelector("input[type='range']");
  if (slider) {
    const tooltip = document.querySelector(".sidebar .option .tooltip");

    slider.addEventListener("input", () => updateTooltip(slider, tooltip));
    updateTooltip(slider, tooltip);
  }
}
