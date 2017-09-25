module.exports = function(app, db) {
	const quoteRef = db.ref('quote');
	const routes = {
		quote: '/quote'
	};

	// TODO = add [get] here
	app.get(routes.quote+'/:id', (req, res) => {
	});

	// TODO = add [post] here
	app.post(routes.quote, (req, res) => {
	});

	app.put(routes.quote+'/:id', (req, res) => {

		var user = {};
		user.quote = req.body.user.quote;
		user.author = req.body.user.author;

		quoteRef.push({
			quote: user.quote,
			author: user.author
		}, function(err) {
			if (err) {
				res.send({'error':'An error has occurred', '_error': err});
			} else {
				res.json({ message: "Success: Quote created."});
			}
		});
	});

	// TODO = add [delete] here
	app.delete(routes.quote+'/:id', (req, res) => {
	});
};
