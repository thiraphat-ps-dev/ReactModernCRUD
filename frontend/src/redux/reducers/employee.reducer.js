import {
  ADDEM,
  UPDATEEM,
  DELETEEM,
  CHECK,
  CHECKALL,
  EDIT,
  RESETEMPLOYEE,
} from '../actionTypes';

const initialState = {
  employeelist: [],
  employee: {
    title: '',
    firstname: '',
    lastname: '',
    birthday: '',
    gender: '',
    mobilephone: '',
    passport: '',
    expectedsalary: '',
    isCheck: false,
    citizenid: {
      num1: '',
      num2: '',
      num3: '',
      num4: '',
      num5: '',
    },
  },
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADDEM:
      return { ...state, employeelist: state.employeelist.concat(payload) };
    case UPDATEEM:
      return { ...state, employee: payload };
    case DELETEEM:
      return {
        ...state,
        employeelist: state.employeelist.filter(
          (em, index) => index != payload
        ),
      };
    case CHECK:
      return {
        ...state,
        employeelist: (state.employeelist[payload].isCheck =
          state.employeelist[payload].isCheck),
      };
    case CHECKALL:
      return {
        ...state,
        employeelist: state.employeelist.filter(
          (em, index) => index != payload
        ),
      };

    case EDIT:
      return {
        ...state,
        employee: state.employeelist[payload],
      };
    case RESETEMPLOYEE:
      return {
        ...state,
        employee: initialState.employee,
      };
    default:
      return state;
  }
};
