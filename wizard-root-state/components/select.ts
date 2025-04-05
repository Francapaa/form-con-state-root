export function createSelect(labelText: string, options: string[]): HTMLElement {
  const container = document.createElement("div");

  const labelOfSelect = document.createElement("label");
  labelOfSelect.textContent = labelText;
  labelOfSelect.htmlFor = "select-element";

  const selectElement = document.createElement("select");
  selectElement.id = "select-element";
  selectElement.className = "select-element";

  options.forEach(optionText => {
    const option = document.createElement("option");
    option.value = optionText.toLowerCase();
    option.textContent = optionText;
    selectElement.appendChild(option);
  });

  // Style
  if (!document.getElementById("style-select-element")) {
    const style = document.createElement("style");
    style.id = "style-select-element";
    style.textContent = `
      .select-element {
        width: 200px;
        height: 40px;
        font-size: 16px;
      }
    `;
    document.head.appendChild(style);
  }

  container.appendChild(labelOfSelect);
  container.appendChild(selectElement);

  return container;
}
