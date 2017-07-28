//Exercicio 1
var carros = ['Ferrari', 'BMW', 'Jaguar', 'Mercedes'];
for (i=0; i < carros.length; i++){
    console.log('Carro: ' + carros[i]);
}

//Exercicio 2
for(i=0; i < carros.length; i++) {
    if (carros[i] == 'Jaguar') {
        console.log('\nCarro: ' + carros[i]);
        break;
    }
}
//Exercicio 3
carros.unshift('Fusca');
console.log('\nCarros: ' + carros);

//Exercicio 4
console.log('Quantidade de itens: ' + carros.length);