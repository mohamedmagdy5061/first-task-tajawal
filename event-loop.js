
// synchronous 
[1,2,3,4].forEach(function(i){
    console.log(i);
});

// Asynhronous

function AsynhForEach(arr,cb){
    arr.forEach(function(){
        setTimeout(cb,1000);
    });
}

AsynhForEach([1,2,3,4],function(i){
    console.log(i);
})




//==================================================== speaking your statment from input
function textToSpeech(){
   var inputElement = document.createElement(input);
   document.appendChild(inputElement);
}
for(let i = 0; i<li.length; i++ ){
    li[i].onclick = function(){
      console.log(li[i].textContent)
      var test = document.querySelector(".test").value
      console.log(test)
      console.log(encodeURIComponent(test));
      setTimeout(responsiveVoice.speak(test),0);
    }

  }

