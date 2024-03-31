function sortear(){
    var quantidade = parseInt(document.getElementById('quantidade').value);
    var doNumero = parseInt(document.getElementById('de').value);
    var ateONumero = parseInt(document.getElementById('ate').value);
    var numerosSorteados = [];
    var numeros;
  
    for(let i = 0; i < quantidade; i++){
        numeros = criarNumerolAleatorio(doNumero,ateONumero);
       while (numerosSorteados.includes(numeros)){
        numeros = criarNumerolAleatorio(doNumero,ateONumero);
       }
        numerosSorteados.push(numeros);
     }
        var resultado = document.getElementById('resultado');
        resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${numerosSorteados}</label>`
    
    
}function criarNumerolAleatorio (min,max){
    return parseInt(Math.random() * (max - min)) + min;
 
}function alterarEstatus(){
    var botaoReiniciar = document.getElementById('btn-reiniciar');
    if(botaoReiniciar.classList.contains('container__botao-desabilitado')){
       botaoReiniciar.classList.remove('container__botao-desabilitado');
       botaoReiniciar.classList.add('container__botao');
    }else{
       botaoReiniciar.classList.remove('container__botao');
       botaoReiniciar.classList.add('btn-reiniciar');
    }
}function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'
alterarEstatus();
}

