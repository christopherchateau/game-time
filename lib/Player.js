const GamePiece = require('./GamePiece');

// extend GamePiece class
module.exports = class Player extends GamePiece {
  constructor(x, y, width, src) {
    // invoke parent class constructor
    super(x, y, width, src);
    this.direction = 'up';
    this.height = 40;
  } 

  move(event) {
    
  }

  draw(ctx) {
    const { x, y, height, width, src } = this;
    const image = new Image();
    image.src = src;
    ctx.drawImage(image, x, y);
  }

  isCollidingWith(object) {
    return (
      this.x < object.x + object.width && 
      this.x + this.width > object.x &&
      this.y < object.y + object.height &&
      this.y + this.height > object.y
    );
  }

  isCollidingWithWall(canvasWidth, canvasHeight) {
    return (
      this.x < 0 ||
      this.x + this.width > canvasWidth 
      // this.y < 0 || 
      // this.y + this.height > canvasHeight
    )
  }

  changeDirection(e) {
    e.preventDefault();
  //   let audio = new Audio('assets/audio/sound-frogger-hop.wav');
  // audio.play();

    let userInput = e.key;
    switch(userInput){
      case 'ArrowRight': if (this.x < 520) { this.x += 40; this.direction = 'right'} break;
      case 'ArrowLeft': if (this.x >= 40) { this.x -= 40; this.direction = 'left'} break;
      case 'ArrowDown': if (this.y <= 440) { this.y += 40; this.direction = 'down'} break;
      case 'ArrowUp': if (this.y > 0) { this.y -= 40; this.direction = 'up'} break;
    }
  }
}