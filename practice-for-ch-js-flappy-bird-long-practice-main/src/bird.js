

const CONSTANTS = {
    GRAVITY:  0.8,
    FLAP_SPEED:  -8,
    TERMINAL_VEL:  12,
    BIRD_WIDTH:  40,
    BIRD_HEIGHT:  30
};

const img = new Image();
img.src = './bird.png';


export default class Bird {
    constructor(dimensions) {
        this.velocity = CONSTANTS.GRAVITY;
        this.dimensions = dimensions;
        this.x = dimensions.width*(1/3);
        this.y = dimensions.height*(1/2);
    }

    animate(ctx) {
        this.move();
        this.drawBird(ctx);
    }

    drawBird(ctx) {
        ctx.fillStyle = "yellow";
        ctx.fillRect(this.x, this.y, 40, 30);
    }

    move() {
        this.y += this.velocity;
        this.velocity += CONSTANTS.GRAVITY;
    }

    flap() {
        this.velocity = CONSTANTS.FLAP_SPEED;
    }
}