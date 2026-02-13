const addBtn = document.getElementById('#addbtn');
const rmBtn = document.getElementById('#rmbtn');
const noteCard = document.getElementsByClassName('.notes');

addBtn.addEventListener("click", addnote);
function addnote() {
    let newNote = prompt('Add your new note:')

    let note = document.createElement('div')

    newNote.
}