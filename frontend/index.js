// get all of the elements
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

submit.addEventListener("click", submitForm) // event listener on submit button

// reset.addEventListener("click", resetFilter)

function submitForm(event) {
    event.preventDefault()
    dreamApi.addDream()
    form.reset()
}

filter.addEventListener('click', filterDreams)
reset.addEventListener('click', resetFilter)

function filterDreams() {
    const category = document.getElementById('filter-dropdown').value
    const ul = document.getElementById('dreams-container').children
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

dreamApi.getDreams()
categoryApi.getCategories()
