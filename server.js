

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
=======
/// Start Express Server
const express = require('express');
const app = express();
const PORT = 3030;


app.use(express.urlencoded({extended:true}));
app.use(express.json());
//Create app as an instance of express
let waitList = [{}];
let reservationList = [{}];



//create post request that changes the data needed

  // Routes
// =============================================================
// Basic route that sends the user first to the Main Page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
  });

  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });

  // Displays all reservations
 app.get("/api/tables", function(req, res) {
    return res.json(reservationList);
  });

  // Displays all waiting list
 app.get("/api/waitinglist", function(req, res) {
     if (waitList.length===0){
        return res.sendFile(path.join(__dirname, "view.html"));
     }    
     return res.json(waitList);
  });
  
app.post("/tables", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newTable = req.body;
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    //newTable.routeName = newTable.name.replace(/\s+/g, "").toLowerCase();
    console.log(newTable);
    if(reservationList.length<5){
        reservationList.push(newTable);
    }else{
        waitList.push(newTable);
    }
    
    res.json(reservationList);
  });



///Set Port for express server
app.listen(PORT, function(){
    console.log(`App listening on Port ${PORT}`);
