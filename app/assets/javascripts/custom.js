jQuery( document ).ready(function() {

  jQuery('.submit-button').mouseover(function() {
    jQuery( '.submit-button' ).css( {"background-color" : "#00b398" });
  });

  jQuery('.submit-button').mouseout(function() {
    jQuery( '.submit-button' ).css( {"background-color" : "white" });
  })

});