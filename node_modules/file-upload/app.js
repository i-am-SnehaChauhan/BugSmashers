var formidable = require('formidable'),
    http = require('http'),
    util = require('util');

var server = http.createServer(function(req, res) {
  if (req.method.toLowerCase() == 'post') {
    // parse a file upload
    var form = new formidable.IncomingForm();

    form.parse(req, function(err, fields, files) {
      res.writeHead(200, {'content-type': 'text/plain'});
      res.write('received upload:\n\n');
      res.end(util.inspect({fields: fields, files: files}));
    });

    return;
  }
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end("up\n");
});

// Start the server or export the module
if (module.parent) {
  module.exports = server;
} else {
  var port = process.env.PORT || 3000;
  server.listen(port);
  console.log("Uploads : listening on port " + port);
}
