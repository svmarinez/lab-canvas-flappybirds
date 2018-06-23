var img = Image;
img.onload= function Background(game) {
    this.game = game;
    this.img = new Image();
    this.img.src = "images/bg.png";
    this.x = 0;
    this.y = 0;
    this.dx = 407.5;
  }
