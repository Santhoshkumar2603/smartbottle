<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Patient-Form</title>
    <link href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <script src="https://www.gstatic.com/firebasejs/8.0.0/firebase-app.js"></script>
        <script src="https://www.gstatic.com/firebasejs/8.0.0/firebase-auth.js"></script>
        <script src="https://www.gstatic.com/firebasejs/8.0.0/firebase-database.js"></script>
        <script src="https://www.gstatic.com/firebasejs/8.0.0/firebase-storage.js"></script>
     
    <link href="https://fonts.googleapis.com/css2?family=Work+Sans&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@700&display=swap" rel="stylesheet">
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>

    
   <style>
       
        body{
            font-style: normal;
            font-family: 'Work Sans', sans-serif;
        }

        #santh{
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat;
            
        }
        form {
            margin: 0% 20% 10% 20%;
        }
.title{
    display: flex;
    font-family: 'Times New Roman', Times, serif;
    /* color: red; */
}

.title i{
    color: red;

}

.title-underline{
    height: 3px;
    width: 14%;

    background-color: #8717ff;
    margin: 0 0 3em 0;
}
    </style>
</head>

<body>


   

        <div class="dashboard-main-container ">
            <div class="title">
                <h3>SmartBottle</h3>
                <i class="material-icons">local_hospital</i>
        </div>
            
        <div class="title-underline"></div>


    <div class="wrapper" id="santh" style="background-image: url('img/apoitment.png');">

    <div class="d-flex" style="margin-top: 50px;">
        <h4 class="mx-auto" style="font-size: 40px; font-family: 'Red Hat Display', sans-serif;">APPOINTMENT FORM</h4>    
    </div>
    <div class="d-flex" style="margin-top: 10px;">
        <img class="mx-auto" src="images/apointment.png" alt="" height="200px"><br>
    </div>
    <form action="">
        <div class="form-group">
           
                
                <select class="btn btn-info dropdown-toggle" name="" id="no" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <option value="">BED NO</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
                
           
            <label>Name</label>
            <input class="form-control" type="text" placeholder="" id="firstName">
            <label>D.O.B (dd-mm-yyyy)</label>
            <input class="form-control" type="text" placeholder="" id="city">
            <label>Age</label>
            <div class="row">
            <div class="col-6">    
            <input class="form-control" type="number" placeholder="" id="secondName">
            </div>
            
            <div class="dropdown col-6">
                
                <select class="btn btn-info dropdown-toggle" name="" id="gender" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <option value="">Gender</option>
                    <option value="Male">MALE</option>
                    <option value="Female">FEMALE</option>
                    <option value="Others">OTHERS</option>
                </select>
                
           </div>
           
          
         </div>

         
                       
         <div class="form-group">
        
            <label>Blood-group</label>
            <div class="row">
            <div class="col-6">    
            <input class="form-control" type="text" placeholder="" id="bio">
            </div>
            
            <div class="dropdown col-6">
               
                <select class="btn btn-info dropdown-toggle" name="" id="country" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                             <option value="">Disease</option>
                             <option value="CARDIOLOGY">CARDIOLOGY</option>
                             <option value="DENTAL">DENTAL</option>
                             <option value="ENT">ENT</option>
                             <option value="GYNOCOLOGY">GYNOCOLOGY</option>
                             <option value="NEUROLOGY">NEUROLOGY</option>
                             <option value="OPTHAMOLOGIST">OPTHAMOLOGIST</option>
                             <option value="ORTHO">ORTHO</option>
                             <option value="PEDIATRICIAN">PEDIATRICIAN</option>
                             <option value="OTHERS">OTHERS</option>
                </select>
                
           </div>
           
         <div>
             <label>Phone Number</label>
            <input class="form-control" type="text" placeholder="" id="phone">     
            <label>IV Name</label>
            <input class="form-control" type="text" placeholder="" id="state">

         </div>
        <div class="form-group">
            <div class="row">
            <div class="col-6">    
                <div style="text-align:center;"> <h5><a style="text-decoration:none;">Date<span style="color:blue;"></span><br /></a></h5> 
                    <iframe src="https://www.zeitverschiebung.net/clock-widget-iframe-v2?language=de&size=medium&timezone=Asia%2FKolkata" width="100%" 
                    height="110" frameborder="0" seamless></iframe> <small style="color:blue;"></small>
                 </div>
            </div>
    
            <div class="dropdown col-6">
                
                <select class="btn btn-info dropdown-toggle" name="" id="time" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <option value="">FIX APPOINTMENT TIME</option>
                        <option value="9.00 AM">9.00 AM</option>
                        <option value="9.30 AM">9.30 AM</option>
                        <option value="10.00 AM">10.00 AM</option>
                        <option value="10.30 AM">10.30 AM</option>
                        <option value="11.00 AM">11.00 AM</option>
                        <option value="11.30 AM">11.30 AM</option>
                        <option value="12.00 PM">12.00 PM</option>
                        <option value="12.30 PM">12.30 PM</option>
                        <option value="1.00 PM">1.00 PM</option>
                        <option value="1.30 PM">1.30 PM</option>
                        <option value="2.00 PM">2.00 PM</option>
                        <option value="2.30 PM">2.30 PM</option>
                        <option value="3.00 PM">3.00 PM</option>
                        <option value="3.30 PM">3.30 PM</option>
                        <option value="4.00 PM">4.00 PM</option>
                        <option value="4.30 PM">4.30 PM</option>
                        <option value="5.00 PM">5.00 PM</option>
                        <option value="5.30 PM">5.30 PM</option>
                        <option value="6.00 PM">6.00 PM</option>
                        <option value="6.30 PM">6.30 PM</option>
                        <option value="7.00 PM">7.00 PM</option>
                        <option value="7.30 PM">7.30 PM</option>
                        <option value="8.00 PM">8.00 PM</option>
                        <option value="8.30 PM">8.30 PM</option>
                        <option value="9.00 PM">9.00 PM</option>
                        <option value="9.30 PM">9.30 PM</option>
                        <option value="10.00 PM">10.00 PM</option>
                        <option value="10.30 PM">10.30 PM</option>
                        <option value="11.00 PM">11.00 PM</option>
                        <option value="11.30 PM">11.30 PM</option>
                </select>
                
           </div>
           
          
         </div>
       
        <button class="btn btn-primary" type="button" id="btn-update">Submit</button>

       <!--  <p>
            <i class="far fa-clock" style="font-size:1.0rem;color:#e3a8c7;"></i>
            <span style="font-size:1.0rem;">Time : </span>
            <span id="time" style="font-size:1.0rem;"></span>
            <br>
            <i class="far fa-calendar-alt" style="font-size:1.0rem;color:#f7dc68";></i>
            <span style="font-size:1.0rem;">Date : </span>
            <span id="date" style="font-size:1.0rem;"></span>
         </p>
        <button class="btn btn-primary" type="button" id="btn-update">Submit</button>-->

        
    </form>
</div>
   
</div>
</div>

</div>

    <script src="js/index.js"></script>
     <script>
         setInterval(function() {
        // Call a function repetatively with 1 Second interval
        Time_Date();
      }, 1000);

      function Time_Date() {
        var t = new Date();
        document.getElementById("time").innerHTML = t.toLocaleTimeString();
        var d = new Date();
        const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"];
        const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
        document.getElementById("date").innerHTML = dayNames[d.getDay()] + ", " + d.getDate() + "-" + monthNames[d.getMonth()] + "-" + d.getFullYear();
      }
    </script>
</body>

</html>