/*
 * GET home page.
 */

exports.home = function(req, res){
  res.render('index', { title: 'Quick and dirty homepage' });
};

exports.post_handler = function(req, res){
  console.log("We are here");
  content = req.body.content || 'Anonymous';
  console.log(content);
  res.redirect('/');
};