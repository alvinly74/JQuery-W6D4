$.fn.tabs = function () {
  return this.each(function () {
    new $.Tabs(this);
  });
};

$.Tabs = function (el) {
  this.$el = $(el);
  this.$contentTabs = this.$el.data("content-tabs");
  this.$activeTab = $('a.active');
  this.$activeArticle = $('article.active');
  this.$el.on('click', 'a', this.clickTab.bind(this));
};

$.Tabs.prototype.clickTab = function (e) {
  e.preventDefault();
  var that = this;
  this.$activeTab.removeClass("active");
  this.$activeArticle.removeClass("active")
  this.$activeArticle.addClass('transitioning');

  this.$activeArticle.one("transitionend", function(){
    that.$activeArticle.removeClass("transitioning");
    var activeArticle = $(e.currentTarget).attr("href"); //chinese-crested
    that.$activeArticle = $(activeArticle).addClass("active").addClass("transitioning");
    setTimeout(function(){
      that.$activeArticle.removeClass("transitioning")
    }, 0);
    that.$activeTab = $(e.currentTarget).addClass("active");
  });
};


// function j(cb){
//   cb(1,2,3)
// }
//
// thing = {
//   do: function(a1, a2, a3){
//     return a1 + a2 + a3;
//   }
// }
// j(thing.do)
