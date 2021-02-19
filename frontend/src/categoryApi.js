class CategoryApi {
    
    constructor(port) {
        this.baseUrl = `${port}/categories`
    }

    getCategories() {
        fetch(this.baseUrl)
        .then(resp => resp.json())
        .then(json => {
            json["data"].forEach(element => {
                const i = new Category({id: element.id, ...element.attributes})
                i.addToFilterDropdown()
                i.addToCreateDropdown()
            })
        })
    }
}