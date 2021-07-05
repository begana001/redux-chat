// TODO: add and export your own actions
const BASE_URL = 'https://wagon-chat.herokuapp.com/';

export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export const CREATE_MESSAGE = 'CREATE_MESSAGE';

export function fetchMessages(channel) {
  const url = `${BASE_URL}/${channel}/messages`;
  const promise = fetch(url).then(response => response.json());

  return {
    type: FETCH_MESSAGES,
    payload: promise
  }
}

export function createMessage(channel, author, content) {
  const url = `${BASE_URL}/${channel}/messages`;
  const body = { author, content };
  const promise = fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(response => response.json());

  return {
    type: CREATE_MESSAGE,
    payload: promise
  };
}
