const addBtn = document.querySelector("#addbtn");
const notes = document.querySelector('.notes')

addBtn.addEventListener("click", () => {

    let noteBox = document.createElement('div')
    noteBox.className = 'note'

    let trash = document.createElement('i')
    trash.className = 'fa-solid fa-trash'

    let userInput = document.createElement('input').className = 'userInput';
    userInput.type = 'textarea';
    userInput.placeholder = 'Enter your note';

    if (userInput === null || userInput.trim() === '') return;
    
    let newNote= document.createElement('p');
    newNote.textContent = userInput;

    notes.appendChild(noteBox);
    noteBox.appendChild(newNote)
    noteBox.appendChild(trash)

});

notes.addEventListener('click', (e) =>{
    if (e.target.classList.contains('fa-trash')){
        e.target.parentElement.remove();
    }
})