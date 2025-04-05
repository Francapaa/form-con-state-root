export function createSubtitle (subtitle: string): HTMLElement{

const subTitleElement = document.createElement("h2");
subTitleElement.className = "subtitle-element";
subTitleElement.textContent = subtitle; 

return subTitleElement; 

}