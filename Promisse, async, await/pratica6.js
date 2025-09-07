const executarOperacao = (a, callback) => {
    return callback(a);
}

callback = (a) => {
    const dobro = a * 2;
    return dobro;
}
console.log(executarOperacao(1, callback));