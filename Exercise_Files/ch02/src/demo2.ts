interface Contact extends Address{
    id: number,
    name: string,
    birthDay?: Date    
}
interface Address {
    line1: string,
    line2?: string,
    city: string,
    state: string,
    zip: string
}
let primaryContact: Contact = {
    name: "Mark Liu",    
    id: 1234,
    line1: "127 Gaston",
    city: "Bastrop",
    state: "TX",
    zip: "76426"
}





