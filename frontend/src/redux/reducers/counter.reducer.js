import { INCREMENT, DECREMENT, INCREMENT_IF_ODD, ADD } from '../actionTypes';

const initialState = {
  count: 0,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case ADD:
      return { ...state, count: state.count + payload };
    default:
      return state;
  }
};
