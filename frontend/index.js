const port = 'http://localhost:3000'
const dreamApi = new DreamApi(port)
const categoryApi = new CategoryApi(port)
const form = document.getElementById('dream-form')
const dreamList = document.getElementById('dreams-container')
const dreamTitle = document.getElementById('title')
const dreamDate = document.getElementById('date')
const dreamDesc = document.getElementById('description')
const dreamType = document.getElementById('type')
const dreamDropdown = document.getElementById('create-dropdown')
const submit = document.getElementById('submit')
const reset = document.getElementById('reset')
const filter = document.getElementById('filter')
const modeSwitch = document.getElementsByClassName('mode-switcher')[0]
const titleSort = document.getElementById('title-sort')
const dateSort = document.getElementById('date-sort')

submit.addEventListener('click', submitForm) // event listener on submit button
filter.addEventListener('click', filterDreams)
reset.addEventListener('click', resetFilter)
modeSwitch.addEventListener('click', changeColors)
titleSort.addEventListener('click', sortByTitle)
dateSort.addEventListener('click', sortByDate)

function sortByDate() {
    const sortedDreams = Dream.all.sort(function (a,b) {
        return new Date(b.date) - new Date(a.date);
    })
    for (let i = 0; i < sortedDreams.length; i++) {
        sortedDreams[i].attachToDom()
    }
}

function sortByTitle() {
    const sortedDreams = Dream.all.sort(function (a,b) {
        if (a.title < b.title) {
            return -1
        } else if (a.title > b.title) {
            return 1
        } else {
            return 0
        }
    })

    for (let i = 0; i < sortedDreams.length; i++) {
        sortedDreams[i].attachToDom()
    }
}

function submitForm(event) {
    console.log("submitted added dream")
    event.preventDefault()
    dreamApi.addDream()
    form.reset()
}

function filterDreams() {
    const category = document.getElementById('filter-dropdown').value
    const ul = document.getElementById('dreams-container').children
    // const p = document.getElementsByClassName('date')

    // iterate over ul children
    for(const child of ul) {
        // if category filter value === li's class
        if (child.className === category) {
            child.display = "block"
        } else if (child.className !== category) {
            // remove that child from the display
            child.style.display = "none"
        }
    }
}

function resetFilter() {
    const ul = document.getElementById('dreams-container').children
    for (const child of ul) {
        child.style.display = "block"
    }
}

function changeColors(element) {
    if (element.target.innerText === "Change to Dark Mode") {
        element.target.innerText = "Change to Light Mode"
        document.body.setAttribute("id", "dark-mode")
    } else if (element.target.innerText === "Change to Light Mode") {
        element.target.innerText = "Change to Dark Mode"
        document.body.removeAttribute("id", "dark-mode")
    }
}

dreamApi.getDreams()
categoryApi.getCategories()