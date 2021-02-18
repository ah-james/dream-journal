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
                // debugger
                i.attachToDom()
            })
        })
    }
}