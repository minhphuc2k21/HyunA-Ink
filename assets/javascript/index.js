$(document).ready(function(){

  let date = new Date();
  let year = date.getFullYear();

  $(".footer").html(`Copyright &copy; Ink Master
   ${year} all rights reserved`);

});
