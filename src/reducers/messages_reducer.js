import { FETCH_MESSAGES, CREATE_MESSAGE } from '../actions';

export default function(state = null, action) {
  switch(action.type) {
    case FETCH_MESSAGES:
      return action.payload.messages
    default:
      return state;
  }

  switch(action.type) {
    case CREATE_MESSAGE:
      return action.payload.messages
    default:
      return state;
  }
}
