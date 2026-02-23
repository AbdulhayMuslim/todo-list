const addBtn = document.querySelector("#addbtn");
const notes = document.querySelector(".notes");

function createNoteElement() {
  const noteBox = document.createElement("div");
  noteBox.className = "note";

  const btnBox = document.createElement("div");
  btnBox.className = "btn-box";

  const trash = document.createElement("i");
  trash.className = "fa-solid fa-trash";

  const userInput = document.createElement("textarea");
  userInput.className = "user-input";
  userInput.placeholder = "Enter your note";

  const saveBtn = document.createElement("button");
  saveBtn.className = "save-btn";
  saveBtn.textContent = "Save";

  noteBox.append(userInput);
  btnBox.append(trash, saveBtn);
  noteBox.append(btnBox);

  return { noteBox, userInput, saveBtn, btnBox };
}

addBtn.addEventListener("click", () => {
  const { noteBox, userInput, saveBtn, btnBox } = createNoteElement();
  notes.appendChild(noteBox);

  userInput.focus();
});

notes.addEventListener("click", (e) => {
  const note = e.target.closest(".note");
  if (!note) return;

  if (e.target.classList.contains("fa-trash")) {
    note.remove();
    return;
  }

  if (e.target.classList.contains("save-btn")) {
    const userInput = note.querySelector(".user-input");
    const saveBtn = note.querySelector(".save-btn");
    const value = userInput.value.trim();

    if (!value) return;

    const noteText = document.createElement("p");
    noteText.className = "note-text";
    noteText.textContent = value;

    note.insertBefore(noteText, note.querySelector(".btn-box"));
    userInput.style.display = "none";
    saveBtn.style.display = "none";
  }
})