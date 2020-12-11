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
  

  const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});


  $("#btn-login").click(function()
  {
         var email = $("#email").val();
         var password = $("#password").val();
        
         if(email != "" && password != "")
         {
                 var result = firebase.auth().signInWithEmailAndPassword(email ,password);
                  result.catch(function(error)
                  {
                       var errorCode =error.code;
                       var errorMessage=error.message;

                       console.log(errorCode);
                       console.log(errorMessage);
                       window.alert("Message :"+ errorMessage);

                  });
         }
         
         else
         {
             window.alert("please fill out all the message");
         }
  });



  $("#btn-signup").click(function()
  {
         var email = $("#email").val();
         var password = $("#password").val();
         var cPassword = $("#comfirmpassword").val();
         
        
         if(email != "" && password != "" && cPassword != "")
         {
              if(password == cPassword)
              {
                var result = firebase.auth().createUserWithEmailAndPassword(email ,password);
                result.catch(function(error)
                {
                    var errorCode =error.code;
                    var errorMessage=error.message;
     
                    console.log(errorCode);
                    console.log(errorMessage);
                    window.alert("Message :"+ errorMessage);
     
                       });
              }
              else 
              {
                      window.alert("password donot match");

              }
                
         }
         
         else
         {
             window.alert("please fill out all the message");
         }
  });


  $("#btn-resetPassword").click(function()
  {
       var auth=firebase.auth();
       var email=$("#email").val();
       if(email !="")
       {
             auth.sendPasswordResetEmail(email).then(function()
             {
                    window.alert("Email has been to you,please check and verify");
             })
             .catch(function(error)
             {
               var errorCode =error.code;
               var errorMessage=error.message;

               console.log(errorCode);
               console.log(errorMessage);
               window.alert("Message :"+ errorMessage);

             });
       }
       else
       {
            window.alert("please fill out all the message");
       }
  });

  $("#btn-logout").click(function()
  {
       window.location.href ="signin.html";
       firebase.auth().signOut();
  });
   
$("#btn-update").click(function()
{
       var no = $("#no").val();
       var phone =$("#phone").val();
       var finaliv =$("#finaliv").val();
       var bio =$("#bio").val();
       var fName=$("#firstName").val();
       var sName=$("#secondName").val();
       var country=$("#country").val();
       var gender=$("#gender").val();
       var currentiv=$("#currentiv").val();
       var city=$("#city").val();
       var state=$("#state").val();
         
       var rootRef =firebase.database().ref().child("Patient");
       var userID = firebase.auth().currentUser.uid;
       var usersRef= rootRef.child(no);
        
       if(finaliv != "" && currentiv != "" && userID != "" && fName !="" && sName !="" && city!=""&& state!=""&&phone!="" && bio !="" && country!=""&& gender !="")
       {
                 
                 var userData =
                 {
                      "patientid":no,
                      "patientphone":phone,
                      "patientivfinalvalue":finaliv,
                      "patientbloodgrp":bio,
                      "patientname":fName,
                      "patientage":sName,
                      "patientmedicalcondition":country,
                      "patientgender":gender,
                      "patientcurrentiv":currentiv,
                      "patientdob":city,
                      "patientivname":state,

                 }
                
                 console.log(userData)
                 usersRef.set(userData,function()
                 {
                   if(error)
                   {
                      var errorCode =error.code;
                      var errorMessage=error.message;
     
                      console.log(errorCode);
                      console.log(errorMessage);
                      window.alert("Message :"+ errorMessage);
                   }
                   else
                   {
                    window.location.href ="index.html";
                   }
     
                 });
                 {
                    window.location.href ="index.html";
                 }
       }
       else
       {
            window.alert("form is incomplete");
       }
});



 