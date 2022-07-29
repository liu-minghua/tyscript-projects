interface Person {
    ssn: string,
    dob: Date,
    name: ContactName
}
type ContactName = string

let mark: Person = {
    ssn: "123-34-5678",
    dob: new Date("12-04-1989"),
    name: "Mark Liu"
}