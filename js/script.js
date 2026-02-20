const addBtn = document.querySelector("#addbtn");
const notes = document.querySelector('.notes')

addBtn.addEventListener("click", () => {

    let noteBox = document.createElement('div')
    noteBox.className = 'note'

    let trash = document.createElement('i')
    trash.className = 'fa-solid fa-trash'

    let userInput = prompt('Enter your note:');
    
    let newNote= document.createElement('p');
    newNote.textContent = userInput;

    notes.appendChild(noteBox);
    noteBox.appendChild(newNote)
    noteBox.appendChild(trash)
});