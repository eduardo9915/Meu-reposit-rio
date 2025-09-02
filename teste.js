function operacao(a, b, callback) {
    return callback(a, b);
}

const soma = (x, y) => x + y;
const multiplicacao = (x, y) => x * y;

console.log(operacao(3, 4, soma));
console.log(operacao(3, 4, multiplicacao));