export function setStatus(element, value) {
  element.innerHTML = value;
}

export function printMessage(element, message) {
  element.insertAdjacentHTML('beforeend', `
    <div class="message">${message}</div>
  `)
}

export function sendMessage(message = '', user, event = 'onMessage') {
  return JSON.stringify({
    message,
    user,
    data: new Date(),
    event
  });
}

export function getUser() {
  return {
    name: 'John Doe',
    avatar: '',
  };
}
