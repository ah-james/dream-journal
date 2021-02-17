class DreamApi {
    constructor(port) {
        this.baseUrl = `${port}/dreams`
    }

    getDreams() {
        fetch(this.baseUrl)
        .then(resp => resp.json())
        .then(addDreamsToDom)
    }

    addDreamsToDom(data) {
        debugger
    }
}