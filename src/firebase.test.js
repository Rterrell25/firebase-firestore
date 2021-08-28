const firebase = require("./firebase")
// @ponicode
describe("firebase.signInWithGoogle", () => {
    test("0", () => {
        let callFunction = () => {
            firebase.signInWithGoogle()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("firebase.createUserProfileDocument", () => {
    test("0", async () => {
        await firebase.createUserProfileDocument({ uid: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9" }, "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
    })

    test("1", async () => {
        await firebase.createUserProfileDocument({ uid: "7289708e-b17a-477c-8a77-9ab575c4b4d8" }, "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
    })

    test("2", async () => {
        await firebase.createUserProfileDocument({ uid: "a85a8e6b-348b-4011-a1ec-1e78e9620782" }, "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
    })

    test("3", async () => {
        await firebase.createUserProfileDocument(undefined, undefined)
    })
})

// @ponicode
describe("firebase.getUserDocument", () => {
    test("0", async () => {
        await firebase.getUserDocument("a85a8e6b-348b-4011-a1ec-1e78e9620782")
    })

    test("1", async () => {
        await firebase.getUserDocument("7289708e-b17a-477c-8a77-9ab575c4b4d8")
    })

    test("2", async () => {
        await firebase.getUserDocument(false)
    })

    test("3", async () => {
        await firebase.getUserDocument("03ea49f8-1d96-4cd0-b279-0684e3eec3a9")
    })

    test("4", async () => {
        await firebase.getUserDocument(0)
    })

    test("5", async () => {
        await firebase.getUserDocument(Infinity)
    })
})
