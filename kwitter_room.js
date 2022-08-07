//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyD8R6qPliX4rdebwm2qep7_N6GZfxGqZNk",
      authDomain: "hyperstream-3da46.firebaseapp.com",
      databaseURL: "https://hyperstream-3da46-default-rtdb.firebaseio.com",
      projectId: "hyperstream-3da46",
      storageBucket: "hyperstream-3da46.appspot.com",
      messagingSenderId: "1017132045025",
      appId: "1:1017132045025:web:c3ac0b887281725e81dda0"
};
//make projects intresting.]8

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!"

function addroom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";

}
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>"; 
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();
function redirectToRoomName(name){
      console.log(name)
      localStorage.setItem("room_name",name)
      window.location="kwitter_page.html"
      
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html"
}