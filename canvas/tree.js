class Tree {
    x;
    y;
    w;
    h;
    color;
    speed;
    canvas;
    ctx;


    constructor(x, y, w, h, color, speed) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = color;
        this.speed = speed;
        this.canvas = document.createElement("screen-game");
        this.ctx = this.canvas.getContext("2d");
    }

    draw(){
        this.ctx.beginPath();
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
}
