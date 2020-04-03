const router = require("express").Router();
const notesDB = require("../db/db");


router.get("/notes", function(req, res) {
  notesDB
    .getNotes()
    .then(notes => res.json(notes))
    .catch(err => res.status(500).json(err));
});

router.post("/notes", function (req, res) {
  notesDB
    .addNote(req.body)
    .then((note) => res.json(note))
    .catch(err => res.status(500).json(err));
});

router.delete("/api/notes/:id",function(req,res) {
  notesDB({
      _id: req.params.id
  })
});

module.exports=router