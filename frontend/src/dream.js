class Dream {

    static all = []

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
        return this.element
    }

    attachToDom() {
        Dream.container.appendChild(this.element)
    }

}