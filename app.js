class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk() {
        console.log("beep beep");
    }
    toString() {
        console.log(`This vehicle is a ${this.make} ${this.model} from ${this.year}`)
    }
    revEngine() {
        console.log('VROOOOOOM');
    }
}

let myFirstVehicle = new Vehicle('honda', 'monster truck', 1999);




class Car extends Vehicle {
    constructor (make, model, year) {
        super(make, model, year);
        this.numWheels = 4;
    }

}

let myFirstCar = new Car('Toyota', 'carolla', 2005)

console.log(myFirstCar);





class Motorcycle extends Vehicle {
    constructor (make, model, year) {
        super(make, model, year);
        this.numWheels = 2;

    }
}

let myFirstMotorcycle = new Motorcycle('honda', 'Nighthawk', 2000);





class Garage {
    constructor(capacity) {
        this.vehicles = []; 
        this.capacity = capacity;
    }
    add(newVehicle) {
        if (!(newVehicle instanceof Vehicle)) {
            return "Only vehicles are allowed in here!";
        }
        if (this.vehicles.length >= this.capacity) {
            return "Sorry, we're full.";
        }
        this.vehicles.push(newVehicle);
        return "Vehicle added!";
    }
}



let garage = new Garage(2);