var hoje = new Date();
console.log(hoje);

var hoje2 = new Date(2017, 11, 10);
console.log(hoje2);


var data = new Date('2016-12-25');
console.log(data);

// console.log(data);
console.log(data.toString().split('T').reverse().join('/'));