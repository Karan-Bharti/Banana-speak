var btnTranslate  =  document.querySelector("#btn-translate");
var txtInput      =  document.querySelector("#txt-input");
var outptDiv=document.querySelector("#output");



    
function clickeventhandler() {
    return function clickeventhandler(){
    outptDiv.innertext="ahahags"+txtInput.Value;
};
}

btnTranslate.addEventListener("click" , clickeventhandler)

