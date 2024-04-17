

$(document).ready(function(e) {
    $('img[usemap]').rwdImageMaps(); 
//Allows imagemaps to be used in a responsive design 
// by recalculating the area coordinates 
// to match the actual image size on load and window.resize
});

document.getElementById('smartphone').addEventListener('click', function() {
    DialogSmartPhone()
});

document.getElementById('bag').addEventListener('click', function() {
    DialogVideo()
});

//--------------- DIALOG SMARTPHONE -------------------------
// Abrir a Dialog / Modal
function DialogSmartPhone() {
    document.querySelector("#imgDialog").src = "./Apps1.jpg";
    document.querySelector("#txtDialog").innerHTML = "Desenvolvimento de aplicações na área da saúde digital";
    document.querySelector("#dlgContent").showModal();

}

// Função para fechar a Dialog / Modal
document.querySelector("#btnClosedlgContent").addEventListener("click", function () {
    document.querySelector("#dlgContent").close();
});

//------------------ DIALOG BAG ----------------------
function DialogVideo() {
    document.querySelector("#iframeVideo").src = "https://www.youtube.com/embed/1NK7Th4koCE?si=hU1ve1frSslb-TOL";
    document.querySelector("#dlgVideo").showModal();

}

// Função para fechar a Dialog / Modal
document.querySelector("#btnCloseVideo").addEventListener("click", function () {
    document.querySelector("#dlgVideo").close();
});




