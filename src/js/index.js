/*
 
OBJETIVO 1 - Quando clicarmos nas setas avançar e voltar temos que passar as cartas
 -PASSO 1 - dar um jeito de pegar o elemento HTML da seta avancar
 -PASSO 2 - dar um jeito de indentificar o clique do usuário na seta avacar
 -PASSO 3 - Fazer aparecer  próximo cartão da lista
 -PASSO 4 - Buscar o cartão que ta selecionado e esconder

*/
   const btnAvancar = document.getElementById("btn-avancar"); 
   const btnVoltar = document.getElementById("btn-voltar"); 
   const cartoes = document.querySelectorAll(".cartao");
   let cartaoAtual = 0;

   function esconderCartaoSelecionado(){
      const cartaoSelecionado = document.querySelector(".selecionado");
      cartaoSelecionado.classList.remove("selecionado");
   }

   function mostrarCartao(indiceCartao){
      cartoes[indiceCartao].classList.add("selecionado");
   }

 
btnAvancar.addEventListener("click", function () { 
   if(cartaoAtual === cartoes.length - 1) return;

   esconderCartaoSelecionado();

   cartaoAtual++;
   mostrarCartao(cartaoAtual);
   
   
});

  
btnVoltar.addEventListener("click", function () { 

   if(cartaoAtual === 0) return;
   
   esconderCartaoSelecionado();

   cartaoAtual--;
  
   mostrarCartao(cartaoAtual);
   
  
});