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
