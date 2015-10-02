// $.Tabs = function (el) { ... };
//
$.fn.carousel = function () {
  return this.each(function () {
    new $.Carousel(this);
  });
};

$.Carousel = function(el) {
  this.$el = $(el);
  this.activeIdx = 0;
  this.$activeImage = $("li").eq(this.activeIdx);
  this.$el.on("click", ".slide-left", this.slideLeft.bind(this));
  this.$el.on("click", ".slide-right", this.slideRight.bind(this));
}

$.Carousel.prototype.slide = function(dir){
  var currentIdx = this.activeIdx;
  var transitioningIdx = this.wrapper(this.activeIdx + dir);
  this.activeIdx = transitioningIdx;
  var direction = "";
  if(dir === 1) {
    $("li").eq(currentIdx).addClass("left");
    $("li").eq(transitioningIdx).addClass("left");
    direction = 'left';
  } else {
    $("li").eq(currentIdx).addClass("right");
    $("li").eq(transitioningIdx).addClass("right");
    direction = 'right';
  }
  this.$el.one("transitionend", function(){
    setTimeout(function(){
      $("li").eq(currentIdx).removeClass("active");
      $("li").eq(currentIdx).removeClass(direction);
      $("li").eq(this.activeIdx).addClass("active");
      $("li").eq(transitioningIdx).removeClass(direction);
    },0);
  });


};

$.Carousel.prototype.wrapper = function(num) {
  if (num === -1){
    return (num += $("li").length);
  } else if (num === $("li").length){
    return (num -= $("li").length);
  } else {
    return num;
  }
}
$.Carousel.prototype.slideRight = function(e){
  this.slide(-1);

}

$.Carousel.prototype.slideLeft = function(e){
  this.slide(1);
}
