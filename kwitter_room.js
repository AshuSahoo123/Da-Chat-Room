var firebaseConfig = {
      apiKey: "AIzaSyCgLAKBwffflyzA3U1vsyTF20RGC4-Lmj4",
      authDomain: "let-s-chat-869da.firebaseapp.com",
      databaseURL: "https://let-s-chat-869da-default-rtdb.firebaseio.com",
      projectId: "let-s-chat-869da",
      storageBucket: "let-s-chat-869da.appspot.com",
      messagingSenderId: "715692374921",
      appId: "1:715692374921:web:9fcad25069a7804b623f58"
    };
    
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
