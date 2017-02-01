var a = 1, b = 2, c = 3;
(function firstFunction(){
  var b = 5, c = 6;
  (function secondFunction(){
    var b = 8;
    (function thirdFunction(){
      var a = 7, c = 9;
      (function forthFunction(){
        var a = 1, c = 8;
      })();
    })();
  })();
})();
console.log("a: "+a+", b: "var b = 8" c: "var c = 6);
