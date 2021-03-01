class Dream {

    static all = []
    static container = document.getElementById("dreams-container")

    constructor({id, title, description, date, category_id}) {
        // setting item properties
        this.id = id
        this.title = title
        this.description = description
        this.date = date
        this.categoryId = category_id

        this.element = document.createElement('li')
        this.element.className = this.categoryId
        this.element.dataset["id"] = id
        this.element.id = `dream-${id}`

        // push new item into array
        Dream.all.push(this)

        this.element.addEventListener('click', this.clickOptions)
    }

    clickOptions = (element) => {
        if (element.target.innerText === "Edit") {
            element.target.innerText = "Save"
            this.editForm(element.target)
        } else if (element.target.innerText === "Delete") {
            this.deleteDream(element)
        } else if (element.target.innerText === "Save") {
            element.target.innerText = "Edit"
            this.saveDream(element.target)
        } else if (element.target.innerText === "Favorite") {
            this.favoriteDream(element.target)
            element.target.innerText = "Unfavorite"
        } else if (element.target.innerText === "Unfavorite") {
            this.unfavoriteDream(element.target)
            element.target.innerText = "Favorite"  
        }    
    }

    saveDream = () => {
        this.title = this.element.querySelector(".edit-title").value
        this.description = this.element.querySelector(".edit-description").value
        this.date = this.element.querySelector(".edit-date").value
        
        dreamApi.editDream(this)
    }

    editForm = (editButton) => {
        const li = editButton.parentElement
        const div = editButton.parentElement.querySelector('div')
        div.innerHTML = `
        <input type="text" class="edit-date" placeholder="${div.children[0].innerText}"></input>
        <input type="text" class="edit-title" placeholder="${div.children[1].innerText}"></input>
        <textarea rows="10" cols="25" class="edit-description" placeholder="${div.children[2].innerText}"></textarea>
        `
    }

    deleteDream = (element) => {
        element.target.parentElement.remove()
        dreamApi.deleteDream(this.id)
    }

    favoriteDream = (favoriteButton) => {
        const li = favoriteButton.parentElement
        const favoriteDreams = document.getElementById('favorite-dreams')
        favoriteDreams.append(li)
    }

    unfavoriteDream = (unfavoriteButton) => {
        const li = unfavoriteButton.parentElement
        const dreams = document.getElementById('dreams-container')
        dreams.append(li)
    }

    // addDateToDropdown() {
    //     const dateFilterDropdown = document.getElementById('date-filter-dropdown')
    //     const option = document.createElement('option')
    //     option.value = this.id
    //     option.innerText = this.date
    //     dateFilterDropdown.append(option)
    // }

    render() {
        this.element.innerHTML = `
        <div>
            <p class="date">${this.date}</p>
            <p class="title">${this.title}</p>
            <p class="description">${this.description}</p>
        </div>
        <button class="edit" data-id="${this.id}">Edit</button>
        <button class="delete" data-id="${this.id}">Delete</button>
        <button class="favorite" data-id="${this.id}">Favorite</button>
        `
        return this.element
    }

    attachToDom() {
        this.render()
        Dream.container.prepend(this.element)
    }

    
}