const nome = "josé";
const peso = 100;
const altura = 1.88;

const imc = peso/(altura* altura);

message = imc >= 30 ? `${nome} você esta acima do peso seu imc é de ${imc}` : `${nome} você não esta acima do peso seu imc é de ${imc}`

console.log(message)