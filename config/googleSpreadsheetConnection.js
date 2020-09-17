var { GoogleSpreadsheet } = require('google-spreadsheet');

const credentials = require('./credentials.json');
const sheetId = "1ICbfJqVS1Ar7TO926NLOhSFzBWptvTP0_J92dmTowKI";
const doc = new GoogleSpreadsheet(sheetId);


const accessSheet = async() => {
	await doc.useServiceAccountAuth(credentials);
	await doc.loadInfo();
	console.log("Rodando Access Sheet")
}

accessSheet();
console.log("Módulo de conexão com o Google Spreadsheet carregado!");

module.exports = function(){
	return doc;
}
