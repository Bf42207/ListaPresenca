// script.js
function adicionarPresenca() {
    const nomeInput = document.getElementById("nome");
    const nome = nomeInput.value.trim();

    if (nome) {
        const listaPresenca = document.getElementById("lista-presenca");
        
        const listItem = document.createElement("li");
        listItem.textContent = nome;

        listaPresenca.appendChild(listItem);
        nomeInput.value = ""; // Limpa o campo após adicionar
        nomeInput.focus(); // Foca no campo para facilitar adicionar outro nome
    } else {
        alert("Por favor, digite um nome!");
    }
}
