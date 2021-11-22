const display = document.getElementById("display");
var numeronovo = true;
var operador;
var numeroanterior; 

function inserirNumero(numero) {
    atualizarDisplay(numero);
}

function atualizarDisplay(numero){
    if(numeronovo == true){
        display.value = numero;
        numeronovo = false
    }else {
        display.value += numero;
    }
}
function backspace() {
    display.value = display.value.slice(0, -1);
}



function selecionarOperacao(operaçaoSelecionada) {
    if(numeronovo == false){
        calcular()
        numeronovo = true;
        operador = operaçaoSelecionada;
        numeroanterior = Number(display.value); 
    }
} 

function operacaopendente() {
    return operador !== undefined
}

function calcular() {
    if(operacaopendente() == true){
        var numeroatual = Number(display.value);
        numeronovo = true;

        if(operador == "+"){
            atualizarDisplay(numeroanterior + numeroatual);
        } else if (operador == "-"){
            atualizarDisplay(numeroanterior - numeroatual);
        } else if (operador == "*"){
            atualizarDisplay(numeroanterior * numeroatual);
        } else if (operador == "/"){
            atualizarDisplay(numeroanterior / numeroatual);
        } 
    }
} 

function chamarigual() {
    calcular()
    operador = undefined
}

function limpar() {
    display.value = "0";
    numeronovo = true;
    numeroanterior = undefined
    operador = undefined
}

function inserirdecimal() {
    if(display.value.indexOf(".") == -1){
        if(display.value.length > 0){
            atualizarDisplay(".");
        }else{
            atualizarDisplay("0.")
        }
    }
}

function clicouTecla(event){
    switch(event.key){
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "0":
        case "1":
            inserirNumero(event.key)
            break;
        case 'Delete':
            backspace();
            break;
        case '+':                         
        case '-':                          
        case '/':                          
        case '*':
            selecionarOperacao(event.key)
            break;
        case 'f': 
            limpar();
            break;   
        case '=': 
            chamarigual();
            break;   
        case '.': 
            inserirdecimal();    
        }
    }
