module.exports.index = function(application, req, res){
	var doc = application.config.googleSpreadsheetConnection;
	//var spreadSheetModels = new application.app.models.SpreadSheetModels(doc); // local
	var spreadSheetModels = new application.models.SpreadSheetModels(doc);
	spreadSheetModels.getRows(function(error, result){
		res.render("index", {title: doc.title, rows: result});
	});
};

module.exports.addRow = function(application, req, res){
	var doc = application.config.googleSpreadsheetConnection;
	//var spreadSheetModels = new application.app.models.SpreadSheetModels(doc); // local
	var spreadSheetModels = new application.models.SpreadSheetModels(doc);
	const aux = req.query.sensor_id.split("-")

	const gateway = aux[0]
	const sensor = aux[1]

	req.query.sensor_id = sensor
	console.log("Chamando checkTemp: ", gateway, req.query.temperatura)
	spreadSheetModels.checkTemp(gateway, Number(req.query.temperatura), function(error, mail_to){
		var transporter = application.config.mail
		//var mailModel = new application.app.models.mailModels(transporter) // local
		var mailModel = new application.models.mailModels(transporter)

		const from = "Prática IoT"
		const subject = "Problema com temperatura no sensor " + sensor + "!"
		const text = "Temperatura fora do padrão, valor atual: " + req.query.temperatura
		const mailOptions = {"from": from, "to": mail_to, "subject": subject, "text": text}
		
		mailModel.send(mailOptions, function(err, info){
			console.log("Erro mail: ",err)
		})
	});

	spreadSheetModels.addRow(gateway, req.query, function(error){
		//console.log("Insert Data:", req.query)
		res.redirect("/");
	});
};