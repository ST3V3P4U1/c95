
var firebaseConfig = {
      apiKey: "AIzaSyB05b6HgqmpdBPRFZKie3zxAJeRZQq-uaM",
      authDomain: "kwitter-ebe1b.firebaseapp.com",
      databaseURL: "https://kwitter-ebe1b-default-rtdb.firebaseio.com",
      projectId: "kwitter-ebe1b",
      storageBucket: "kwitter-ebe1b.appspot.com",
      messagingSenderId: "180261853073",
      appId: "1:180261853073:web:79102475453216cd99ec30"
    };

      firebase.initializeApp(firebaseConfig);
      var user_name=localStorage.getItem('user');
      document.getElementById('user_name').innerHTML="Welcome "+user_name+"!";
      
      function addroom() {
            room_name=document.getElementById('room').value;
            firebase.database().ref("/").child(room_name).update({
                  purpose:'Adding room name.'
            });
            localStorage.setItem('room_name', room_name);
            window.location="kwitter_page.html"
            
      }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
      
      console.log("Room name-" + Room_names);
      column="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById('output').innerHTML+=column;
      
      });});}

      getData();
      function redirectToRoomName(name) {
            localStorage.setItem("room_name", name);
            window.location="kwitterpage.html";
      }