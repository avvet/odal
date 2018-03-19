console.log('NEW JS');

// class User{
//   constructor(firstName,surname){
//     this.firstName = firstName;
//     this.surname = surname;
//   }
//   static getName(){
//     return new User('vasya', 'ivanov');
//   }
//
// };
//
// let user = User.getName();
// console.log(user.firstName);
//
// ///////////////////////////////////
//
// class Menu{
//   static get getMenu(){
//     return 'menu';
//   }
// };
// console.log(Menu.getMenu);

////////////////////////////////////

class Animal{
  constructor(name){
    this.name = name;
  }
  walk(){
    alert('I walk: ' + this.name);
  }
};


class Rabbit extends Animal{
  constructor(){

    super('pig'); //= Animal.call(this,'pig')
    alert(this);
  }
  walk(){
    super.walk();
    alert('...and jump');
  }
};

console.log(Rabbit.prototype.__proto__ == Animal.prototype);
new Rabbit('tiger').walk();

///////////////////////////////////////////////////////

let Data = class User{
  constructor(name, surname){
    this.name = name;
    this.surname = surname;
  }
  sayHi(){
    alert('Hello ' + this.name + ' ' + this.surname);
  }
  get fullName(){
    return `${this.name} ${this.surname}`
  }
  set fullName(value){
    [this.name, this.surname] = value.split(' ');
  }
  ['test'.toUpperCase()](){
    console.log('tested');
  }
};

let user = new Data('max','ivanov');
console.log(user.fullName);
user.fullName = 'piotr petrov';
console.log(user.fullName);
user.TEST()

////////////////////////////////////////////////////////////

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => reject( new Error('The time is out')),1000);
// });
// promise
//   .then(arg1 => {alert('onFullfilled: ' + arg1);}, arg2 => {alert('onRejected: ' + arg2.message);});
// //////////////////////////////////////////////////////////
//
// let val = new Promise((reject, resolve)=>{
//   throw new Error('O_o');
// });
// val.catch(alert);

////////////////////////////////////////////////////////////

console.log('start');
var data = 0;
var myPromise = new Promise(function(resolve, reject){
  id(data){
    resolve('resolve');
  }else{
    reject('reject');
  }
});

myPromise
  .then(function resolve(data){
  return 'resolve' + data;
}).then (function resolve(data){
  console.log(data);
}).catch(function reject(data){
  console.log(data);
});


console.log('end');