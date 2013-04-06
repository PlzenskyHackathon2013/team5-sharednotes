
/*
 * GET foo page.
 */

exports.foo = function(req, res){
    console.log("in exports.foo")
    res.render('foo', { title: 'FOOOOOOOOO' })
};