module.exports.index = function(application, req, res){
	var doc = application.config.googleSpreadsheetConnection;
	var spreadSheetModels = new application.app.models.SpreadSheetModels(doc);
	
	spreadSheetModels.getRows(function(error, result){
		res.render("index", {title: doc.title, rows: result});
	});
};

module.exports.addRow = function(application, req, res){
	var doc = application.config.googleSpreadsheetConnection;
	var spreadSheetModels = new application.app.models.SpreadSheetModels(doc);
	
	spreadSheetModels.addRow(req.query, function(error){
		res.redirect("/");
	});
};