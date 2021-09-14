module.exports = function(application){
	application.get("/", function(req, res){
		application.app.controllers.home.index(application, req, res);
		//application.controllers.home.index(application, req, res);
	});

	application.get("/insert", function(req, res){
		application.app.controllers.home.addRow(application, req, res);
		//application.controllers.home.addRow(application, req, res);
	});
};