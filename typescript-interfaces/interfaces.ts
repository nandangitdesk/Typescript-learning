interface availableUser {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    // startTrail: ()=> string
    startTrail(): string
    getCupon(cuponname: string , value: number): number
}

//reopening
interface availableUser{
    githubId: string
}

interface admin extends availableUser{
    role: "admin" | "ts" |"learner"
}

const namrata: admin ={
    dbId:3,
    email:"np.com",
    userId: 30,
    startTrail:()=>{
       return "Trail started"
    },
    getCupon:(cuponname:"namrata30" , off: 30)=> {
        return 30
    },
    githubId:"github",
    role: "admin"
}