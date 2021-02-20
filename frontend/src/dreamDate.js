class DreamDate {

    constructor({id, date}) {
        this.id = id
        this.date = date
    }

    addToFilterDropdown() {
        const filterDropdown = document.getElementById('dream-date-sort')
        const option = document.createElement('option')
        option.value = this.id
        option.innerText = this.date
        filterDropdown.append(option)
    }
}