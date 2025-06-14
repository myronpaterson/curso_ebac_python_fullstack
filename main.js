// Seleciona o elemento do formulário pelo seu ID único.
// Guardamos em uma constante 'form' para facilitar o acesso.
const form = document.getElementById('form-validador');

// Adiciona um 'escutador de eventos' ao formulário.
// Ele fica 'ouvindo' até que o evento 'submit' (envio) aconteça.
form.addEventListener('submit', function(e) { 
    // A função 'e.preventDefault()' impede o comportamento padrão do navegador,
    // que seria recarregar a página ao enviar o formulário.
    e.preventDefault();

    // Dentro da função, selecionamos os campos de input e a área de mensagem.
    const campoA = document.getElementById('campo-a');
    const campoB = document.getElementById('campo-b');
    const mensagemFeedback = document.querySelector('.feedback-message');

    // Pegamos os valores digitados nos campos e os convertemos de texto (string) para número.
    // Usamos parseFloat para permitir números com casas decimais.
    const valorA = parseFloat(campoA.value);
    const valorB = parseFloat(campoB.value);

    // Esta é a nossa principal regra de negócio.
    // Verificamos se o valor de B é estritamente maior que o de A.
    if (valorB > valorA) {
        // Se a condição for verdadeira (formulário válido):
        // 1. Inserimos uma mensagem de sucesso no nosso parágrafo de feedback.
        mensagemFeedback.innerHTML = `Formulário válido! O número <b>${valorB}</b> é maior que o número <b>${valorA}</b>.`;
        // 2. Trocamos a classe do parágrafo para 'success', que no CSS tem fundo verde.
        mensagemFeedback.className = 'feedback-message success';

        // 3. Limpamos os campos para uma nova validação.
        campoA.value = '';
        campoB.value = '';

    } else {
        // Se a condição for falsa (formulário inválido):
        // 1. Inserimos uma mensagem de erro no parágrafo.
        mensagemFeedback.innerHTML = `Formulário inválido! O número B (<b>${valorB}</b>) precisa ser maior que o número A (<b>${valorA}</b>).`;
        // 2. Trocamos a classe do parágrafo para 'error', que no CSS tem fundo vermelho.
        mensagemFeedback.className = 'feedback-message error';
    }
});