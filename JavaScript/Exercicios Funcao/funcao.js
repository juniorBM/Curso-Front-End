function alerta() {
    alert('Hello World!');
}

function soma(n1, n2) {
    alert('Soma de ' + n1 + ' + ' + n2 + ' = ' + (n1+n2));
}

function div(n1, n2) {
    alert('Divisão de ' + n1 + ' / ' + n2 + ' = ' + (n1/n2));
}

function sub(n1, n2) {
    alert('Subtração de ' + n1 + ' - ' + n2 + ' = ' + (n1-n2));
}

function mult(n1, n2) {
    alert('Multiplicação de ' + n1 + ' * ' + n2 + ' = ' + (n1*n2));
}


function ligar() {
    if (!ligada) {
        document.getElementById("lamp").src = "on.jpg";
        ligada = true;
    }
}