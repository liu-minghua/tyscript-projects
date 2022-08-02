type ContactName = string
type BirthDay = number | String | Date
type AddressableContact = Contact & Address
type ContactStatus = "active" | "inactive" | "new"
/*enum ContactStatus {
    Active = "active",
    Inactive = "inactive",
    New = "new"
}*/

interface Contact {
    id: number,
    name: ContactName,
    birthDate?: BirthDay,
    status?: ContactStatus
}

interface Address {
    line1: string,
    line2?: string,
    city: string,
    state: string,
    zip: string
}

function getBirthDate (contact: Contact) {
    if (typeof contact.birthDate == "number") {
        return new Date(contact.birthDate)
    } else if (typeof contact.birthDate == "string") {
        return Date.parse(contact.birthDate)
    } else {
        return contact.birthDate
    }
}

let primaryContact = {
    id: 111,
    name: "Mark Liu",
    status: "new"
}