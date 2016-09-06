/**
 * Created by daiyingheng on 16/9/5.
 */
var mongoose = require('mongoose');

var articleSchema = new mongoose.Schema({
  title: String,
  content: String,
  date: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('Article', articleSchema);


