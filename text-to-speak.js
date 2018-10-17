function textToSpeech(){
    var scriptTag = document.createElement('script')
    var inputElement = document.createElement('input');
    inputElement.setAttribute("placeholder","write text to speech");
    scriptTag.setAttribute("src","http://code.responsivevoice.org/responsivevoice.js")
    console.log(inputElement.style);
    inputElement.style.cssText = "color: blue; width: 100%; height: 55px; border: 1px solid red; font-size: 22px; background-color: #ff9800; ;padding: 20px;ß margin = auto";
    document.body.appendChild(inputElement);
    document.body.appendChild(scriptTag)
    inputElement.addEventListener("change",function(){
          console.log(inputElement.value)
          console.log(encodeURIComponent(inputElement.value));
          setTimeout(responsiveVoice.speak(inputElement.value),9000);
      }) 
 }