export function createInputToType(contentOfLabel: string): HTMLElement {

    const containerAll = document.createElement("div");
    containerAll.className = "input__div-element"; 
    const labelInput = document.createElement("label");
    const inputElement = document.createElement("input");
    labelInput.className = "label__input-element"; 
    inputElement.className = "input-element"; 
    inputElement.type = "text";

    inputElement.placeholder = "Type here..."; 
    labelInput.textContent = contentOfLabel;
    const style = document.createElement ("style");
    style.textContent = ` 
    .input-element{
        border: 1px solid black ; 
    }
    `; // grosor - estilo - color 
    containerAll.appendChild(labelInput);
    containerAll.appendChild(inputElement); 
    document.body.appendChild(style)

    return containerAll; 
}