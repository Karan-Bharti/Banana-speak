var btnTranslate  =  document.querySelector("#btn-translate");
var txtInput      =  document.querySelector("#txt-input")

console.log(txtInput)
    
function clickeventhandler() {
    return function clickeventhandler(){
    console.log("clicked")
    console.log("input",txtInput.value)
};
}

btnTranslate.addEventListener("click" , clickeventhandler())

