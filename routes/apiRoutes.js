// ===============================================================================
// DEPENDENCIES
const fs = require ('fs');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);
const notesData = require('../db/db.json');
// ===============================================================================

module.exports = function(app) {
//All notes//
app.get('/api/notes', function (req, res) {
  return res.json(notesData)
});

//Create note//
app.post('/api/notes', function (req, res) {
  var newNote = req.body;

  notesData.push(newNote);
  res.json(notesData)
});

//Delete note//
app.delete('/api/notes/:id', function (req, res) {
  var indexValue = 0;

  for (var i = 0; i < notesData.length; i++) {
    if(notesData[i].id == req.params.id)
    {console.log(notesData[i]);
      indexValue = i;
    }
  }
  notesData.splice(indexValue, 1);
  writeFileAsync('../db/db.json', JSON.stringify(notesData))
  .catch(function(err) {
    console.log(err);
  });
  res.json(notesData);
});
};