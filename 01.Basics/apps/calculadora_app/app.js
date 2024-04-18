function adicionar(num){
    let calculo = document.getElementsByClassName('resultado').item(0).value;

    let ultimo = calculo.charAt(calculo.length - 1);
    if(ultimo == '+' || ultimo == '-' || ultimo == '*' || ultimo == '/' || ultimo == '.'){
        if(num == '+' || num == '-' || num == '*' || num == '/' || num == '.'){
            calculo = calculo.substring(0, calculo.length - 1);
        }
    }

    calculo += num;
    document.getElementsByClassName('resultado').item(0).value = calculo;
    
}

function limpar(){
    document.getElementsByClassName('resultado').item(0).value = '';
}

function calcular(){
    let calculo = document.getElementsByClassName('resultado').item(0).value;
    let resultado = eval(calculo);
    document.getElementsByClassName('resultado').item(0).value = resultado;
}