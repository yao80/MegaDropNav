function MegaDropNav() {
  this.init();
}

MegaDropNav.prototype = {

  init : function(){
    this.$gNavEl = $(".gNav_item-drop");
    this.$gNavLink = $(".gNav_item-drop > a");
    this.$gNavLowerCatList = $(".gNav_lower_catList");
    this.$lowerNavEl = $(".gNav_lower_catItem");
    this.hvFlg = false;
    this.bindEvent();
  },

  bindEvent : function(){
    var self = this;
    this.$gNavEl.each(function(){
      $(this).on("mouseover",function(e){
        self.gNavOnMouse(e);
      });
      $(this).on("mouseout",function(e){
        self.gNavOffMouse(e);
      });
    });
    this.$lowerNavEl.each(function(){
      $(this).on("mouseover",function(e){
        self.lowerNavOnMouse(e);
      });
      $(this).on("mouseout",function(e){
        self.lowerNavOffMouse(e);
      });
    });
    this.$gNavLink.each(function(){
      $(this).on("mouseover",function(){
        self.reset($(this));
      });
    });
    this.$gNavLowerCatList.each(function(){
      $(this).on("mouseover",function(){
        self.reset($(this));
      });
    });
  },

  gNavOnMouse : function(e) {
    var $target = $(e.currentTarget);
    $target.addClass("active");
    $target.find(".gNav_lower").stop().show();
  },

  gNavOffMouse : function(e) {
    var $target = $(e.currentTarget);
    $target.removeClass("active");
    $target.find(".gNav_lower").stop().hide();
  },

  lowerNavOnMouse : function(e) {
    var $target = $(e.currentTarget);
    $target.siblings().removeClass("active");
    $target.siblings().find(".gNav_lower_body").removeClass("active");
    $target.addClass("active");
    $target.find(".gNav_lower_body").addClass("active");
    this.hvFlg = true;
  },

  lowerNavOffMouse : function(e) {
    var $target = $(e.currentTarget);
    $target.removeClass("active");
    $target.find(".gNav_lower_body").removeClass("active");
    this.hvFlg = false;
  },

  reset : function($target) {
    if(this.hvFlg){
      return false;
    }
    $target.parents(".gNav_item").find(".gNav_lower_catItem").eq(0).addClass("active");
    $target.parents(".gNav_item").find(".gNav_lower_body").eq(0).addClass("active");
  }

};

module.exports = MegaDropNav;
