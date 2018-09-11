/*----------------------------------------------------------------------------*/
/*Zorgt ervoor dat de achtergrond verandert voor de desbetreffende tijdlijn item. 
Daarbij wordt ervoor gezorgd dat de actieve tijdlijn-item gefocus't wordt. */
/*----------------------------------------------------------------------------*/

(function($) {
  $.fn.tijdlijn = function() {
    var selectors = {
      id: $(this),
      item: $(this).find(".tijdlijn-item"),
      activeClass: "tijdlijn-item-active",
      img: ".tijdlijn-img"
    };
    selectors.item.eq(0).addClass(selectors.activeClass);//hiermee wordt de eerste actieve tijdlijn item aangegeven
    selectors.id.css("background-image", "url(" + selectors.item.first().find(selectors.img).attr("src") + ")");//hiermee wordt de eerste achtergrond bepaald

    //Hiermee wordt bepaald welke class actief wordt en welke achtergrond daarvoor gezet moet worden door middel van het scrollen
    var itemLength = selectors.item.length;
    $(window).scroll(function() {
      var max, min;
      var pos = $(this).scrollTop();
      selectors.item.each(function(i) {
        min = $(this).offset().top;
        max = ($(this).height() + $(this).offset().top);
        var that = $(this)
        // if (i == itemLength - 2 && pos > min + $(this).height() / 2) {//hier wordt gekeken als de laatste tijdlijn item actief is   
        //   selectors.item.removeClass(selectors.activeClass);
        //   selectors.id.css("background-image", "url(" + selectors.item.last().find(selectors.img).attr('src') + ")");
        //   selectors.item.last().addClass(selectors.activeClass)
        // } else 
        if (pos <= max - 40 && pos >= min) { //hier wordt gekeken welke tijdlijn item actief is
            selectors.id.css("background-image", "url(" + $(this).find(selectors.img).attr('src') + ")");
            selectors.item.removeClass(selectors.activeClass);
            $(this).addClass(selectors.activeClass);
          }
        
      });
    });

  }
})(jQuery);
$("#tijdlijn").tijdlijn();
