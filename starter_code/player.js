function Player(game) {
    this.game = game;
    this.x = this.game.canvas.width * 0.08;
    this.y0 = this.game.canvas.height * 0.8;
    this.y = this.y0;
    this.img = new Image();
    this.img.src = 'images/flappy.png';
    this.speedx = 1;
    this.gravity = 15;
    
    this.move();
    //this.newPos();
    this.setListeners();
    }
   
  
  Player.prototype.draw = function() {
    imageScale = 498/351;
    this.game.ctx.drawImage(this.img, this.x, this.y, 50*imageScale, 50);
  };
  
  Player.prototype.setListeners = function() {
    document.onkeydown = function(event) {
      if (event.keyCode === SPACE && this.y == this.y0) {
        this.y -= 5;
        this.vy -= 10;
      } 
    }.bind(this);
  };
    
  Player.prototype.move = function() {
    var gravity = 5;
  
    if (this.y >= this.y0) {
      this.vy = 1;
      this.y = this.y0;
    } else {
      this.vy += gravity;
      this.y += this.vy;
    }
  };
  
  var SPACE = 32;