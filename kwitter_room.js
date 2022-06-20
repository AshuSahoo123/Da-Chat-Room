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

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !";

    function addRoom() {
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose: "adding room name"
          });
          localStorage.setItem("room_name", room_name);
          window.location = "kwitter_page.html";
    }

function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
            row = "<div class = 'room_name' id = " + Room_names + "onclick = 'redirect1(this.id)'> #" + Room_names + "</div> <hr>";
            document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirect1(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}