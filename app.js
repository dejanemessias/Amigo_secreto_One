// O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação.
// Aqui você deverá desenvolver a lógica para resolver o problema.

// Criar um vetor_lista para armazenar os nomes dos amigos
const listaAmigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    // Capturar o valor digitado no campo de entrada
    const input = document.getElementById("amigo");
    const nome = input.value.trim();
    
    // Verificar se o campo está vazio
    if (nome === "") {
        alert("Campo vazio, por favor preencha o nome do amigo");
        return;
    }
    
    // Verificar se o nome já foi adicionado
    if (listaAmigos.includes(nome)) {
        alert("Este nome já foi adicionado!");
        return;
    }
    
    // Adicionar o nome à lista de amigos
    listaAmigos.push(nome);
    atualizarLista();
    
    // Limpar o campo de entrada após adicionar
    input.value = "";
}

// Função para atualizar a lista exibida na interface
function atualizarLista() {
    const ul = document.getElementById("listaAmigos");
    ul.innerHTML = "";
    
    listaAmigos.forEach((nome, index) => {
        const li = document.createElement("li");
        li.textContent = nome;

        // Criar botão de remoção para cada nome
        const btnRemover = document.createElement("button"); // Criar um botão comum
        btnRemover.textContent = "❌";
        btnRemover.classList.add("button-remove"); // Adicionar a classe CSS correta
        btnRemover.onclick = () => removerAmigo(index);

        li.appendChild(btnRemover);
        ul.appendChild(li);
    });
}


// Função para remover um amigo da lista
function removerAmigo(index) {
    listaAmigos.splice(index, 1);
    atualizarLista();
}


// Função para sortear um amigo aleatoriamente
let ultimoSorteado = null; // Armazena o último amigo sorteado para evitar repetição

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("A lista está vazia! Adicione amigos antes de sortear.");
        return;
    }
    
    let sorteado;
    do {
        sorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    } while (listaAmigos.length > 1 && sorteado === ultimoSorteado);

    ultimoSorteado = sorteado; // Atualiza o último sorteado

    const resultado = document.getElementById("resultado");
    
    // Efeito de "carregamento" antes de mostrar o nome sorteado
    resultado.innerHTML = `<p>Sorteando...</p>`;
    setTimeout(() => {
        resultado.innerHTML = `<p>🎉 Amigo sorteado: <strong>${sorteado}</strong> 🎉</p>`;
    }, 1000);
}
