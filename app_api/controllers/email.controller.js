const Email = require('keystone-email');

module.exports.sendEmail = (req, res) => {
	console.log(req.body);
	if (req.body.email || req.body.message) {
		new Email('templates/views/emails/contact-us.pug', {
			transport: 'mailgun'
		}).send({
			firstname: (req.body.firstname) ? req.body.firstname : 'Not Included',
			lastname: (req.body.lastname) ? req.body.lastname : 'Not included',
			phonenumber: (req.body.phonenumber) ? req.body.phonenumber : 'Not Included',
			message: (req.body.message) ? req.body.message : 'Not Included',
			subject: (req.body.subject) ? req.body.subject : 'Not Included',
			email: (req.body.email) ? req.body.email : 'Not Included'
		}, {
			apiKey: process.env.mailgunapikey,
			domain: process.env.mailgunsandbox,
			to: (req.body.section === 'Contact-us') ? 'mochunkstv@gmail.com' : 'dilemmas.mochunks@gmail.com',
			from: {
				name: 'Mochunks',
				email: 'hello@mochunks.com',
			},
			subject: req.body.section,
		}, function (err, result) {
			if (err) {
				// TODO Log errors
				console.log(err);
				return res.sendStatus(500);
			} else {
				return res.sendStatus(200);
			}
		});
	} else {
		return res.json({message: 'Missing information'}).status(404);
	}
};



