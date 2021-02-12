const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 3000 });

server.on('connection', ws => {
  ws.on('message', data => {
    const response = JSON.parse(data);

    sendMessage(response);
  });
  // ws.close();
});

function sendMessage(data) {
  server.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data.message);
    }
  });
}
