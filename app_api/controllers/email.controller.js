const API_KEY = 'YOUR_API_KEY';
const DOMAIN = 'YOUR_DOMAIN_NAME';
const MAILGUN = require('mailgun-js')({apiKey: API_KEY, domain: DOMAIN});


module.exports.sendEmail = (req, res) => {
	const data = {
		from: 'ojomowa@yahoo.co.uk',
		to: req.params.email + ', YOU@YOUR_DOMAIN_NAME',
		subject: req.params.subject,
		text: req.params.message
	};

	MAILGUN.messages().send(data, function (err, body) {
		console.log(body);
	});

};
