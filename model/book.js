const mongoose = require('mongoose')

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const Author = new Schema({
  firstName: String,
  lastName: String,
  yearOfBirth: String
})

const Book = new Schema({
  id: ObjectId,
  name: String,
  year: String,
  size: String,
  author: Author,
  genre: {
    type: String,
    enum: ['Crime',
      'Mystery',
      'Horror',
      'Biography',
      'Textbook',
      'FairyTale',
      'Classic',
      'Novel',
      'Cyberpunk'],
    default: 'Novel'
  }
})

module.exports = Book


