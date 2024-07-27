//tsc -w

//classes in typescript
class User {
  name: string;
  email: string;
  readonly city: string = "Thane";
  constructor(name: string, email: string) {
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



//getters and setters
class user {
  protected _courseCount = 1;
  constructor(
    public name: string,
    public email: string,
    private userId: string
  ) {}
  
  get appleId(): string{
      return `apple Id is ${this.email}`
  }

  get courseCount(): number {
    return this._courseCount;
  }
  //for set we are not allow to define type
  set courseCount(courseNum){
      if (courseNum<= 1) {
            throw new Error("course count should be more than 1")
      }
      this._courseCount=courseNum
  }

}

// protected _courseCount = 1; wherever protected is place in any class which can manipulate in another class also

class subUser extends user{
      isFamily:boolean = true
      changeCourseCount(){
            this._courseCount=4
      }
}

const newUser = new user("namrata", "np@.com", "abc");
