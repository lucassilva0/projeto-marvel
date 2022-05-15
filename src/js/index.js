/* 
 Objetivo 1 - Quando passar o mouse por cima do personagem temos que:
 
 - colocar a classe selecionado no personagem que passamos o mouse em cima para adicionar a animação nele

 - retirar a classe selecionado do personagem que está selecionado


 Objeitvo 2 - Quando passar o mouse por cima do personagem,rocar a imagem e nome do personagem grande
 
 - alterar imagem do pjogador 1
 - alterar o nome do jogador 1
*/

/*
Objetivo 1 - Quando passar o mouse por cima do personagem temos que:
 
 - colocar a classe selecionado no personagem que passamos o mouse em cima para adicionar a animação nele

 - retirar a classe selecionado do personagem que está selecionado
 */

const personagens = document.querySelectorAll(".personagem");

personagens.forEach((personagem) => {
  personagem.addEventListener("mouseenter", () => {

    const idSelecionado = personagem.attributes.id.value;
    if(idSelecionado === 'ultron') return;

    const personagemSelecionado = document.querySelector(".selecionado");
    personagemSelecionado.classList.remove("selecionado");

    personagem.classList.add("selecionado");

    /* 
    Objeitvo 2 - Quando passar o mouse por cima do personagem da listagem,rocar a imagem e nome do personagem grande
    - alterar imagem do pjogador 1
    - alterar o nome do jogador 1
*/
  
    const imagemJogador1 = document.getElementById('personagem-jogador-1');
    imagemJogador1.src = `./src/imagens/${idSelecionado}.png`;

    const nomeJogador1 = document.getElementById('nome-jogador-1');
    const nomeSelecionado = personagem.getAttribute('data-name');
    
    nomeJogador1.innerHTML = nomeSelecionado;
  });
});
