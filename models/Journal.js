const mongoose = require('mongoose')
const Schema = mongoose.Schema

const journalSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please give a title']
  },
  location: {
    type: String
  },
  text: {
    type: String
  }
  // entries: [{
  //   type: Schema.Types.ObjectId,
  //   ref: 'Entry'
  // }]
})

const Journal = mongoose.model('Journal', journalSchema)

module.exports = Journal
