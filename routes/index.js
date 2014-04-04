
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index');
};

exports.videos = function(req, res){
  res.render('videos');
};

exports.video = function(req, res){
  res.render('video');
};

exports.form = function(req, res){
  res.render('form');
};

exports.ccategory = function(req, res){
  res.render('ccategory');
};