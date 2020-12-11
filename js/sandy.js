
var firebaseConfig = {
  apiKey: "AIzaSyBRQx2a8ZCG9GebhRILk-7ZONzZimNmMEE",
  authDomain: "mindbenders-8d230.firebaseapp.com",
  databaseURL: "https://mindbenders-8d230.firebaseio.com",
  projectId: "mindbenders-8d230",
  storageBucket: "mindbenders-8d230.appspot.com",
  messagingSenderId: "178370620970",
  appId: "1:178370620970:web:9345abfb15fd26bd381d53"

  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

var rootRef = firebase.database().ref().child("Patient");

rootRef.on("child_added",snap => {
    var no = snap.child("patientid").val();
    var first = snap.child("patientname").val();
    var last = snap.child("patientage").val();
    var gender = snap.child("patientgender").val();
    var blood = snap.child("patientbloodgrp").val();
    var dept = snap.child("patientmedicalcondition").val();
    var phone = snap.child("patientphone").val();
    var address = snap.child("patientivname").val();
    var city = snap.child("patientdob").val();
    var state = snap.child("patientivfinalvalue").val();
    var time = snap.child("patientcurrentiv").val();
    

    $("#table_body").append("<tr><td>"+no+"</td><td>"+ first + "</td><td>" + last + "</td><td>"+ city +"</td><td>"+ gender+ "</td><td>"+ blood + "</td><td>"+ dept+"</td><td>"+ phone+ "</td><td>" + address+ "</td><td>"+state+ "</td><td>"+ time +"</td></tr>");
});
