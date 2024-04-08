
// Array com imagens a renderizar nos buttons 1 a 12
// quando se clicar num button correspondente às posições aleatórias dos ovos de Páscoa
// a imagem no array é substituída pela imagem do ovo.png 
let eggsList = ["", "DiscoverEggs.png","DiscoverEggs.png","DiscoverEggs.png","DiscoverEggs.png", "DiscoverEggs.png","DiscoverEggs.png","DiscoverEggs.png","DiscoverEggs.png", "DiscoverEggs.png","DiscoverEggs.png","DiscoverEggs.png","DiscoverEggs.png"]

eggsPositions()

let numberClick = 0;

// Gera aleatoriamente 2 posições do OVO de Páscoa
function eggsPositions(){
    // primeira posição gerada para o ovo de Páscoa
    let positionEgg1 = parseInt(1+ Math.random()*11)  // de 1 a 12
    eggsList[positionEgg1] = "Ovo.png"
    console.log(positionEgg1)

    // segunda posição gerada para o ovo de Páscoa
    let positionEgg2
    do {
        positionEgg2 = parseInt(1+ Math.random()*11)  // de 1 a 12

    }
    while (positionEgg2 == positionEgg1)  // Para assegurar que não vai gerar o mesmo número

    eggsList[positionEgg2] = "Ovo.png"
    console.log(positionEgg2)

}

// Obter os 12 buttons do DOM
let eleme1  = document.getElementById('btn1')
let eleme2  = document.getElementById('btn2')
let eleme3  = document.getElementById('btn3')
let eleme4  = document.getElementById('btn4')
let eleme5  = document.getElementById('btn5')
let eleme6  = document.getElementById('btn6')
let eleme7  = document.getElementById('btn7')
let eleme8  = document.getElementById('btn8')
let eleme9  = document.getElementById('btn9')
let eleme10  = document.getElementById('btn10')
let eleme11 = document.getElementById('btn11')
let eleme12 = document.getElementById('btn12')


// Evento ao clicar no Button 1
eleme1.addEventListener('click', function(event) {
    if (eggsList[1]!= "DiscoverEggs.png") { 
        const image = document.getElementById("img1")
        console.log(image.src)
        image.src = `${eggsList[1]}`
        if (numberClick==0) {
            setTimeout(function() { 
                image.src = "DiscoverEggs.png"
            }, 2000)
        }
        numberClick+=1         
        if (numberClick==3) {
            let msg = document.getElementById('msgParabens').innerHTML = "Parabéns, encontraste os Ovos de Páscoa!"  
        }
    }
})

eleme2.addEventListener('click', function(event) {
    if (eggsList[2]!= "DiscoverEggs.png") {
        
        const image = document.getElementById("img2")
        console.log(image.src)
        image.src = `${eggsList[2]}`
        if (numberClick==0) {
            setTimeout(function() { 
                image.src = "DiscoverEggs.png"
            }, 1000)
        }
        numberClick+=1         
        if (numberClick==3) {
            let msg = document.getElementById('msgParabens').innerHTML = "Parabéns, encontraste os Ovos de Páscoa!"  
        }
    }
})

eleme3.addEventListener('click', function(event) {
    if (eggsList[3]!= "DiscoverEggs.png") {
        
        const image = document.getElementById("img3")
        console.log(image.src)
        image.src = `${eggsList[3]}`
        if (numberClick==0) {
            setTimeout(function() { 
                image.src = "DiscoverEggs.png"
            }, 1000)
        }
        numberClick+=1         
        if (numberClick==3) {
            let msg = document.getElementById('msgParabens').innerHTML = "Parabéns, encontraste os Ovos de Páscoa!"  
        }
    }
})

eleme4.addEventListener('click', function(event) {
    if (eggsList[4]!= "DiscoverEggs.png") {
        
        const image = document.getElementById("img4")
        console.log(image.src)
        image.src = `${eggsList[4]}`
        if (numberClick==0) {
            setTimeout(function() { 
                image.src = "DiscoverEggs.png"
            }, 1000)
        }
        numberClick+=1         
        if (numberClick==3) {
            let msg = document.getElementById('msgParabens').innerHTML = "Parabéns, encontraste os Ovos de Páscoa!"  
        }
    }
})

