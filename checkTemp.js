temp = prompt('Mitu kraadi on vesi?')
let liiga_külm = -1
let paras_temperatuur = 0
let liiga_kuum = 1

function checkTemp() {
    if (temp < 20) {
        console.log(liiga_külm)
    }
    else if (temp > 20 && temp <= 40) {
        console.log(paras_temperatuur)
    } 
    else if (temp > 40 && temp <= 60) {
        console.log(liiga_kuum)
    }
    
}

checkTemp()   



