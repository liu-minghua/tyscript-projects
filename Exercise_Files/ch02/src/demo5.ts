interface Person {
    id: number,
    name: string,
    //clone(name: string): Person
}

//function clone(src: Person): Person {
function clone(src: Person, func: (src: Person) => Person) {
    //return Object.apply({}, src);
    return func(src);
}

const a: Person = { id: 1234, name: "Mark Liu" };
const b = clone(a, Object.apply);
