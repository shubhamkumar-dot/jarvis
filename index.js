const btn = document.getElementById('btn');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onstart = function(){
    console.log('you can speak now');
}


recognition.onresult=  function(event){
      var text = event.results[0][0].transcript;
      console.log(text);
      document.getElementById('result').innerHTML = text;
      read(text);
}

function read(text){
      var speech = new SpeechSynthesisUtterance();
      speech.text = text;
      if(text.includes('time')){
          speech.text = 'It is ' + new Date().getHours() + " " + new Date().getMinutes()+" right now";
      }else if(text.includes('song')){
          speech.text = ""
      }
      window.speechSynthesis.speak(speech);
}