import { ADD_DATA } from '../actions';

const INIT = {
  number: '20',
  flags: '',
}

const data = (state = INIT, action) => {
  switch (action.type) {
    case ADD_DATA:
      return {
        ...state,
        number: action.number,
        flags: action.flags,
      };
      default:
        return state;
  }
}

export default data;
