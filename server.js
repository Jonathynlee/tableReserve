// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//reservations will be held in reservation array
//make pseudo data
var reservation = [
    {
      customerName: "Jonathyn Major",
      phoneNumber: "1234566677",
      customerEmail: "j@a",
      customerID: 1,
    },
    {
        customerName: "Karen M",
        phoneNumber: "1934566677",
        customerEmail: "k@a",
        customerID: 2,
      },
   
  ];
  //An Array for the Waiting List
  //Data Should be added to reservation until it reaches 5.
  //push data to waitlist after 5 customers
  var waitingList = [];

  

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
    return res.json(reservation);
  });

  // Displays all waiting list
 app.get("/api/waitinglist", function(req, res) {
     if (waitingList.length===0){
        res.sendFile(path.join(__dirname, "view.html"));
     }    
     return res.json(waitingList);
  });
  
  
  // Displays a single character, or returns false
  /*app.get("/api/characters/:character", function(req, res) {
    var chosen = req.params.character;
  
    console.log(chosen);
  
    for (var i = 0; i < characters.length; i++) {
      if (chosen === characters[i].routeName) {
        return res.json(characters[i]);
      }
    }
  
    return res.json(false);
  });*/