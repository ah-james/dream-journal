// get all of the elements
const port = 'http://localhost:3000'
const dreamApi = new DreamApi(port)
const dreamList = document.getElementById('dreams-container')
const dreamTitle = document.getElementById('title')
const dreamDate = document.getElementById('date')
const dreamDesc = document.getElementById('description')
const dreamType = document.getElementById('type')
const submit = document.getElementById('submit')

submit.addEventListener("click", submitForm) // event listener on submit button

function submitForm(event) {
    event.preventDefault()
}

dreamApi.getDreams()