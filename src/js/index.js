/*  
OBJETIVO 1 -  quando clicarmos na seta de avançar temos que mostrar o proximo cartão da lista
        - passo 1 - dar um jeito de pegar o elemento HTML da seta avançar
        - passo 2 0 dar um jeito de identificar o clique do usuário da seta avançar 
        - passo 3 - fazer aparecer o próximo elemento da lista
        - passo 4 - buscar o cartão que está selecionado e esconder

OBJETIVO 2 -  quando clicarmos na seta de voltar temos que mostrar o cartão anterior da lista
        - passo 1 - dar um jeito de pegar o elemento HTML da seta voltar
        - passo 2 0 dar um jeito de identificar o clique do usuário da seta voltar
        - passo 3 - fazer aparecer o elemento anterior da lista
        - passo 4 - buscar o cartão que está selecionado e esconder

*/

/*  
OBJETIVO 1 -  quando clicarmos na seta de avançar temos que mostrar o proximo cartão da lista
        - passo 1 - dar um jeito de pegar o elemento HTML da seta avançar
        - passo 2 0 dar um jeito de identificar o clique do usuário da seta avançar 
        - 
        - passo 4 - buscar o cartão que está selecionado e esconder */

    /*passo 1 - dar um jeito de pegar o elemento HTML da seta avançar*/
const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

    /*- passo 2 0 dar um jeito de identificar o clique do usuário da seta avançar*/

btnAvancar.addEventListener("click",function (){

 
    if(cartaoAtual === cartoes.length - 1) return
    
    /*passo 3 - fazer aparecer o próximo elemento da lista*/


cartaoAtual++;

cartoes[cartaoAtual].classList.add("selecionado");

    /*passo 4 - buscar o cartão que está selecionado e esconder */

const cartaoSelecionado = document.querySelector(".selecionado");
cartaoSelecionado.classList.remove("selecionado");
});
   


/*OBJETIVO 2 -  quando clicarmos na seta de voltar temos que mostrar o cartão anterior da lista
        - passo 1 - dar um jeito de pegar o elemento HTML da seta voltar
        - passo 2 0 dar um jeito de identificar o clique do usuário da seta voltar
        - passo 3 - fazer aparecer o elemento anterior da lista
        - passo 4 - buscar o cartão que está selecionado e esconder*/

        
        btnVoltar.addEventListener("click",function (){

            if(cartaoAtual === 0) return;

            const cartaoSelecionado = document.querySelector(".selecionado");
            cartaoSelecionado.classList.remove("selecionado");
 
            
           
        
        cartaoAtual--;
        
        cartoes[cartaoAtual].classList.add("selecionado");
        
        
        
        });
           
    
       