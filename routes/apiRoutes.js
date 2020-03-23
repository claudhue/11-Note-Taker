// ===============================================================================
// DEPENDENCIES
// ===============================================================================

var fs = require("fs")
var notesDB = require("../db/db");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Request
  // ---------------------------------------------------------------------------

  app.get("/api/notes", function(req, res) {
    res.json(notesDB);
  });
  // API POST Request
  // ---------------------------------------------------------------------------

  app.post("/api/notes", function(req, res) {
      notesDB.push(req.body);
      res.json(true);
  });

  // API DELETE Request
  // ---------------------------------------------------------------------------

  app.delete("/api/notes/:id", function(req, res) {
    var query = "id = " + req.params.id;
  
    notes.delete(query, function(result) {
      if (result.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  }