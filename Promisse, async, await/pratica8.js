async function buscarDados() {
    try {
        await fetch('https://api.exemplo.com/dados')
            .then(response => response.json()
            .then(data => {
                console.log(data);
            }))
    }catch (erro) {
        console.error('Erro:', erro);
    }
}
buscarDados();