const nameInput = document.getElementById("name-input")
const urlInput = document.getElementById("url-input")
const saveInputBtn = document.getElementById("save-input-btn")
const deleteBtn = document.getElementById("delete-btn")
const deleteTabBtn = document.getElementById("delete-tab-btn")
const ulEl = document.getElementById("ul-el") // Unordered List
const messageEl = document.getElementById("message-el")
const saveTabBtn = document.getElementById("save-tab-btn")


let myNames = []
let myLinks = []

// Get Items From Local Storage
const namesFromLocalStorage = JSON.parse(localStorage.getItem("names"))
const linksFromLocalStorage = JSON.parse(localStorage.getItem("links"))

if(namesFromLocalStorage && linksFromLocalStorage) {
    myNames = namesFromLocalStorage
    myLinks = linksFromLocalStorage
    render(myNames, myLinks)
}

// When Save Input Btn Clicked
saveInputBtn.onclick = function () {
    if(nameInput.value ==="" || urlInput.value === "") {
        messageEl.textContent = "Enter valid inputs in both fields!"

    } else {
        messageEl.textContent = ""
        myNames.push(nameInput.value)
        nameInput.value = ""
        localStorage.setItem("names", JSON.stringify(myNames))

        myLinks.push(urlInput.value)
        urlInput.value = ""
        localStorage.setItem("links", JSON.stringify(myLinks))

        render(myNames, myLinks)

    }
    
}

// Render
function render(nameArr, linksArr) {
    let listItems = ""
    for (let i = 0; i < nameArr.length && i < linksArr.length; i++) {
        listItems += ` 
        <li>${nameArr[i]}:
        <a href="${linksArr[i]}" target="_blank">
        ${linksArr[i]}
        </a>
        `
    }
    ulEl.innerHTML = listItems
}



// Save Tab Btn
saveTabBtn.onclick = function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        urlInput.value = tabs

    })

}



// Delete Btn
deleteBtn.onclick = function() {
    if(confirm("Are you sure you want to DELETE all your saves") === true){
        localStorage.clear()
        location.reload()
    } else{
        alert("You pressed Cancel")
    }
}

