const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.onclick = () => {
    let chapterItem = input.value;
    input.value = '';

    const listChapter = document.createElement('li');
    const listSpan = document.createElement('span');
    const deleteButton = document.createElement('button');

    listChapter.appendChild(listSpan);
    listSpan.textContent = chapterItem;
    listChapter.appendChild(deleteButton);
    deleteButton.textContent = 'X';
    list.appendChild(listChapter);

    deleteButton.addEventListener('click', (e) => {
        list.removeChild(listChapter);
    })
    input.focus();
};