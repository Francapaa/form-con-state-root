export function createTitle(title: string): HTMLElement{

    const titleElement = document.createElement('h1');              
    titleElement.className = "title-element";
    titleElement.textContent = title;
    if (!document.getElementById("style-title-element")) {
        const style = document.createElement('style');
        style.id = "style-title-element"; // para no repetirlo si ya está
        style.textContent = `
            .title-element {
                text-align: center;
                color: black; 
                font-size: 2em; 
            }
        `;
        document.head.appendChild(style); // ✅ en lugar de titleElement.appendChild
    }
    return titleElement; 
}