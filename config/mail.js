const nodemailer = require("nodemailer");

const usuario = 'praticaiot2021.1@gmail.com'
const senha = 'Abc1234#'

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: usuario,
		pass: senha,
	},
});

console.log("Mail Transporter criado!");

module.exports = function(){
	return transporter;
}