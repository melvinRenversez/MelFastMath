const select = document.getElementById('select')
const generer = document.getElementById('generer')
const textCalcul = document.getElementById('calcul')
const reponse = document.getElementById('reponse')
const send = document.getElementById('send')
const info = document.getElementById('info')
const infoText = document.getElementById('info-text')
const menu = document.getElementById('menu')
const menuSwitch = document.querySelectorAll('#menu-switch')
const close = document.querySelector('.bx-x')
const open = document.querySelector('.bx-menu')
const autorisationPlus = document.getElementById('check+')
const autorisationMoin = document.getElementById('check-')
const autorisationFois = document.getElementById('check*')
const autorisationDiv = document.getElementById('check/')


var nbr = []
var operation = []

var calculGenerer = false
var resula
var time

generer.addEventListener('click', ()=>{
    nbr = []
    operation = []
    const nbrOperation = parseInt(select.value)
    for(i = 0; i < nbrOperation + 1; i++){
        nbr[i] = Math.floor(Math.random() * 100)
    }
    for(i = 0; i < nbrOperation ; i++){
        x = Math.floor(Math.random() * 3)
        console.log("x " + x)
        if(x == 0 && autorisationPlus.checked){
            operation[i] = " + "            
        }else if(x == 0){
            x += 1
        }
        if(x == 1 && autorisationMoin.checked){
            operation[i] = " - "
        }else if(x == 1){
            x += 1
        }
        if(x == 2 && autorisationFois.checked){
            operation[i] = " * "
        }else if(x == 2){
            x += 1
        }
        if(x == 3 && autorisationDiv.checked){
            operation[i] = " / "
        }else if(x == 3){
            x = 0
            if(x == 0 && autorisationPlus.checked){
                operation[i] = " + "            
            }else if(x == 0){
                x += 1
            }
            if(x == 1 && autorisationMoin.checked){
                operation[i] = " - "
            }else if(x == 1){
                x += 1
            }
            if(x == 2 && autorisationFois.checked){
                operation[i] = " * "
            }else if(x == 2){
                x += 1
            }
        }
    }
    console.log(nbr)
    console.log(operation)
    var calcul = ""
    for(i = 0; i < nbrOperation + 1; i++){
        calcul += nbr[i] 
        if(operation[i] != undefined){
            calcul += operation[i]
        }else{
            calcul += " ="
        }
        console.log(calcul)
    }
    textCalcul.innerHTML = calcul
    resula  = nbr[0]
    for(i = 0; i < nbrOperation + 1; i++){
        if(operation[i] == " + "){  
            resula += nbr[i+1]        
        }
        if(operation[i] == " - "){
            resula -= nbr[i+1]
        }
        if(operation[i] == " * "){
            resula *= nbr[i+1]
        }
        if(operation[i] == " / "){
            resula /= nbr[i+1]
        }
    }
    console.log("resulta =", resula)


    calculGenerer = true
}) 


send.addEventListener('click', ()=>{

    if(calculGenerer){
        console.log('send')
        currentReponse = reponse.value
        if(currentReponse != ""){
            console.log('reponse resevable')
            if(currentReponse == resula){
                infoText.innerHTML = "Vrai"
                info.classList.add('affiche')
                setTimeout(removeInfo, 3000)
            }else{
                infoText.innerHTML = "Faux"
                info.classList.add('affiche')
                setTimeout(removeInfo, 3000)
            }
        }
        reponse.value = ""
    }
})

function removeInfo(){
    info.classList.remove('affiche')
    console.log('loop')
}

menuValue = "close"
menuSwitch.forEach(Switch => {
    Switch.addEventListener('click', ()=>{
        console.log('click')
        if(menuValue == "close"){
            menuValue = "open"
            menu.classList.remove('hidden')
            open.classList.remove('active')
            close.classList.add('active')
        }else{
            menuValue = "close"
            menu.classList.add('hidden')
            open.classList.add('active')
            close.classList.remove('active')
        }
    })
});