let temp = prompt('Mitu kraadi on vesi?');
let liiga_külm = -1;
let paras_temperatuur = 0;
let liiga_kuum = 1;

function checkTemp() {
    temp = parseFloat(temp); // Input floatiks

    if (temp < 20) {
        console.log("liiga_külm");
        return "liiga_külm"; // Tagastab string value
    } else if (temp >= 20 && temp <= 40) {
        console.log("paras_temperatuur");
        return "paras_temperatuur"; // Tagastab string value
    } else if (temp > 40 && temp <= 60) {
        console.log("liiga_kuum");
        return "liiga_kuum"; // Tagastab string value
    } else {
        console.log("Invalid temperature");
        return "Invalid temperature"; // Error kui temp out of range
    }
}

let result = checkTemp();
console.log(result); // Results
