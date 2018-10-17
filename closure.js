function closures(firstName){
    console.log(firstName);
    return function(lastName){
        console.log(firstName + " " + lastName);
    }
}


function buildFun(){
   var arr = [];
   for(var i = 0 ; i < 3 ; i++){
      
       arr.push(
           (function(j){
               return function(){
                console.log(j);
               }
       }(i))
    )
       console.log(i)
   }
   return arr;
}

var fs = buildFun();
fs[0]();
fs[1]();
fs[2]();