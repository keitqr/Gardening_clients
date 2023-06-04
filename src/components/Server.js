const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(express.json());

app.post('/save-notes', (req, res) => {
  const notes = req.body.notes;

  // Append the notes to a file
  fs.appendFile('notes.txt', notes + '\n', (err) => {
    if (err) {
      console.error('Error saving notes:', err);
      res.status(500).send('Error saving notes');
    } else {
      console.log('Notes saved successfully!');
      res.sendStatus(200);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
