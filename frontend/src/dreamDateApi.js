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

    addDreamDate() {
        const newDreamDate = {
            date: dreamDate.value
        }

        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(newDreamDate)
        }
        fetch(this.baseUrl, configObj)
        .then(resp => resp.json())
        .then(json => {
            const i = new DreamDate({id: json.data.id, ...json.data.attributes})
        })
    }
}