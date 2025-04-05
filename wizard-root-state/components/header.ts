export function createHeader(): HTMLElement {

        const header = document.createElement('header');  
        header.className = "header-element";
        header.textContent = "header";

        if (!document.getElementById("style-header-element")){
        const style = document.createElement('style');
        style.id = "style-header-element";
        style.textContent = `
        .header-element{
            text-align: center;
            background-color: pink;
            color: black; 
            width:100%;
            height: 150px; 
        }
        `;
        document.head.appendChild(style)
        }
        return header;
    }

