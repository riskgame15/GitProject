class Apple{
    weight;
    constructor(weight) {
        this.weight = weight;
    }
    getWeight() {
        return this.weight;
    }
    isEmpty() {
        if(this.weight <= 0){
            return true;
        }else {
            return false;
        }
    }
    decreaseApple(){
        if(this.isEmpty()){
            alert("Táo đã hết rồi");
        }else {
            this.weight--;
        }
    }
}