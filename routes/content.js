
var path = require('path');
var fs = require('fs');
var express = require('express');

var router = express.Router();

// Add 10 walls without loop
router.get('/py-1', function(req, res) {
  res.render('py-1');
}); 

// Add 10 walls with while loop
router.get('/py-2', function(req, res) {
  res.render('py-2');
}); 

// Add 10 walls with a for loop
router.get('/py-3', function(req, res) {
  res.render('py-3');
}); 

// Challenge add 5 walls and 5 energies with a for loop
router.get('/py-4', function(req, res) {
  res.render('py-4');
}); 

// Challenge add 5 walls and 5 energies with a for loop
router.get('/py-5', function(req, res) {
  res.render('py-5');
}); 

// Challenge for loop with if
  router.get('/py-6', function(req, res) {
  res.render('py-6');
}); 

// For loop multiple statements
  router.get('/py-7', function(req, res) {
  res.render('py-7');
}); 

// For loop counter addition
  router.get('/py-8', function(req, res) {
  res.render('py-8');
}); 

// For loop addWall(x,y) horizontal line of walls
  router.get('/py-9', function(req, res) {
  res.render('py-9');
}); 

// For loop addWall(x,y) diagonal line of walls - challenge
  router.get('/py-10', function(req, res) {
  res.render('py-10');
}); 

// For loop 'V' challenge
  router.get('/py-11', function(req, res) {
  res.render('py-11');
}); 

// For loop break
  router.get('/py-12', function(req, res) {
  res.render('py-12');
}); 

// Nested for
  router.get('/py-13', function(req, res) {
  res.render('py-13');
}); 


module.exports = router;



