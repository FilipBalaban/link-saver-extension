const nameEl = document.querySelector("#name-input-el")
const urlEl = document.querySelector("#url-input-el")

const saveInputBtn = document.querySelector("#save-input-btn")
const ulEl = document.querySelector("#ul-el")

let nameInput = []
let urlInput = []

let fullInput = {nameInput, urlInput}

// Save input BTN
saveInputBtn.addEventListener("click", function () {
    
    // Name Input
    nameInput.push(nameEl.value)
    nameEl.value = ""

    // URL Input
    urlInput.push(urlEl.value)
    urlEl.value = ""

    render()

})

// Render
function render() {
    let listItems = ""
    for (let i = 0; i < nameInput.length; i++) {
       
        listItems += `
            <li>${nameInput}: 
            <a href='${urlInput}'>${urlInput}</a>
            </li>
        `
        nameInput = []
        urlInput = []
        ulEl.innerHTML += listItems
    }
    
}

