

export function addScript(parent, content){
    let elem = document.createElement("script")
    elem.innerText = content;
    parent.append(elem);
}

export function addCSS(parent, content){
    let elem = document.createElement("style");
    elem.setAttribute("type", "text/css");
    content = content.replace("\n", "");
    elem.innerText = content;
    console.log(content);
    parent.append(elem);
}