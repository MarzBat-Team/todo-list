function onSubmit() {
    // Pega a referência da lista
    const list = document.getElementById('list');
    // Pega a referência do input de texto
    const text = document.getElementById('text').value;

    // Valida se o campo de texto está vazio
    if (text == '') {
        return;
    }

    // Converte a lista para array
    const li = Array.from(list.getElementsByTagName('li'));

    // Adiciona novo item no início da lista
    list.innerHTML = `<li id="new-task">${text} <button onClick="finishTask(event)" type="button">✅ concluir</button></li>`;

    // Percorre a lista li
    for (let index = 0; index < li.length; index++) {
        // Incrementa a lista concatenando o valor que já existe com o novo
        list.innerHTML = list.innerHTML + `<li id="task${index}">${li[index].innerHTML}</li>`;
    }

    // Limpa o campo de texto após adicionar nova task
    document.getElementById('text').value = '';
}

// Remove a task concluída
function finishTask(event) {
    // Pega o id do element anterior ao botão
    const id = event.target.parentElement.id;

    // Remove o elemento
    document.getElementById(id).remove();
}
