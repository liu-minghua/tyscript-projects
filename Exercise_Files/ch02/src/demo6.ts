let anyValue: any

anyValue = true
anyValue = 10
anyValue = "Hello World"
anyValue = []
anyValue = {}
anyValue = null
anyValue = undefined

let val1: unknown = anyValue
let val2: any = anyValue
let val3: boolean = anyValue
let val4: number = anyValue
let val5: string = anyValue
let val6: object = anyValue
let val7: any[]  = anyValue
let val8: Function = anyValue

let unknownValue: unknown

unknownValue = true
unknownValue = 10
unknownValue = "Hello World"
unknownValue = []
unknownValue = {}
unknownValue = null
unknownValue = undefined

let value1: unknown = unknownValue
let value2: any = unknownValue
if (typeof unknownValue == "boolean") {
    let value3: boolean = unknownValue
}
if (typeof unknownValue == "number") {
    let value4: number = unknownValue
}
if (typeof unknownValue == "string") {
    let value5: string = unknownValue
}
if (typeof unknownValue == "object") {
    //unknownValue = {id: 34}
    //let value6: object = unknownValue not possible
}
//if (typeof unknownValue == "any[]") {
//    let value7: any[]  = unknownValue
//}
//if (typeof unknownValue == "Function") {
//    let value8: Function = unknownValue
//}