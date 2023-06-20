import { ADD_RESULT } from "../actions";

const INIT = {
  hits: 0,
  wrong: 0,
};

const result = (state = INIT, action) => {
  switch (action.type) {
    case ADD_RESULT:
      return {
        ...state,
        hits: action.hits,
        wrong: action.wrong,
      };
    default:
      return state;
  }
};

export default result;
