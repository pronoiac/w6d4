$.Thumbnails = function (el) {
  this.$el = $(el);
  this.$images = this.$el.find('img');
  
  this.$imageNav = $('<div></div>');
  this.$left = $('<a href="#">Left</a>');
  this.$right = $('<a href="#">Right</a>')
  this.$gutter = $('<ul class="gutter">gutter</ul>');
  this.$imageNav.append(this.$left);
  this.$imageNav.append(this.$right);
  this.$imageNav.append(this.$gutter);
  this.$el.append(this.$imageNav);
  
  this.currentImage = 0
  this.undisplayed = [1, 2, 3]
  
  
  
  
  
  debugger;
};


$.Thumbnails.prototype.fillGutter = function () {
  
};

$.Thumbnails.prototype.setActiveImage = function () {
  this.$activeImage = $(this.$images[this.currentImage])
  
};

$.Thumbnails.prototype.setActiveThumb = function () {

  
};




$.fn.thumbnails = function () {
  return this.each(function () {
    new $.Thumbnails(this);
  });
};
