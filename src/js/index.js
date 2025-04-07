/*
  Descrição Geral:
  1. Ao clicar em um botão da lista, a função remove a seleção do botão atualmente selecionado e adiciona a classe "selecionado"
     ao botão clicado.
  2. Da mesma forma, a função remove a seleção do personagem atualmente exibido e mostra o personagem correspondente
     ao índice do botão clicado.
*/

// Seleciona todos os botões e personagens da página
const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagem");

/**
 * Remove a classe "selecionado" do botão que estiver selecionado atualmente.
 */
function removerSelecaoBotao() {
  const botaoSelecionado = document.querySelector(".botao.selecionado");
  if (botaoSelecionado) {
    botaoSelecionado.classList.remove("selecionado");
  }
}

/**
 * Adiciona a classe "selecionado" ao botão passado como argumento.
 * @param {HTMLElement} botao - Botão que será marcado como selecionado.
 */
function selecionarBotao(botao) {
  botao.classList.add("selecionado");
}

/**
 * Remove a classe "selecionado" do personagem atualmente exibido.
 */
function removerSelecaoPersonagem() {
  const personagemSelecionado = document.querySelector(".personagem.selecionado");
  if (personagemSelecionado) {
    personagemSelecionado.classList.remove("selecionado");
  }
}

/**
 * Adiciona a classe "selecionado" ao personagem correspondente ao índice informado.
 * @param {number} indice - Índice do personagem a ser exibido.
 */
function selecionarPersonagem(indice) {
  personagens[indice].classList.add("selecionado");
}

/**
 * Inicializa os event listeners para os botões, permitindo a alternância de seleção e exibição dos personagens.
 */
function initSelecaoPersonagens() {
  botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
      removerSelecaoBotao();     // Remove a seleção do botão atual
      selecionarBotao(botao);      // Marca o botão clicado como selecionado

      removerSelecaoPersonagem();  // Remove a exibição do personagem atualmente selecionado
      selecionarPersonagem(indice); // Exibe o personagem correspondente ao botão clicado
    });
  });
}

// Chama a função de inicialização para ativar os eventos na página
initSelecaoPersonagens();
