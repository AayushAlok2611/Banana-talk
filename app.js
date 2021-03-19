var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(inputTxt)
{
    return serverURL + "?text=" + inputTxt;
}

function errorHandler(error)
{
    alert("Some error has occured");
}

function clickHandler()
{
    var inputTxt = txtInput.value; 
    fetch( getTranslationURL(inputTxt) )
    .then(response => response.json())
    .then( json => {
            var translatedTxt = json.contents.translated;
            outputDiv.innerText = translatedTxt; 
            } )
            .catch(errorHandler);
}

btnTranslate.addEventListener("click",clickHandler());

