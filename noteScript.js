const noteInput = document.getElementById('noteInput');
const noteButton = document.getElementById('noteButton');
const noteList = document.getElementById('noteList');
const noteLocation = document.getElementById('locationInput');

noteButton.addEventListener('click', addNote);

/*
function addNote() = appends list item of text in input fields
returns = null
*/
function addNote() { //TODO: when same location, add another note underneath same location
    const noteText = noteInput.value;
    const locationText = noteLocation.value;
    if(noteText ==='')return; // if fields are blank, return null
    const li = document.createElement('li');
    li.innerHTML = ` <span><strong>${locationText}:</strong><br>${noteText}</span>
    <button class="deleteButton">Delete</button>
    `; // format of note being appended
    noteList.appendChild(li);
    noteInput.value = '';

    // removes list item after delete is clicked
    li.querySelector('.deleteButton').addEventListener('click',() =>{
        noteList.removeChild(li);
    });

}
