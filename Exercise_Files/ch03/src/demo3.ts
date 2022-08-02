function toContact(nameOfContact: string | Contact):Contact {
    if (typeof nameOfContact == "object") {
        return {
            id: nameOfContact.id,
            name: nameOfContact.name,
            status: nameOfContact.status
        }
    } else {
        return {
            id: 0,
            name: nameOfContact,
            status: "active"
        }
    }
}
const myType = { min: 1, max: 100 }

function save(src: typeof myType) {}