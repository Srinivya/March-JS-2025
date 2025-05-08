
//Class constructor object this

// class Car{

// constructor(brand,year){

// this.brand=brand;
// this.year=year;

// }

// }

// const myCar=new Car("Toyota",2025);
// console.log(myCar.brand);
// console.log(myCar.year);



// inheritance super


// class Animal{
// constructor(name){
//     this.name=name;
// }
// sound(){
// console.log(`${this.name}makes noise`);

// }

// }

// class Dog extends Animal{

//     constructor(name,breed){
//         this.name=name;
//         this.breed=breed;
//     }
//     sound(){
       
//        super.sound();
//        console.log(`${this.name}barks`);
//     }
// }

// const myAnimal=new Animal("Bug","Beagle");
// myAnimal.sound();


// method overriding


// class Animal{
// speak(){

//     console.log("Animal speaks");
// }

// }
// class Cat extends Animal{

//     static speak(){
//         console.log("Meoww");
//     }
// }

// new Animal().speak();



// Encapsulation

// class BackAccount{
// #balance=0;

// deposit(amount){
//     this.#balance +=amount;
// }

// getBalance(){
//     return this.#balance;
// }

// }


// const acc=new BackAccount();

// acc.deposit(1000);
// console.log(acc.getBalance());



class Car{
#engineStarted=false;
#batterLevel=100;


constructor(brand){
    this.brand=brand;

}

start(){
if(this.#checkBattery()){
    this.#startEngine();
    console.log(`${this.brand}car started`)
}
else{
    console.log("Battery is low... Please charge.")
}
}


#checkBattery(){
    console.log("checking battery level....");
    return this.#batterLevel>=20;
}

#startEngine(){
this.#engineStarted=true;
console.log("Engine is now running");

}

drainBattery(amount){
this.#batterLevel=Math.max(0,this.#batterLevel-amount);
console.log(`Battery level is now ${this.#batterLevel}%`);
}


}


const myCar=new Car("Toyota");
myCar.drainBattery(90);
myCar.start();