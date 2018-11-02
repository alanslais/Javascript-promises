// Use promise to solve the issue of callback-hell
// and achieve a refactored code, easy to maintain

window.onload= function () {


   var promise= $.get("data/tweets.json");
   promise.then(function(tweets) {
     console.log(tweets);
     return $.get("data/friends.json");
   }).then(function (friends) {
     console.log(friends);
     return $.get("data/videos.json");
   }).then(function (videos) {
     console.log(videos);
   })
};
