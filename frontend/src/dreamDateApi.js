class DreamDateApi {
    
    constructor(port) {
        this.baseUrl = `${port}/dream_dates`
    }

    getDreamDates() {
        fetch(this.baseUrl)
        .then(resp => resp.json())
        .then(json => {
            json["data"].forEach(element => {
                const i = new DreamDate({id: element.id, ...element.attributes})
                i.addToFilterDropdown()
            })
        })
    }
}