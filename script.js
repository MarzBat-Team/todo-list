function onSubmit() {
    const list = document.getElementById('list');

    const li = Array.from(list.getElementsByTagName('li'));

    li.shift();

    list.innerHTML = `
        <li>${li[0].innerHTML}</li>
        <li>${li[1].innerHTML}</li>
        <li>${li[2].innerHTML}</li>
        <li>${li[3].innerHTML}</li>
    `;
}
