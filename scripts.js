let body = document.querySelector("body")
let tenis = document.querySelector(".imagem-tenis")
let botao = document.querySelector(".botao-carrinho")
// document = html
// querySelector = pegador / selecionador

function mudarVisual(cor, imagem) {
    tenis.classList.add("troca-efeito")

    body.style.background = cor
    botao.style.background = cor // Altera a cor do botão

    setTimeout(() => {
        tenis.classList.remove("troca-efeito")
        tenis.src = imagem
    }, 500);
}

// Adicionando responsividade
function ajustarResponsividade() {
    if (window.innerWidth < 768) {
        // Ajustes para telas menores
        body.style.fontSize = "14px";
        botao.style.width = "100%";
    } else {
        // Ajustes para telas maiores
        body.style.fontSize = "16px";
        botao.style.width = "auto";
    }
}

// Chamar a função ao carregar a página e ao redimensionar
window.onload = ajustarResponsividade;
window.onresize = ajustarResponsividade;



