function MailModels(transporter){
	this._transporter = transporter
}

MailModels.prototype.send = async function(mailOptions, callback) {
    /*
        mailOptions = {from: '...@gmail.com', to: '...@gmail.com', subject: '',	text: ""}
        callback(err, info)
    */
    await this._transporter.sendMail(mailOptions, callback)
}

module.exports = function(){
	return MailModels;
}
