function simularAtraso(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function processar(){
    await simularAtraso(2000);
    console.log('Processamento concluído!');
}

processar();