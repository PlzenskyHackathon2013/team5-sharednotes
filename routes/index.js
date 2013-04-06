
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'SharedTasks' })
};


exports.foo = function(req, res){
    res.render('foo', { title: 'foo' })
};