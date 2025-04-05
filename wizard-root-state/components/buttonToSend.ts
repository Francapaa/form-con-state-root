export function createButton (content: string): HTMLElement {

const buttonToSendElement = document.createElement("button"); 
buttonToSendElement.textContent = content; 
buttonToSendElement.className = "button-element";
if (!document.getElementById("style-button-element")){
const style = document.createElement("style");
style.id = "style-button-element"; 
style.textContent = ` 
.button-element{
    background-color: blue; 
    color: #9CBBE9;
    width: 150px; 
    height: 50px; 
}
`
document.head.appendChild(style);
}

return buttonToSendElement; 

}