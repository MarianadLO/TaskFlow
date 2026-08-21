const form = document.querySelector("#form-area");
const listaTarefas = document.querySelector("#task-list");
const tarefaInput = document.querySelector("#tarefa_titulo");
const categoriaSelect = document.querySelector("#tarefa_categoria");
const tarefaSelect = document.querySelector("#tarefa_prioridade");


form.addEventListener("submit", function(event){

    event.preventDefault();

    const titulo = tarefaInput.value;
    const categoria = categoriaSelect.value;
    const prioridade = tarefaSelect.value;

    const novaTarefa = {
        titulo,
        categoria,
        prioridade,
    };

    const li = document.createElement("li");
    const mainTask = document.createElement("div");
    const input = document.createElement("input");
    const h2 = document.createElement("h2");
    const infoTask = document.createElement("div");
    const spanPrioridade = document.createElement("span");
    const spanCategoria = document.createElement("span");

    mainTask.classList.add("main-task");    
    infoTask.classList.add("info-task");


    input.type="checkbox";
    h2.textContent = novaTarefa.titulo;
    spanCategoria.textContent = novaTarefa.categoria;
    spanPrioridade.textContent = novaTarefa.prioridade;

    mainTask.appendChild(input);
    mainTask.appendChild(h2);

    infoTask.appendChild(spanCategoria);
    infoTask.appendChild(spanPrioridade);

    li.appendChild(mainTask);
    li.appendChild(infoTask);

    // 6. Jogando o card completo na tela e limpando o formulário
    listaTarefas.appendChild(li);
    form.reset();

    console.log("Seu formulário foi enviado com sucesso.")
})