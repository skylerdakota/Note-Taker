// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var fs = require("fs");
const getId = require("uuid/v1");
// Notes (DATA) Dependency
// =============================================================
var notes = require("./db/db.json");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.envPORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use (express.static("public"));

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
    console.log(notes)
  return res.json(notes);
});

// Create new note - takes in JSON input
app.post("/api/notes", function(req, res) {
  var newNote = {}
  fs.readFile("./db/db.json", "utf8", function(err, data) {
    if (err) {
      console.log(err);
    }
    const notePad = JSON.parse(data)
    notePad.push(newNote)
    fs.writeFile("./db/db.json", JSON.stringify(notes), function(err, data) {
        if (err) {
          console.log(err);
        } else {
        console.log("New note written")
        res.json(notePad)
        }
    })
    });
});

// Deletes a note
app.delete("/api/notes/:id", function(req, res) {
    // locate note by id to delete
    var deleteNote = req.params.id;
    console.log(deleteNote);
    for (var i = 0; i < notes.length; i++) {
      if (deleteNote === notes[i].id) {
          notes.splice(i,1);
          i--;
      }
    }
  });

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});