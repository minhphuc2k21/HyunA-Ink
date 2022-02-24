$(document).ready(function(){

  $.ajax({
    dataType: "json",
    url: "../json/projects.json",
    success: (data)=>{
      alert(data);
    }
  });

})
