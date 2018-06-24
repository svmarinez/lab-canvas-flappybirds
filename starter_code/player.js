function Player(game) {
    this.game = game;
    var img = new Image();
    this.img.src = "images/flappy.png";
    this.x = this.game.canvas.width/3;
    this.y0 = this.game.canvas.height/2
    this.y = this.y0;
    this.img.frames = 1;
    this.img.frameIndex = 0;
    
    this.w = 50;
    this.h = 75;
  
    this.vy = 1;
    this.a = 1.5;
  }
  this.setListeners();

  Player.prototype.draw = function() {
    this.game.ctx.drawImage(
      this.img,
      this.img.frameIndex * Math.floor(this.img.width / this.img.frames),
      0,
      Math.floor(this.img.width / this.img.frames),
      this.img.height,
      this.x,
      this.y,
      this.w,
      this.h,
    );
  
    this.animateImg();
}