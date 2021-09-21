function SpreadSheetModels(doc){
	this._doc = doc;
}

SpreadSheetModels.prototype.getRows = async function(callback){
	const config_sheet = this._doc.sheetsByTitle["config"]; // pega a página da planilha
	const rows = await config_sheet.getRows();
	callback(null, rows);
}

SpreadSheetModels.prototype.addRow = async function(gateway_id, row, callback){
	let sheet = this._doc.sheetsByTitle[gateway_id] // pega a página da planilha
	if (sheet == undefined) {
		sheet = await this._doc.addSheet({title: gateway_id})
		
		let array = []
		for (let i in row) {array.push(i)}
		sheet.setHeaderRow(array)

		//const config_sheet = this._doc.sheetsByTitle["config"]
		//await config_sheet.addRow({"gateway": gateway_id, "email": ""})
	}
	await sheet.addRow(row);
	callback(null);
}

SpreadSheetModels.prototype.checkTemp = async function(gateway_id, temp, callback){
	let config_sheet = this._doc.sheetsByTitle["config"] // pega a página da planilha
	const rows = await config_sheet.getRows();

	for (var i = 0; i < rows.length; i++) {
		if (rows[i].gateway == gateway_id) {
			let temp_ctrl = rows[i].temperatura_controle.split(";")
			const t0 = Number(temp_ctrl[0])
			const t1 = Number(temp_ctrl[1])
			console.log(t0, temp, t1)

			if (t0 > temp || temp > t1) {
				callback(null, rows[i].email);
				return
			}
		}
	}
}

module.exports = function(){
	return SpreadSheetModels;
}
