$(document).ready(function(){

  let date = new Date();
  let year = date.getFullYear();

  $(".footer").html(`Copyright &copy; Tattoo Shop
   ${year} all rights reserved`);

});
