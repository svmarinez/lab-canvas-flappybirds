function Obstacles(game){
    this.game = game;
    this.w = 15;
    this.h = this.w * 3;
    this.img = new Image();
    this.img.src = 'images/obstacle_bottom.png';
    this.dx = 10;
  
    this.x = this.game.canvas.width;
    this.y = this.game.player.y0 + this.game.player.h - this.h - 5;
  }
  
  Obstacles.prototype.draw = function() {
    this.game.ctx.fillStyle = "black";
    this.game.ctx.fillRect(this.x, this.y, this.w, this.h);
  };
  
  Obstacles.prototype.move = function() {
    this.x -= this.dx;
  };
