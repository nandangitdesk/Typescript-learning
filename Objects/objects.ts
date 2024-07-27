const myObject = {
  name: "nandan",
  email: "n@p.com",
  isActive: true,
};

function newObject({ name, isChecked }: { name: string; isChecked: boolean }) {
  console.log(name, isChecked);
}

let obj = { name: "nandan", isChecked: false };
newObject(obj);

function createCourse():{name:string,price:number}{
    return {name:"Reactjs",price:500}
}

//Type Aliases
type User = {
  name: string,
  email: string,
  isActive: boolean
}

function createUser(user:User){
   return {name:"nandan",email:"n@n.com",isActive:true}
}
createUser({name:"nandan",email:"n@n.com",isActive:true})

//example
type Address = {
  street: string,
  city: string,
  country: string
}

type Employee = {
  id: number,
  name: string,
  address: Address
}

function printEmployee(emp: Employee) {
  console.log(emp.name + " lives in " + emp.address.city);
}

let emp1: Employee = {
  id: 1,
  name: "John Doe",
  address: {
    street: "123 Main St",
    city: "Mumbai",
    country: "India"
  }
}

printEmployee(emp1); // Output: John Doe lives in Mumbai

//Readonly and Optional

type myUser = {
  readonly _id: number
  name: string,
  email: string,
  isActive: boolean,
  credCard?: string
}

let newUser:myUser ={
  _id: 1234,
  name: "nandan",
  email: "n@np.com",
  isActive: true
}

newUser.email="abc@gmail.com"

type cardNumber={
    cardNumber: string
}

type cardDate={
  cardDate: string
}

type cardDetails = cardNumber & cardDate &{
  cvv: number
}

let myCard: cardDetails = {
  cardNumber: "1234-5678-9012-3456",
  cardDate: "12/24",
  cvv: 123
}

console.log(myCard);


//cardNumber & cardDate is good practice 