eleme5.addEventListener('click', function(event) {
    if (eggsList[5]!= "DiscoverEggs.png") {
        
        const image = document.getElementById("img5")
        console.log(image.src)
        image.src = `${eggsList[5]}`
        if (numberClick==0) {
            setTimeout(function() { 
                image.src = "DiscoverEggs.png"
            }, 1000)
        }
        numberClick+=1         
        if (numberClick==3) {
            let msg = document.getElementById('msgParabens').innerHTML = "Parabéns, encontraste os Ovos de Páscoa!"  
        }
    }
})
eleme6.addEventListener('click', function(event) {
    if (eggsList[6]!= "DiscoverEggs.png") {
        
        const image = document.getElementById("img6")
        console.log(image.src)
        image.src = `${eggsList[6]}`
        if (numberClick==0) {
            setTimeout(function() { 
                image.src = "DiscoverEggs.png"
            }, 1000)
        }
        numberClick+=1         
        if (numberClick==3) {
            let msg = document.getElementById('msgParabens').innerHTML = "Parabéns, encontraste os Ovos de Páscoa!"  
        }
    }
})
eleme7.addEventListener('click', function(event) {
    if (eggsList[7]!= "DiscoverEggs.png") {
        
        const image = document.getElementById("img7")
        console.log(image.src)
        image.src = `${eggsList[7]}`
        if (numberClick==0) {
            setTimeout(function() { 
                image.src = "DiscoverEggs.png"
            }, 1000)
        }
        numberClick+=1         
        if (numberClick==3) {
            let msg = document.getElementById('msgParabens').innerHTML = "Parabéns, encontraste os Ovos de Páscoa!"  
        }
    }
})
eleme8.addEventListener('click', function(event) {
    if (eggsList[8]!= "DiscoverEggs.png") {
        
        const image = document.getElementById("img8")
        console.log(image.src)
        image.src = `${eggsList[8]}`
        if (numberClick==0) {
            setTimeout(function() { 
                image.src = "DiscoverEggs.png"
            }, 1000)
        }
        numberClick+=1         
        if (numberClick==3) {
            let msg = document.getElementById('msgParabens').innerHTML = "Parabéns, encontraste os Ovos de Páscoa!"  
        }
    }
})

eleme9.addEventListener('click', function(event) {
    if (eggsList[9]!= "DiscoverEggs.png") {
        
        const image = document.getElementById("img9")
        console.log(image.src)
        image.src = `${eggsList[9]}`
        if (numberClick==0) {
            setTimeout(function() { 
                image.src = "DiscoverEggs.png"
            }, 1000)
        }
        numberClick+=1         
        if (numberClick==3) {
            let msg = document.getElementById('msgParabens').innerHTML = "Parabéns, encontraste os Ovos de Páscoa!"  
        }
    }
})
eleme10.addEventListener('click', function(event) {
    if (eggsList[10]!= "DiscoverEggs.png") {
        
        const image = document.getElementById("img10")
        console.log(image.src)
        image.src = `${eggsList[10]}`
        if (numberClick==0) {
            setTimeout(function() { 
                image.src = "DiscoverEggs.png"
            }, 1000)
        }
        numberClick+=1         
        if (numberClick==3) {
            let msg = document.getElementById('msgParabens').innerHTML = "Parabéns, encontraste os Ovos de Páscoa!"  
        }
    }
})
eleme11.addEventListener('click', function(event) {
    if (eggsList[11]!= "DiscoverEggs.png") {
        
        const image = document.getElementById("img11")
        console.log(image.src)
        image.src = `${eggsList[11]}`
        if (numberClick==0) {
            setTimeout(function() { 
                image.src = "DiscoverEggs.png"
            }, 1000)
        }
        numberClick+=1         
        if (numberClick==3) {
            let msg = document.getElementById('msgParabens').innerHTML = "Parabéns, encontraste os Ovos de Páscoa!"  
        }
    }
})
eleme12.addEventListener('click', function(event) {
    if (eggsList[12]!= "DiscoverEggs.png") {
        
        const image = document.getElementById("img12")
        console.log(image.src)
        image.src = `${eggsList[12]}`
        if (numberClick==0) {
            setTimeout(function() { 
                image.src = "DiscoverEggs.png"
            }, 1000)
        }
        numberClick+=1         
        if (numberClick==3) {
            let msg = document.getElementById('msgParabens').innerHTML = "Parabéns, encontraste os Ovos de Páscoa!"  
        }
    }
})




