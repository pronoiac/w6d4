$.Tabs = function (el) {
  this.$el = $(el);
  this.$contentTabs = $(this.$el.data('content-tabs'));
  this.$activeTab = this.$contentTabs.find(".active");
  this.$el.on('click', 'a', this.clickTab.bind(this));
};

$.fn.tabs = function () {
  return this.each(function () {
    new $.Tabs(this);
  });
};

$.Tabs.prototype.clickTab = function (event) {
  event.preventDefault();
  var clickedID = $(event.currentTarget).attr('href');
  this.$el.children().children().removeClass("active");
  $(event.currentTarget).addClass('active');
  // update activeTab
  this.$contentTabs.children().removeClass("active");
  this.$activeTab.addClass('transitioning');
  
  this.$activeTab.one('transitionend', function () {
    this.$activeTab.removeClass('transitioning');
    this.$activeTab = this.$contentTabs.find(clickedID);
    this.$activeTab.addClass('transitioning');
    setTimeout (function () {
      this.$activeTab.removeClass('transitioning');
      this.$activeTab.addClass('active');
    }.bind(this), 0);
  }.bind(this))
  
};
