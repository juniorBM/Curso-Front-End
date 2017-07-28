var nota1 = Math.floor(Math.random() * 10);
var nota2 = Math.floor(Math.random() * 10);
var nota3 = Math.floor(Math.random() * 10);
var nota4 = Math.floor(Math.random() * 10);

media = (nota1 + nota2 + nota3 + nota4) / 4;

if (media >= 6) {
    console.log('Media: '+ media + ' Aprovado!');
}else {
    console.log('Media: '+ media + ' Reprovado');
}

console.log( nota1 , nota2, nota3, nota4);