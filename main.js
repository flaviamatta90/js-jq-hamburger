// // mostro il menù principale clickando sull'hamburger
// $(".header-right > a").click(
//   function() {
//   $(".hamburger-menu").addClass("active");
// }
// );
//
// // nascondo il menù principale clickando sulla x
// $(".close").click(
//   function() {
//   $(".hamburger-menu").removeClass("active");
// }
// );


// $(".header-right .fas.fa-bars").click(
//   function() {
//   $(".hamburger-menu").show(2000, miaFunzione);
//   }
// );
//
// $(".hamburger-menu .close").click(
//   function() {
//   $(".hamburger-menu").hide();
// }
// );
//
// function miaFunzione(){
//   alert("Ora il menù è visibile")
// };


$(".header-right .fas.fa-bars").click(
  function() {
  $(".hamburger-menu").fadeIn(2000);
  }
);

$(".hamburger-menu .close").click(
  function() {
  $(".hamburger-menu").fadeOut();
}
);
