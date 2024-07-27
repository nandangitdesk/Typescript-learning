"use strict";
//tsc -w
//classes in typescript
class User {
    constructor(name, email) {
        this.city = "Thane";
        this.name = name;
        this.email = email;
    }
}
const nandan = new User("nandan", "n@n.com");
//public & private
//private or # used to not give access
//  class user{
//       public name: string
//       public email: string
//       private userId: string
//       constructor(name: string , email: string,userId:string){
//             this.name=name
//             this.email=email
//             this.userId=userId
//       }
//  }
class user {
    constructor(name, email, userId) {
        this.name = name;
        this.email = email;
        this.userId = userId;
    }
}
const newUser = new user("namrata", "np@.com", "abc");
