class Ground {
    constructor(height) {
        var options = {
            restitution: 0,
            density: 1, 
            friction: 1, 
            isStatic: true
        }
        this.body = Bodies.rectangle(canvas.width * (3/8), canvas.height - (height * 2), canvas.width * 0.75, height, options);
        World.add(world, this.body);
        this.width = canvas.width * 0.75;
        this.height = height;
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
    }
}