var app = require("./config/server");

let port = process.env.PORT;
if (port == null || port == "") {
	port = 3000;
}

app.listen(port, function(){
	console.log("Servidor ON");
});
const usuario = 'praticaiot2021.1@gmail.com'
const senha = 'Abc1234#'

const nodemailer = require("nodemailer");
const { callbackPromise } = require("nodemailer/lib/shared");

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: usuario,
		pass: senha,
	},
});

const mailOptions = {
	from: 'Prática IOT',
	to: 'erikymarciano@gmail.com',
	subject: 'Problema com a temperatura!!!',
	text: "Ocorreu um problema com o local x, favor verificar."
};


function printando(err, info){
	console.log('enviei');
	console.log(err)
	console.log(info)
}

transporter.sendMail(mailOptions, printando);
