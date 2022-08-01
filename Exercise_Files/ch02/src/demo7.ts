interface Contact {
    id: number,
    name: string
}
interface UserContact {
    id: number,
    name: string,
    username: string
}
interface DateRange {
    startDate: Date,
    endDate: Date
}
function clone<T1, T2 extends T1>(src: T1): T2{
    return Object.apply({}, src);
}

const a: Contact = { id: 1234, name: "Mark Liu" }
const b = clone<Contact, UserContact>(a)

const dateRange: DateRange = {startDate: new Date, endDate: new Date}
const dateRangeCopy = clone<DateRange, DateRange>(dateRange)