function Sardine(x, y) {
  this.x = x;
  this.y = y;
  this.show = function() {
    image(sardineImage, this.x, this.y);
  }  
}