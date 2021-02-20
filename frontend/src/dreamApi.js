class DreamApi {

    constructor(port) {
        this.baseUrl = `${port}/dreams`
    }

    getDreams() {
        fetch(this.baseUrl)
        .then(resp => resp.json())
        .then(json => {
            json["data"].forEach(element => {
                const i = new Dream({id: element.id, ...element.attributes})
                i.attachToDom()
            })
        })
    }

    addDream() {
        const newDream = {
            title: dreamTitle.value,
            description: dreamDesc.value,
            // dream_date_id: dreamDate.value,
            category_id: dreamDropdown.value
        }

        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(newDream)
        }
        fetch(this.baseUrl, configObj)
        .then(resp => resp.json())
        .then(json => {
            const i = new Dream({id: json.data.id, ...json.data.attributes})
            i.attachToDom()
        })
    }

    deleteDream = (id) => {
        const configObj = {
            method: "Delete",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        }
        fetch(`${this.baseUrl}/${id}`, configObj)
        .then(resp => resp.json())
        .then(json =>{})
    }

    editDream = (dream) => {
        let {title, description} = dream
        const dreamInfo = {
            title,
            description
        }
        const configObj = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(dreamInfo)
        }
        fetch(`${this.baseUrl}/${dream.id}`, configObj)
        .then(resp => resp.json())
        .then(json => {dream.render()})
    }

}