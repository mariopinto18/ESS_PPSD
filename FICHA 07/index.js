

$(document).ready(function(e) {
    $('img[usemap]').rwdImageMaps(); 
//Allows imagemaps to be used in a responsive design 
// by recalculating the area coordinates 
// to match the actual image size on load and window.resize
});

document.getElementById('smartphone').addEventListener('click', function() {
   
    renderModal('img')
});

document.getElementById('bag').addEventListener('click', function() {
    
    renderModal('video')
});


//----------------- MODAIS ----------------------
// ---------------------------------------------------
// JavaScript
function renderModal(renderType) {
    let dynamicModal= document.querySelector("#myModalBody")
 
    if (renderType== 'img') {
        dynamicModal.innerHTML= `<img id="imgModal" style="width:50%" src="" alt="">
                                <p id="txtModal"></p>`
        document.querySelector("#imgModal").src = "./Apps1.jpg";
        document.querySelector("#txtModal").innerHTML = "Desenvolvimento de aplicações na área da saúde digital";
        $("#myModal").modal('show');
    }

    if (renderType== 'video') {
        dynamicModal.innerHTML=`<iframe id="iframeVideo" 
                                    title ="youtube video"
                                    width="640" 
                                    height="360" 
                                    allow="autoplay; clipboard-write;picture-in-picture" 
                                    src="" >
                                </iframe>`

       
        document.querySelector("#iframeVideo").src = 'https://www.youtube.com/embed/1NK7Th4koCE?si=hU1ve1frSslb-TOL'
        $("#myModal").modal('show');
    }
}






