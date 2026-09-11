// ===== REFERÊNCIAS AO HTML =====
const form = document.querySelector("#form-area");
const listaTarefas = document.querySelector("#task-list");
const tarefaInput = document.querySelector("#tarefa_titulo");
const categoriaSelect = document.querySelector("#tarefa_categoria");
const tarefaSelect = document.querySelector("#tarefa_prioridade");
const totalTarefas =document.querySelector("#total-tarefas");
const tarefas = [];


form.addEventListener("submit", function(event){

    event.preventDefault();

     // ===== VALORES PREENCHIDOS PELO USUÁRIO =====
    const titulo = tarefaInput.value;
    const categoria = categoriaSelect.value;
    const prioridade = tarefaSelect.value;

    // ===== REPRESENTAÇÃO DE UMA TAREFA =====
    const novaTarefa = {
        titulo,
        categoria,
        prioridade,
        concluida:false,
    };

    // ======== ADIÇÃO DE NOVA TAREFA AO ARRAY E INSERÇÃO NO DISPLAY DE TAREFAS =========

    tarefas.push(novaTarefa);
    totalTarefas.textContent = tarefas.length;

    // ======== CRIAÇÃO DO CARD DE TAREFA ========
    const li = document.createElement("li");
    const mainTask = document.createElement("div");
    const input = document.createElement("input");
    const h2 = document.createElement("h2");
    const infoTask = document.createElement("div");
    const spanPrioridade = document.createElement("span");
    const spanCategoria = document.createElement("span");

    if (novaTarefa.prioridade === "Alta") {
        spanPrioridade.classList.add("alta");
    } else if (novaTarefa.prioridade === "Média") {
        spanPrioridade.classList.add("media");
    } else if (novaTarefa.prioridade === "Baixa") {
        spanPrioridade.classList.add("baixa");
    };

    // ======== ADIÇÃO DAS CLASSES CSS AOS ELEMENTOS DO CARD ========
    mainTask.classList.add("main-task");    
    infoTask.classList.add("info-task");

    
    input.type="checkbox";
    h2.textContent = novaTarefa.titulo;
    spanCategoria.textContent = novaTarefa.categoria;
    spanPrioridade.textContent = novaTarefa.prioridade;
    spanPrioridade.classList.add("prioridade");

    // =========== CONSTRUÇÃO DO CARD =========
    mainTask.appendChild(input);
    mainTask.appendChild(h2);
    
    infoTask.appendChild(spanCategoria);
    infoTask.appendChild(spanPrioridade);
    
    li.appendChild(mainTask);
    li.appendChild(infoTask);
    
    // ==== Jogando o card completo na tela e limpando o formulário =========
    listaTarefas.appendChild(li);
    form.reset();


    console.log("Seu formulário foi enviado com sucesso.");

    

})