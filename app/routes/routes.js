module.exports = function(app, db) {
  const quoteRef = db.ref('quotes');
  const routes = {
    quote: '/quote'
  };

  // TODO = add [get] here
  app.get([routes.quote, routes.quote+'/:id'], (req, res) => {
    var _quoteRef = quoteRef;
    if (req.params.id !== undefined) {
      _quoteRef = quoteRef.child(req.params.id);
    }

    _quoteRef.once('value').then(function(snapshot) {
      if (snapshot.val() == null) {
        res.send({'error':'An error has occurred', '_error': 'No quote found with that ID'});
      } else {
        res.json(snapshot.val());
      }
    });
  });

  // TODO = add [post] here
  app.post(routes.quote, (req, res) => {
    var data = {};
    data.quote = req.body.text;
    data.author = req.body.author;

    quoteRef.push(data, function(err) {
      if (err) {
        res.send({'error':'An error has occurred', '_error': err});
      } else {
        res.json({ message: "Success: Quote created."});
      }
    });
  });

  // TODO = add [put] here
  app.put(routes.quote+'/:id', (req, res) => {
    var data = {};
    data.quote = req.body.text;
    data.author = req.body.author;

    quoteRef.child(req.params.id).update(data, function(err) {
      if (err) {
        res.send({'error':'An error has occurred', '_error': err});
      } else {
        res.json({ message: "Success: Quote updated."});
      }
    });
  });

  // TODO = add [delete] here
  app.delete(routes.quote+'/:id', (req, res) => {
    quoteRef.child(req.params.id).remove(function(err) {
      if (err) {
        res.send({'error':'An error has occurred', '_error': err});
      } else {
        res.json({ message: "Success: Quote deleted."});
      }
    });
  });
};
