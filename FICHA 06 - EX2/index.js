// JavaScript abou Video resources



// MANIPULAÇÃO DE BOTÕES
// ---------------------------

const video = document.querySelector('video')

document.querySelector('#btnPlay').addEventListener('click', () => {
    video.play()
})

document.querySelector('#btnPause').addEventListener('click', () => {
    video.pause()
})


document.querySelector('#btnDuration').addEventListener('click', () => {
    duration.innerHTML = `Video duration: ${video.duration.toFixed(2)} seconds`  
})

document.querySelector('#btnGotoStart').addEventListener('click', () => {
    video.currentTime = 0
    video.play()
})

document.querySelector('#btnGotoEnd').addEventListener('click', () => {
    video.currentTime = video.duration - 1
})

document.querySelector('#btnGotoFrame').addEventListener('click', () => {
    video.currentTime = +prompt("what is the frame??")
})


document.getElementById('btnEditSource').addEventListener('click', () => {

    video.src="./Videos/KendirStudios-2.mp4" 
})
