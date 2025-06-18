// A sintaxe $(document).ready() garante que o código só será executado
// depois que todo o documento HTML for carregado e estiver pronto.
$(document).ready(function() {

    // Evento de submissão do formulário
    $('#task-form').on('submit', function(event) {
        // Impede o comportamento padrão do formulário (recarregar a página)
        event.preventDefault();

        // Pega o elemento do input da tarefa
        const taskInput = $('#task-input');
        // Pega o valor (texto) digitado no input
        const taskText = taskInput.val();

        // Verifica se o campo não está vazio
        if (taskText.trim() !== '') {
            // Adiciona a nova tarefa na lista
            // 1. Cria um novo elemento <li> com o texto da tarefa
            // 2. Anexa (append) esse novo <li> à nossa <ul>
            $('#task-list').append(`<li>${taskText}</li>`);

            // Limpa o campo do input após adicionar a tarefa
            taskInput.val('');
        }
    });

    // Evento de clique nos itens da lista (li)
    // Usamos 'event delegation' para que o evento funcione também
    // para os novos <li> que serão adicionados dinamicamente.
    $('#task-list').on('click', 'li', function() {
        // $(this) se refere ao <li> específico que foi clicado
        // .toggleClass() adiciona a classe se ela não existir,
        // e remove se ela já existir. É perfeito para marcar/desmarcar.
        $(this).toggleClass('completed');
    });
});