class Category {
    
    constructor({id, category}) {
        this.id = id
        this.category = category
    }

    addToFilterDropdown() {
        const filterDropdown = document.getElementById('filter-dropdown')
        const option = document.createElement('option')
        option.value = this.id
        option.innerText = this.category
        filterDropdown.append(option)
    }

    addToCreateDropdown() {
        const newDreamDropdown = document.getElementById('create-dropdown')
        const option = document.createElement('option')
        option.value = this.id
        option.innerText = this.category
        newDreamDropdown.append(option)
    }
}