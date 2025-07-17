// Arquivo: src/scripts/main.js

// Esta função será executada quando todo o conteúdo da página for carregado.
document.addEventListener('DOMContentLoaded', function() {
    
    const titulo = document.querySelector('h1');

    // Um evento simples que muda a cor do título quando o mouse passa por cima.
    titulo.addEventListener('mouseover', function() {
        // O título ficará roxo
        this.style.color = '#8e44ad';
        this.style.cursor = 'pointer'; // Muda o cursor para indicar que é clicável
    });

    // Evento que faz a cor do título voltar ao normal quando o mouse sai.
    titulo.addEventListener('mouseout', function() {
        // A cor volta a ser a rosa definida no LESS
        this.style.color = ''; // Remove o estilo inline, voltando ao do CSS
    });
});