class Mobile {
    name;
    battery;
    inbox;
    outbox;
    message;
    status;
    constructor(name) {
        this.name = name;
        this.battery = 100;
        this.inbox = [];
        this.outbox = [];
        this.message = '';
        this.status = false;
    }
    checkStatus(){
         return this.status ? 'Mobile is on' : 'Mobile is off';
    }

    chargeBattery(){
       let x =setInterval(() => {
           if (this.battery === 100) {
               document.write('Pin da sac xong')
               clearInterval(x);
               return;
           }
           document.write('battery is charging')
           this.battery++;
       },1000)
    }

    writeMessage(text) {
        if (this.status) {
            this.message = text;
            this.decreaseBattery();
        }else {
            document.write('');
        }
    }

    readInbox(){}

    readOutbox(){}

    sendSMS(){
        // this la con tro dai dien cho doi tuong hien tai dang tac dong
        this.outbox.push(this.message);
        phone.inbox.push(this.message);
        this.decreaseBattery()
    }

    decreaseBattery(){
        this.battery--;
    }

    turnOff(){
        this.status = false;
    }
    turnOn(){
        this.status = false;
    }
}