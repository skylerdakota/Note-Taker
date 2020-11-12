// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var fs = require("fs");
var notes = require("/db/db.json");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.envPORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Notes (DATA)
// =============================================================
// var notes = [
//     {
//       id: "",
//       title: "",
//       content: "",
//     }
//   ];

// HTML Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/index", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});

// If no matching route is found default to home
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
  });

// API Routes
// =============================================================

// Displays all notes
app.get("/api/notes", function(req, res) {
  return res.json(notes);
});

// Create new note - takes in JSON input
app.post("/api/notes", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newNote = { id: getId(), ...req.body }
  fs.readFile("./db/db.json", "utf8", function(err, data) {
    if (err) {
      console.log(err);
    }
    const notePad = JSON.parse(data)
    notePad.push(newNote)
    fs.writeFile("./db/db.json", JSON.stringify(note), function(err, data) {
        if (err) {
          console.log(err);
        } else {
        console.log("New note written")
    }
  });

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newNote.id = newNote.title.replace(/\s+/g, "").toLowerCase();
  console.log(newNote);
  notes.push(newNote);
  res.json(newNote);
});

// Deletes a note
app.delete("/api/notes/:id", function(req, res) {
    var chosen = req.params.notes;
  
    console.log(chosen);
  
    for (var i = 0; i < notes.length; i++) {
      if (chosen === notes[i].id) {
        return res.json(notes[i]);
      }
    }
    return res.json(false);
  });

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});