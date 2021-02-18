class Dream {

    static all = []
    static container = document.getElementById("dreams-container")

    constructor({id, title, description, dream_date_id, category_id}) {
        // setting item properties
        this.id = id
        this.title = title
        this.description = description
        this.dreamDateId = dream_date_id
        this.categoryId = category_id

        this.element = document.createElement('li')
        this.element.dataset["id"] = id
        this.element.id = `dream-${id}`

        // push new item into array
        Dream.all.push(this)

        this.element.addEventListener('click', this.clickOptions)
    }

    clickOptions = (element) => {
        if (element.target.innerText === "Edit") {
            element.target.innerText = "Save"

        } else if (element.target.innerText === "Delete") {
            this.deleteDream(element)
        } else if (element.target.innerText === "Save") {
            element.target.innerText = "Edit"

        }        
    }

    deleteDream = (element) => {
        element.target.parentElement.remove()
        dreamApi.deleteDream(this.id)
    }

    render() {
        // add later -- HTML for added element
        this.element.innerHTML = `
        <p>${this.title} <strong>${this.description}</strong></p>
        <button class="edit" data-id="${this.id}">Edit</button>
        <button class="delete" data-id="${this.id}">Delete</button>
        `
        return this.element
    }

    attachToDom() {
        this.render()
        Dream.container.appendChild(this.element)
    }
}