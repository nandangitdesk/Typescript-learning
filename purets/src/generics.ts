const score1 : Array<string> = []
const score2 : Array<number> = []

function identityOne(val: number | boolean): number | boolean{
    return val
}

function identityTwo(val: any): any{
    return val
}

function identityThree<Type>(val: Type): Type{
    return val
}

function identityFour<T>(val: T): T{
    return val
}

interface Bottle{
    brand: string,
    type: number
}

identityThree<Bottle>({
    brand: "",
    type: 0
})

// identityFour(false)

function getSearchProducts<T>(products: T[]): T{
    //do some database operations
    const myIndex = 3
    return products[myIndex]
}

const getMoreSearchProducts = <T,>(products: T[]): T =>{
    //do some database operations
    const myIndex = 4
    return products[myIndex]
} 

//<T,> this is specifically use in react because use to differentiate between jsx (<p>) tags