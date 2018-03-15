console.log('NEW JS');

class User {
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }
  static getClass(){
    return new User('vasya','petrov');
  }
};

let user = User.getClass();
console.log(user.firstName);