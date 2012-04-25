(function(window, Util, PhotoSwipe){

  document.addEventListener('DOMContentLoaded', function(){

    var options = {
        preventHide: true,
        minUserZoom: 0.9,
        margin:50,
        /*getImageSource: function(obj){
          return obj.href;
        },
        getImageCaption: function(obj){
          return obj.alt;
        }*/
      };

    var instance = PhotoSwipe.attach( window.document.querySelectorAll('#Gallery a'), options );

    instance.show(0);

  }, false);

}(window, window.Code.Util, window.Code.PhotoSwipe));
