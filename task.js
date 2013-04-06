exports.index = function(req, res){
	  res.send('task index');
};

exports.new = function(req, res){
	  res.send('new task');
};

exports.create = function(req, res){
	  res.send('create task');
};

exports.show = function(req, res){
	  res.send('show task ' + req.params.task);
};

exports.edit = function(req, res){
	  res.send('edit task ' + req.params.task);
};

exports.update = function(req, res){
	  res.send('update task ' + req.params.task);
};

exports.destroy = function(req, res){
	  res.send('destroy forum ' + req.params.forum);
};
