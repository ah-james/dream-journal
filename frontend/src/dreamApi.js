class DreamApi {
    constructor(port) {
        this.baseUrl = `${port}/dreams`
    }

    getDreams() {
        fetch(this.baseUrl)
        .then(resp => resp.json())
        .then(data => {debugger})
    }

    addDreamsToDom(data) {
        debugger
    }
}