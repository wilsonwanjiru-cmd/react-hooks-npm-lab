const handler = require('serve-handler');
const http = require('http');

const server = http.createServer((request, response) => {
  // You can customize config and middleware here if needed
  return handler(request, response);
});

server.listen(3000, () => {
  console.log('Running at http://localhost:3000');
});
