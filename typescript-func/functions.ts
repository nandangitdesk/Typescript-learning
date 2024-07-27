let addTwo = (num: number): number =>{
    return num + 2
    //return "hello" ():type inferance this allows us to not do things like this
}

let sayHello =(val: string)=>{
    return val
}

let isChecked = (val: boolean)=>{}

let signupUser =(name:string , email: string , isChecked: boolean)=>{}
let loginUser =(name:string , email: string , isChecked: boolean=false)=>{}

const heros = ["ironMan" , "spiderMan" , "Thor"]
heros.map(hero =>{
    return `heros is ${hero}`
})

//u want do do your errorMsg Robust
let consoleError = (errMsg: string): void=>{
     console.log(errMsg);
     //this is void this is not going to returning anything
}

let handleError =(errMsg:string):never=>{
    throw new Error(errMsg)
}


addTwo(2)
sayHello("hello everyone")
isChecked(false)
signupUser("nandan","n@p.com",false)
loginUser("nandanp","nandan@.com")