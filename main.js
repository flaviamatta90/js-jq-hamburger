// mostro il menù principale clickando sull'hamburger
$("header-right > a").click(
  function() {
  $("hamburger-menu").addClass("active");
});

// nascondo il menù principale clickando sulla x
$("close").click(
  function() {
  $("hamburger-menu").removeClass("active");
});
