let age = 20;
if (age < 50)
    age += 10
    console.log(age)

let sales: number = 123_456
let course: string = "IT"
let is_pblished: boolean = true

// any 

function render(document:any) {
    console.log(document)
}

// arrays

let numbers: number[] = [1 ,2 , 3]
let numbers_: number[] = []

// numbers.forEach( n => n.)

// tuple
let user: [number, string] = [1, 'Jones']
let user_: [number, string, boolean, number] = [1, "Alex", true, 0]

// enum 

const Small = 1
const Middle = 2
const Large = 3

// or we can use enum

enum Size{ Small, Middel, Large}

enum Size_{Small_ ='s', Middle_ ='m', Large_ ='l'}
let mySize: Size_ = Size_.Middle_
console.log(mySize)

// Function

function calculationTax(income: number, taxYear: number): number{
    if (taxYear < 2022)
        return income * 1.2
    return income * 1.3
}

calculationTax(10_1000, 2022)

function calculationTax_(income: number, taxYear?: number): number {
    if ((taxYear || 2024) < 2025)
        return income * 1.2
    return income * 1.3
}

calculationTax_(20_200,)

function calculationTax__(income: number, taxYear = 2022): number {
    if (taxYear < 2024)
        return income * 1.2
    return income * 1.3
}
calculationTax__(30_300)

// Object

let employee = {id: 13}

let employee_: {
    id: number,
    name: String,
} = {id: 1, name: ''}

employee_.name = "Jones"

let employee__:{
    readonly id: number,
    name: string
} = {id: 1, name: "Alex"}

let employee___:{
    readonly id: number,
    name: string,
    retire: (date: Date) => void
} = {
    id: 1,
    name: "Alukwe",
    retire: (date: Date) => {
        console.log(date)
    }
}

type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

let employee____: Employee = {
    id: 1,
    name: "Alukwe",
    retire: (date: Date) => {
        console.log(date)
    }
}

function kgToLbs(weight: number | string): number{
    // narrowing
    if (typeof weight === "number")
        return weight * 2.2
    else
        return parseInt(weight) * 2.2;
}

//  intertion types

let weight: number & string

type Draggable = {
    drag: () => void
}

type Resizeable = {
    resize: () => void
}

type UIWidget = Draggable & Resizeable;

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}

// literal types

let quantity: 50 = 50

let quantity_: 50 | 100 = 100

type Quantity = 50 | 100

let quantity__: Quantity = 100

function greet(name: string | null){
    if(name)
        console.log(name.toUpperCase());
    else
        console.log('Hola')
}

greet(null)

// operational chain

type Customer = {
    birthday: Date
};

function getCustomer(id:number): Customer | null | undefined {
        return
}