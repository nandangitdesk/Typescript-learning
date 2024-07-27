let score:number | string = 32
score="30"

type user = {
    name: string,
    id: number
}

type Admin ={
    username: string,
    id: number
}

let nandan: user | Admin ={name: "nandan" ,id: 30}

nandan={username:"nandan_one",id:3}


// function getDbId(id: string | number){
//     console.log(` your id is ${id}`);
    
// }
getDbId(30)
getDbId("30")


function getDbId(id: string | number){
    if (typeof id === "string") {
        id.toUpperCase()
    }
    
}

//Arrays

let data1: number[] =[3,5]
let data2: string[] =["3","5"]
let data3: (number | string | boolean)[] = [3,"5",true]

//useCase in plainSeatAllotment example

let seatAllotment: "aisle" | "middle" | "window"

seatAllotment= "aisle"
// seatAllotment="crewSeat" this is not allow when booking



