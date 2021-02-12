import { setStatus, printMessage, sendMessage, getUser } from './helpers.js';

const webSocket = new WebSocket('ws://localhost:3000');
const $status = document.querySelector('.status');
const $messages = document.querySelector('.messages');
const $form = document.getElementById('form');
const $closeRoomBtn = document.querySelector('.close-room');

webSocket.onopen = () => {
  console.log('open');
  const data = {
    message: 'User has joined. Welcome to ChatCord!',
    user: {
      name: 'John Doe',
      avatar: '',
    },
    data: new Date(),
    event: 'joinRoom',
  }

  setStatus($status, 'Online');

  webSocket.send(JSON.stringify(data));
};

webSocket.onclose = () => setStatus($status, 'Offline');

webSocket.onmessage = (response) => {
  printMessage($messages, response.data);
};

$form.addEventListener('submit', event => {
  event.preventDefault();

  const message = event.target.elements.message.value;

  webSocket.send(sendMessage(message, getUser()));
});

$closeRoomBtn.addEventListener('click', () => {
  webSocket.close();
})
