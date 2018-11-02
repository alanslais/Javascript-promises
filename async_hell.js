
window.onload=function(){

$.ajax({
  type:"GET",
  url:"data/people.json",
  success: function (data) {
    console.log(data);


    $.ajax({
      type:"GET",
      url:"data/people2.json",
      success: function (data) {
        console.log(data);
      },
      error: function (jqXHR,textStatus,error) {
        console.log(error);
      }
    });


  },
  error: function (jqXHR,textStatus,error) {
    console.log(error);
  }
});

};
