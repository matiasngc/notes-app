const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/notes-db-app')
  .then(db => console.log('DB connected to', db.connection.name))
  .catch(err => console.error(err) )