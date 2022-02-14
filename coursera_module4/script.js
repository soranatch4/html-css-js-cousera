(function () {
	var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
	for (var name in names) {
	   var firstCharacter = names[name].charAt(0).toLowerCase();
	    if (firstCharacte === 'j') {
	       byeSpeaker.speak(names[name]);
       } else {
	 helloSpeaker.speak(names[name]);
       }
     }
     
     })();
