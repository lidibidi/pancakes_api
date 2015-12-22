var express = require('express');
var router = express.Router();
var model = require('../models/Pancake');

// function buildErrorResponse(err)  {
//   return {
//     message: err,
//     status: 300,
//     note: 'You did something wrong homie'
//   };
// };
//
// function addMessageToSuccesfulQuery(obj, msg) {
//   var ret = obj;
//   ret.message = msg:
//   return ret;
// };

/* GET users listing. */
router.get('/', function(req, res, next) {
  model.find(function (err, pancakes){
    if (err) console.log(error);
    res.json(pancakes);
  });
});


router.get('/:id', function(req, res, next) {
  model.find(req.params.id, function (err, pancake){
    if (err) console.log(error);
    res.json(pancake);
  });
});

router.post('/', function(req, res, next) {
  model.create(req.body, function (err, pancake){
    if (err) console.log(error);
    res.json(pancake);
  });
});

router.put('/:id', function(req, res, next) {
  model.findByIdAndUpdate(req.params.id, req.body, function (err, pancake){
    if (err) console.log(error);
    res.json(pancake);
  });
});

router.patch('/:id', function(req, res, next) {
  model.findByIdAndUpdate(req.params.id, req.body, function (err, pancake){
    if (err) console.log(error);
    res.json(pancake)
  });
});

router.delete('/:id', function(req, res, next) {
  model.findByIdAndRemove(req.params.id, req.body, function (err, pancake){
    if (err) console.log(error);
    res.json({"Message": "You succesfully removed that recipe"});
  });
});


module.exports = router;
