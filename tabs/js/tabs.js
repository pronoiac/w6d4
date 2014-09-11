$.Tabs = function (el) {
  this.$el = $(el);
  this.$contentTabs = $(this.$el.data('content-tabs'));
  this.$activeTab = this.$contentTabs.find(".active");
  debugger;
};



$.fn.tabs = function () {
  return this.each(function () {
    new $.Tabs(this);
  });
};