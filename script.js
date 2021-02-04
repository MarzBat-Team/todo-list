function onSubmit() {
    const list = document.getElementById('list');
    const text = document.getElementById('text').value;

    const li = Array.from(list.getElementsByTagName('li'));

    list.innerHTML = `<li>${text}</li>`;
    for (let index = 0; index < li.length; index++) {
        list.innerHTML = list.innerHTML + `<li>${li[index].innerHTML}</li>`;
    }

}
