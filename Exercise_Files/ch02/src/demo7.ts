interface Contact {
    id: number,
    name: string
}
interface DateRange {
    startDate: Date,
    endDate: Date
}
function clone<T1, T2>(src: T1): T2{
    return Object.apply({}, src);
}

const a: Contact = { id: 1234, name: "Mark Liu" }
const b = clone<Contact, Contact>(a)

const dateRange: DateRange = {startDate: new Date, endDate: new Date}
const dateRangeCopy = clone<DateRange, DateRange>(dateRange)