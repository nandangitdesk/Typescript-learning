//type narrowing

function printthis(val: number | string){
    if (typeof val === "string") {
      return val.toLowerCase()
    }
    return val + 2
}

function printRequired(id: string | null){
    if (!null) {
        console.log("plz provide id");
        
    }
}

function printAll(str: string | string[] | null){
    if (str) {
        if (typeof str === "object") {
            for (const s of str) {
                console.log(s);               
            }
        }else if(typeof str === "string"){
            console.log(str);
            
        }
    }
}

//string[] acts as a object its a javascript behaiviour


//Operator Narrowing

interface user{
    name: string,
    email: string
}

interface Admin{
    name: string,
    email: string,
    isAdmin: boolean
}

function isAdminAccount(acc: user | Admin ){
    if ("isAdmin" in acc) {
        return acc.isAdmin
    }
}

//instanceOf Narrowing

function logVal(x: Date | string){
    if (x instanceof Date) {
        console.log(x.toUTCString());        
    }else{
        console.log(x.toUpperCase());        
    }
}

//type Predicate

type Fish = {swim: ()=> void}
type Bird = {fly: ()=> void}

function isFish(pet: Fish | Bird): pet is Fish{
    return (pet as Fish).swim !== undefined
}

function getFood(pet: Fish | Bird){
    if (isFish(pet)) {
        pet 
        return "fish food"
    }else{
        pet
        return "bird food"
    }
}

//discriminative unions

interface Circle {
    kind: "circle",
    radius: number
}

interface Square {
    kind: "square"
    side: number
}

interface Rectangle {
    kind: "rectangle",
    length: number,
    width: number
}

type Shape = Circle | Square | Rectangle

function getTrueShape(shape: Shape){
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2
    }
    //return shape.side * shape.side
}


//never type and exhausting checking this is good for applications and easy

function getArea(shape: Shape){
    switch(shape.kind){
        case "circle":
            return Math.PI * shape.radius ** 2

        case "square":
            return shape.side * shape.side
        case "rectangle":
            return shape.length * shape.width

        default:
            const _defaultforshape: never = shape
            return _defaultforshape
    }
}