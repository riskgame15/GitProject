class SwitchButton {
    status;
    lamp;
    constructor(lamp) {
        this.status = false;
        this.lamp = lamp;
    }
    connectToLamp(electricLamp){
         return this.lamp = electricLamp;
    }
    switchOff(){
        this.status = false;
        this.lamp.turnOff()
    }
    switchOn(){
        this.status = true;
        this.lamp.turnOn()
    }
}
let b1 = new ElectricLamp();
let b2 = new ElectricLamp();
let b3 = new ElectricLamp();

let c1 = new SwitchButton();
let c2 = new SwitchButton();
