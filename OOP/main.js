// tao 1 object mobile
let samsung = new Mobile('samsung note 12');
document.write(samsung.checkStatus());
samsung.turnOn();
document.write('<br>');
document.write(samsung.checkStatus());
document.write('<br>');
document.write(samsung.battery);
samsung.chargeBattery();

samsung.writeMessage('xin chao');

let apple = new Mobile('Iphone 15');
samsung.sendSMS(apple);

apple.writeMessage('Hi samsung');
apple.sendSMS(samsung)

