function SpreadSheetModels(doc){
	this._doc = doc;
}

SpreadSheetModels.prototype.getRows = async function(callback){
	const sheet = this._doc.sheetsByIndex[0]; //pega a página da planilha
	const rows = await sheet.getRows();
	callback(null, rows);
}

SpreadSheetModels.prototype.addRow = async function(row, callback){
	const sheet = this._doc.sheetsByIndex[0]; //pega a página da planilha
	await sheet.addRow(row);
	callback(null);
}


module.exports = function(){
	return SpreadSheetModels;
}
