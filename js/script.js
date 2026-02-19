const addBtn = document.getElementById("addbtn");
const rmBtn = document.getElementById('rmbtn');

const notebox = document.querySelector('.note')
const noteboxparent = document.querySelector('.notes')

addBtn.addEventListener("click", () => {
    let newnotebox = document.createElement('div')
    newnotebox.className = 'note'
    let newmsg= document.createElement('p');
    let userNote = prompt('Enter your note:');
    newmsg.textContent = userNote;
    noteboxparent.appendChild(newnotebox);
    newnotebox.appendChild(newmsg)
})