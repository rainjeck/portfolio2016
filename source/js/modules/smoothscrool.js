(function(){
  var smothscroll = {
    doit: function(){
      this.listeners();
    },

    listeners: function(){
      $('#arrowDown').on('click', smothscroll.scrollDown);
      $('#arrowUp').on('click', smothscroll.scrollUp);
    },

    scrollDown: function(e){
      e.preventDefault();
      var headerHeight = $('#screen').position().top;
      $('body').animate({scrollTop: headerHeight}, 1000);
      console.log(headerHeight);
    },

    scrollUp: function(e){
      e.preventDefault();
      $('body').animate({scrollTop: 0}, 2000);
    }
  }

  smothscroll.doit();
}());