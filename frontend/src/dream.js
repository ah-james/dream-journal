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
    }

    render() {
        // add later -- HTML for added element
        this.element.innerHTML = `
        <p>${this.title} <strong>${this.description}</strong></p>
        `
        return this.element
    }

    attachToDom() {
        this.render()
        Dream.container.appendChild(this.element)
    }
}