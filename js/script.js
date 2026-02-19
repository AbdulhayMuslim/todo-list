const addBtn = document.getElementById("addbtn");
const rmBtn = document.getElementById('rmbtn');

// var notes = [''];

// addBtn.addEventListener('click', addnote);

// function addnote() {
//     let newN = prompt('Write your note:');

//     newN.push(notes);
// };

// console.log(notes);

const notebox = document.querySelector('.note')

addBtn.addEventListener("click", () => {
    let newmsg= document.createElement('p');
    newmsg.textContent = 'Welcome to my page';
    notebox.appendChild(newmsg);
})