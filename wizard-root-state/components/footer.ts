export function createFooter (): HTMLElement{

const footerElement = document.createElement("footer");
footerElement.textContent = "Footer"; 
footerElement.className = "footer-element"; 


if (!document.getElementById("style-footer-element")){

const style = document.createElement ("style");
style.id = "style-footer-element";
style.textContent =  ` 
.footer-element{
    background-color: pink; 
    text-align: center; 
    width: 100%;
    height: 150px; 
}
`
document.head.appendChild(style); 
}
return footerElement; 

}
