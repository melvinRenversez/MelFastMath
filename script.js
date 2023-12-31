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

console.log(selectValeurMax)

var selectValeurMax = document.getElementById('valeurMax')
for(i = 1; i < 101; i++){
    let option = document.createElement('option')
    option.value = 101 - i
    option.text = 101 -i
    selectValeurMax.add(option)
}

generer.addEventListener('click', ()=>{
    genererLesNombreEtOperation()
}) 


send.addEventListener('click', ()=>{
    verifierLaReponse()
})


menuValue = "close"
menuSwitch.forEach(Switch => {
    Switch.addEventListener('click', ()=>{
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

document.addEventListener('keydown', (e)=>{
    if(e.keyCode == "13"){
        verifierLaReponse()
    }
})

function verifierLaReponse(){
    if(calculGenerer){
        currentReponse = reponse.value
        if(currentReponse != ""){
            if(currentReponse == resula){
                infoText.innerHTML = "Réponse vrai"
                info.classList.add('affiche')
                setTimeout(removeInfo, 3000)
                setTimeout(genererLesNombreEtOperation, 3200)
            }else{
                infoText.innerHTML = "Réponse faux"
                info.classList.add('affiche')
                setTimeout(removeInfo, 3000)
            }
        }
        reponse.value = ""
    }
}


function calculerLeResultat(){
    
    const nbrOperation = parseInt(select.value)
    var calcul = ""
    for(i = 0; i < nbrOperation + 1; i++){
        calcul += nbr[i] 
        if(operation[i] != undefined){
            calcul += operation[i]
        }else{
            calcul += " ="
        }
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


    calculGenerer = true

}


function genererLesNombreEtOperation(){

    nbr = []
    operation = []
    const nbrOperation = parseInt(select.value)
    valueMax = selectValeurMax.value
    for(i = 0; i < nbrOperation + 1; i++){
        nbr[i] = Math.floor(Math.random() * valueMax)
    }
    for(i = 0; i < nbrOperation ; i++){
        x = Math.floor(Math.random() * 3)
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
    calculerLeResultat()
}


function removeInfo(){
    info.classList.remove('affiche')
}