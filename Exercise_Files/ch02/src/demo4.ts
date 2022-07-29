interface Contact {
    id: number,
    name: ContactName,
    birthDate?: Date,
    status: ContactStatus
}
enum ContactStatus {
    Active = "active",
    Inactive = "inactive",
    New = "new"
}
type ContactName = string

let primaryContact = {
    id: 1234,
    name: "Mark Liu",
    status: ContactStatus.Inactive
}