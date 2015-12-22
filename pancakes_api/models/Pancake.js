var mongoose = require('mongoose');

var PancakeSchema = new mongoose.Schema ({
  Name: String,
  Ingredients: String,
  Syrup: String,
  Instructions: String,
  Deliciousness: String
});

module.exports = mongoose.model('Pancake', PancakeSchema);
