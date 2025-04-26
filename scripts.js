let body = document.querySelector("body");
let tenis = document.querySelector(".imagem-tenis");
let contadorCarrinho = 0;

function mudarVisual(cor, imagem) {
    tenis.classList.add("troca-efeito");
    body.style.background = cor;

    setTimeout(() => {
        tenis.src = imagem;
        tenis.classList.remove("troca-efeito");
    }, 500);
}

function adicionarAoCarrinho() {
    contadorCarrinho++;
    document.getElementById('contador-carrinho-notificacao').textContent = `Carrinho (${contadorCarrinho})`;

    let notificacao = document.getElementById('notificacao-carrinho');
    notificacao.style.display = 'block';

    setTimeout(() => {
        notificacao.style.display = 'none';
    }, 3000);
}

function fecharNotificacao() {
    let notificacao = document.getElementById('notificacao-carrinho');
    notificacao.style.display = 'none';
}

// Adiciona evento ao botão de carrinho
document.addEventListener('DOMContentLoaded', () => {
    const botaoCarrinho = document.querySelector('.botao-carrinho');
    botaoCarrinho.addEventListener('click', adicionarAoCarrinho);
});
