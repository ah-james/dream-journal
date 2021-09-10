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
        console.log('edit form')
        const div = editButton.parentElement
        div.innerHTML = `
        <div class="col">
            <input type="text" class="edit-title" value="${div.children[1].innerText}"></input>
            <br><br>
            <input type="text" class="edit-date" value="${div.children[0].innerText}"></input>
            <br><br>
            <textarea rows="5" cols="25" class="edit-description">${div.children[2].innerText}</textarea>
            <br><br>
            <button class="btn btn-outline-secondary" data-id="${this.id}">Save</button>
        </div>
        `
    }

    deleteDream = (element) => {
        element.target.parentElement.remove()
        dreamApi.deleteDream(this.id)
    }

    favoriteDream = (favoriteButton) => {
        const li = favoriteButton.parentElement
        const card = li.parentElement
        const favoriteDreams = document.getElementById('favorite-dreams')
        favoriteDreams.append(card)
    }

    unfavoriteDream = (unfavoriteButton) => {
        console.log('unfavorited')
        const li = unfavoriteButton.parentElement
        const dreams = document.getElementById('dreams-container')
        dreams.append(li)
    }

    render() {
        this.element.innerHTML = `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${this.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${this.date}</h6>                
                <p class="card-text">${this.description}</p>
                <button class="btn btn-outline-danger" data-id="${this.id}">Delete</button>
                <button class="btn btn-outline-secondary" data-id="${this.id}">Edit</button>
                <button  class="btn btn-outline-dark" data-id="${this.id}">Favorite</button>

            </div>
        </div>
        `
        
        return this.element
    }

    attachToDom() {
        this.render()
        Dream.container.prepend(this.element)
    }
}