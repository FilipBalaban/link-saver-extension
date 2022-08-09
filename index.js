const nameInput = document.getElementById("name-input")
const urlInput = document.getElementById("url-input")
const saveInputBtn = document.getElementById("save-input-btn")
const deleteBtn = document.getElementById("delete-btn")
// const deleteTabBtn = document.getElementById("delete-tab-btn")
const ulEl = document.getElementById("ul-el") // Unordered List

let myNames = []
let myLinks = []

let namesFromLocalStorage = JSON.parse( localStorage.getItem("Names") )
let linksFromLocalStorage = JSON.parse( localStorage.getItem("Links") )



if (namesFromLocalStorage && linksFromLocalStorage) {
    myNames = namesFromLocalStorage
    myLinks = linksFromLocalStorage
    render()
}


// Save Input btn clicked
saveInputBtn.onclick = function () {
    

    if (nameInput.value  === ""  || urlInput.value === "") {
        saveInputBtn.innerHTML = "Enter valid input in both fields"

    } else {
        saveInputBtn.innerHTML = "SAVE INPUT"

        myNames.push(nameInput.value)
        nameInput.value = ""
        localStorage.setItem("Names", JSON.stringify(myNames) )


        myLinks.push(urlInput.value)
        urlInput.value = ""
        localStorage.setItem("Links", JSON.stringify(myLinks) )

        render()
    }
}

// Render
function render() {
    let listItems = ""
    for (let i = 0; i < myLinks.length; i++) {
        listItems += ` <li>${myNames[i]}: 
        <a href="${myLinks[i]}" target="_blank">   
        ${myLinks[i]}</a>
        </li>
        `
    }
    ulEl.innerHTML = listItems
}


// Delete Button
deleteBtn.onclick = function () {
    localStorage.clear()
    location.reload()
}

