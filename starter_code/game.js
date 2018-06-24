function Game(canvas) {
    this.canvas = document.getElementById(canvas);
    this.ctx = this.canvas.getContext("2d");
    this.fps = 60;
  
    //this.reset();
}

Game.prototype.clear = function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}
    
Game.prototype.draw = function() {
    this.background= new Background(this)
    this.background.draw();
    this.player.draw();
    //this.obstacles.forEach(function(obstacle) { obstacle.draw(); });
}

Game.prototype.moveAll = function() {
    this.background.move();
    this.player.move();
  
    //this.obstacles.forEach(function(obstacle) { obstacle.move(); });
}

Game.prototype.startGame = function() {
    var that=this
    this.interval = setInterval(function() {
    that.clear();
    this.framesCounter++;
  
      if (this.framesCounter > 1000) {
        this.framesCounter = 0;
      }
    that.draw();
    that.moveAll();
    },1000)
}
