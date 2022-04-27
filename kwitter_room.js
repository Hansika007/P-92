
//ADD YOUR FIREBASE LINKS HERE

var  firebaseConfig = {
      apiKey: "AIzaSyBYYtuV8RMrwg-UGThxgG7wKfRgZc7tCok",
      authDomain: "classtest-4b7af.firebaseapp.com",
      databaseURL: "https://classtest-4b7af-default-rtdb.firebaseio.com",
      projectId: "classtest-4b7af",
      storageBucket: "classtest-4b7af.appspot.com",
      messagingSenderId: "65855571055",
      appId: "1:65855571055:web:64744b879d05062736f99a"
  };
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name"); 
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name ).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row = "<div class = 'room_name' id = "+ Room_names +" onclick = 'redirectToRoomName (this.id)' >#"+Room_names +"</div> <hr>" ;
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name) 
{ 
      console.log(name); 
      localStorage.setItem("room_name", name); 
      window.location = "kwitter_page.html";
}