// content.js
var pageText = [...document.body.getElementsByTagName("*")]

function bagelReplace(){
    pageText.forEach(element=>{
        element.childNodes.forEach(child=>{
            if(child.nodeType==3) {
                let value = child.nodeValue;
                value = value.replace( / \w\S* /gi, "bagel " );
                value = value.replace( / \b[A-Z]['a-z]+ /gi, "Bagel " );
                value = value.replace( / \b[a-z]['a-z]+/gi, "bagel " );
                child.nodeValue = value;
            }
        });
    });
}
window.onload = bagelReplace();