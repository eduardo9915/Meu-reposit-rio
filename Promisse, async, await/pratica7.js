const myPromise = new Promise((resolve) => {
    const nome = "Carlos";
    resolve(nome);
});

myPromise.then((nome) => {
    if (nome === "Carlos") {
        setTimeout(() => {
            console.log("Usuário " + nome + " encontrado");
        }, 1000);
    } else {
        setTimeout(() => {
            console.log("Usuário não encontrado");
        }, 1000);
    }
});