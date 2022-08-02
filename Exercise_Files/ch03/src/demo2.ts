type ContactFields = keyof Contact
type AddressableContactFields = keyof AddressableContact

const field: ContactFields = "birthDate"

//function getValue<T>(src: T, propertyName: keyof T) {
function getValue<T, U extends keyof T>(src: T, propertyName: U) {
    return src[propertyName]
}

const value = getValue({min: 1, max: 200}, "max" )

const primaryStatus = getValue(primaryContact, "status")
