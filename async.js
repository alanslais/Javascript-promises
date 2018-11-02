window.onload= function () {


  var http= new XMLHttpRequest();
http.onreadystatechange=function () {
  if(http.readyState==4 && http.status == 200){
  //  console.log(JSON.parse(http.response));

  }

}

  http.open("GET", "data/people.json",true);
  http.send();

//console.log("Test");

//jQuery method
function getData(data) {
//  console.log(data);
}
$.get( "data/people.json", getData)


var fruits=["mango", "pear", "banana"];
fruits.forEach(function(val){
  console.log(val);});



}
