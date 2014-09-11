
$.Carousels = function (el) {
  this.$el = $(el);
  this.$images = this.$el.find('img');
  this.activeIndex = 0;
  $(this.$images[this.activeIndex]).addClass('active');
  
  debugger
  this.$el.on('click', this.$el.find('.slide-right'), 
    this.slideRight.bind(this));
  this.$el.on('click', this.$el.find('.slide-left'), 
    this.slideLeft.bind(this));
  
};



$.Carousels.prototype.slideLeft = function () {
  event.preventDefault();
  
  this.slide(-1);
};

$.Carousels.prototype.slideRight = function () {
  event.preventDefault();
  this.slide(1);
};



$.fn.carousels = function () {
  return this.each(function() {
    new $.Carousels(this);
  })
};

$.Carousels.prototype.slide = function slide (side) {
  
  var oldIndex = this.activeIndex
  
  $(this.$images[oldIndex]).removeClass('active');
  
  this.activeIndex += side;
  if (this.activeIndex < 0) {
    this.activeIndex = this.$images.length;
  }
  if (this.activeIndex > this.$images.length - 1) {
    this.activeIndex = 0;
  }
  
  if (side < 0) {
     $(this.$images[this.activeIndex]).addClass('left');
     $(this.$images[oldIndex]).addClass('right');
  } else {
    $(this.$images[this.activeIndex]).addClass('right');
    $(this.$images[oldIndex]).addClass('left');
  }
    
  $(this.$images[this.activeIndex]).addClass('active');
  
  this.$images[oldIndex].one("transitionend", function () {
    this.$images[oldIndex].removeClass('active left right');   
    
  }.bind(this)  )
  
} // slide
  