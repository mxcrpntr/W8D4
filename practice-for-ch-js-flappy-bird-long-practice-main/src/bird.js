const CONSTANTS = {
    GRAVITY:  0.8,
    FLAP_SPEED:  -8,
    TERMINAL_VEL:  12,
    BIRD_WIDTH:  40,
    BIRD_HEIGHT:  30
};


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
        const img = new Image();
        img.onload = () => {
            ctx.drawImage(img, this.x, this.y);
            // ctx.beginPath();
            // ctx.moveTo(30, 96);
            // ctx.lineTo(70, 66);
            // ctx.lineTo(103, 76);
            // ctx.lineTo(170, 15);
            // ctx.stroke();
        };
        img.src = 'https://miro.medium.com/v2/resize:fit:2400/0*yosFB97bra3kPD0O.';

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