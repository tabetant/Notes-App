var list = document.querySelector(".notes-list");
var button = document.getElementById("button");
var textBox = document.getElementById("textbox");
document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault();
    const formData = new FormData(e.target);
});

var submitNote = (textBox) => {
    console.log("submitNote called");
    fetch('http://localhost:3000/notes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: textBox.value })
    })
        .then(response => response.json())
        .then(data => {
            console.log("Note submitted:", textBox.value);
            textBox.value = '';
            console.log("Server response:", data);
            return fetch('http://localhost:3000/notes', {
                method: 'GET',
            })
        })
        .then(response => response.json())
        .then(notes => {
            list.innerHTML = "";
            notes.forEach(note => {
                var bullet = document.createElement("li");
                bullet.textContent = note.message;
                list.appendChild(bullet);
            })
        })
        .catch(err => { console.error("Error:", err.message); });

}

button.addEventListener("click", () => submitNote(textBox));