const addBtn = document.getElementById("addbtn");
const rmBtn = document.getElementById('rmbtn');

var notes = [''];

addBtn.addEventListener('click', addnote);

function addnote() {
    let newN = prompt('Write your note:');

    newN.push(notes);
};

console.log(notes);