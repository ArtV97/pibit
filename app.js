var app = require("./config/server");

let port = process.env.PORT;
if (port == null || port == "") {
	port = 3000;
}

app.listen(port, function(){
	console.log("Servidor ON");
});