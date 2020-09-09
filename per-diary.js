const entryForm = document.getElementById("entryForm");
const entriesSecion = document.querySelector("#entries");
const entryTextbox = document.querySelector(".entry-textbox");
 const entriesNav = document.querySelector(".entries-nav");
    let counter =1;

function addEntryToDom (e){
    e.preventDefault();
    const entryDiv = document.createElement("div");
    entryDiv.className ="single-entry";
    entryDiv.innerText = entryTextbox.value

    entryDiv.style.display = 'none';

    entriesSecion.appendChild(entryDiv);
    entryTextbox.value ='';

    const displayEntryButton = document.createElement('button');
    displayEntryButton.className = 'display-entry-button';
    displayEntryButton.innerText = counter++;
    entriesNav.appendChild(displayEntryButton);

    displayEntryButton.addEventListener('click', function(){
        const allEntries = document.querySelectorAll('.single-entry');
        console.log(allEntries.length)
        for (let index = 0; index < allEntries.length; index++) {
            allEntries[index].style.display = 'none';
        }
        entryDiv.style.display = 'block';        

    })

}
entryForm.addEventListener('submit', addEntryToDom)


