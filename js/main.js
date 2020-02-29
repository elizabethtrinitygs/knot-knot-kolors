//CAROUSEL
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {
        fullWidth: true,
        indicators: true,
        duration: 100
    });
    instances.next(1);  
});
  







//Inicializando Carousel Materialize con jQuery
// $(document).ready(function(){
//     $('.carousel.carousel-slider').carousel({
//         dist: 0,
//         padding: 0,
//         fullWidth: true,
//         indicators: true,
//         duration: 100,
//     });
//   });

//   autoplay()
//   function autoplay() {
//       $('.carousel').carousel('next');
//       setTimeout(autoplay, 4500);
//   }


// $('carousel.carousel-slider').carousel({
//     fullWidth: true,
//     indicators: true
// });
// $(document).ready(Function(){
//     $('.modal').modal();
// });