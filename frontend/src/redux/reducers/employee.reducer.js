import {
  ADDEM,
  UPDATEEM,
  DELETEEM,
  SETSELECTEM,
  SETSELECTEMALL,
  SETCURRENTPAGE,
  RESETEMPLOYEE,
  EDITEMLIST,
} from '../actionTypes';

const initialState = {
  employeelist: [
    {
      title: '',
      firstname: 'user1',
      lastname: 'Putson',
      birthday: '2020-08-20',
      gender: 'male',
      mobilephone: '660815537648',
      citizenid: {
        num1: '1',
        num2: '2222',
        num3: '22222',
        num4: '22',
        num5: '2',
      },
      passport: '11212312121',
      expectedsalary: '25,000',
      isCheck: false,
      nationality: 'Thailand',
    },
    {
      title: '',
      firstname: 'user2',
      lastname: 'Putson',
      birthday: '2020-08-20',
      gender: 'male',
      mobilephone: '662432432432',
      citizenid: {
        num1: '1',
        num2: '2222',
        num3: '22222',
        num4: '22',
        num5: '2',
      },
      passport: '11212312121',
      expectedsalary: '25,000',
      isCheck: false,
      nationality: 'Albania',
    },
    {
      title: '',
      firstname: 'user3',
      lastname: 'adsad',
      birthday: '2020-08-11',
      gender: 'male',
      mobilephone: '662343243243',
      citizenid: {
        num1: '3',
        num2: '2343',
        num3: '24343',
        num4: '32',
        num5: '3',
      },
      passport: '234234342',
      expectedsalary: '4,234,324,324',
      isCheck: false,
      nationality: 'Algeria',
    },
    {
      title: '',
      firstname: 'user4',
      lastname: 'asdasdas',
      birthday: '2020-08-06',
      gender: 'male',
      mobilephone: '663243243243',
      citizenid: {
        num1: '2',
        num2: '2343',
        num3: '42343',
        num4: '43',
        num5: '4',
      },
      passport: '234234324',
      expectedsalary: '23,432,423,423,432,432',
      isCheck: false,
      nationality: 'American Samoa',
    },
    {
      title: '',
      firstname: 'user5',
      lastname: 'sdfsdf',
      birthday: '2020-08-04',
      gender: '',
      mobilephone: '662342342343',
      citizenid: { num1: '', num2: '', num3: '', num4: '', num5: '' },
      passport: '',
      expectedsalary: '234,234,324',
      isCheck: false,
      nationality: 'American Samoa',
    },
    {
      title: '',
      firstname: 'user6',
      lastname: 'sdfsdf',
      birthday: '2020-08-04',
      gender: '',
      mobilephone: '662342342343',
      citizenid: { num1: '', num2: '', num3: '', num4: '', num5: '' },
      passport: '',
      expectedsalary: '234,234,324',
      isCheck: false,
      nationality: 'American Samoa',
    },
    {
      title: '',
      firstname: 'user7',
      lastname: 'sdfsdf',
      birthday: '2020-08-04',
      gender: '',
      mobilephone: '662342342343',
      citizenid: { num1: '', num2: '', num3: '', num4: '', num5: '' },
      passport: '',
      expectedsalary: '234,234,324',
      isCheck: false,
      nationality: 'American Samoa',
    },
    {
      title: '',
      firstname: 'user8',
      lastname: 'sdfsdf',
      birthday: '2020-08-04',
      gender: '',
      mobilephone: '662342342343',
      citizenid: { num1: '', num2: '', num3: '', num4: '', num5: '' },
      passport: '',
      expectedsalary: '234,234,324',
      isCheck: false,
      nationality: 'American Samoa',
    },
    {
      title: '',
      firstname: 'user9',
      lastname: 'sdfsdf',
      birthday: '2020-08-04',
      gender: '',
      mobilephone: '662342342343',
      citizenid: { num1: '', num2: '', num3: '', num4: '', num5: '' },
      passport: '',
      expectedsalary: '234,234,324',
      isCheck: false,
      nationality: 'American Samoa',
    },
    {
      title: '',
      firstname: 'user10',
      lastname: 'sdfsdf',
      birthday: '2020-08-04',
      gender: '',
      mobilephone: '662342342343',
      citizenid: { num1: '', num2: '', num3: '', num4: '', num5: '' },
      passport: '',
      expectedsalary: '234,234,324',
      isCheck: false,
      nationality: 'American Samoa',
    },
    {
      title: '',
      firstname: 'user11',
      lastname: 'Putson',
      birthday: '2020-08-20',
      gender: 'male',
      mobilephone: '660815537648',
      citizenid: {
        num1: '1',
        num2: '2222',
        num3: '22222',
        num4: '22',
        num5: '2',
      },
      passport: '11212312121',
      expectedsalary: '25,000',
      isCheck: false,
      nationality: 'Thailand',
    },
    {
      title: '',
      firstname: 'user12',
      lastname: 'Putson',
      birthday: '2020-08-20',
      gender: 'male',
      mobilephone: '662432432432',
      citizenid: {
        num1: '1',
        num2: '2222',
        num3: '22222',
        num4: '22',
        num5: '2',
      },
      passport: '11212312121',
      expectedsalary: '25,000',
      isCheck: false,
      nationality: 'Albania',
    },
    {
      title: '',
      firstname: 'user13',
      lastname: 'adsad',
      birthday: '2020-08-11',
      gender: 'male',
      mobilephone: '662343243243',
      citizenid: {
        num1: '3',
        num2: '2343',
        num3: '24343',
        num4: '32',
        num5: '3',
      },
      passport: '234234342',
      expectedsalary: '4,234,324,324',
      isCheck: false,
      nationality: 'Algeria',
    },
    {
      title: '',
      firstname: 'user14',
      lastname: 'asdasdas',
      birthday: '2020-08-06',
      gender: 'male',
      mobilephone: '663243243243',
      citizenid: {
        num1: '2',
        num2: '2343',
        num3: '42343',
        num4: '43',
        num5: '4',
      },
      passport: '234234324',
      expectedsalary: '23,432,423,423,432,432',
      isCheck: false,
      nationality: 'American Samoa',
    },
    {
      title: '',
      firstname: 'user15',
      lastname: 'sdfsdf',
      birthday: '2020-08-04',
      gender: '',
      mobilephone: '662342342343',
      citizenid: { num1: '', num2: '', num3: '', num4: '', num5: '' },
      passport: '',
      expectedsalary: '234,234,324',
      isCheck: false,
      nationality: 'American Samoa',
    },
    {
      title: '',
      firstname: 'user16',
      lastname: 'sdfsdf',
      birthday: '2020-08-04',
      gender: '',
      mobilephone: '662342342343',
      citizenid: { num1: '', num2: '', num3: '', num4: '', num5: '' },
      passport: '',
      expectedsalary: '234,234,324',
      isCheck: false,
      nationality: 'American Samoa',
    },
    {
      title: '',
      firstname: 'user17',
      lastname: 'sdfsdf',
      birthday: '2020-08-04',
      gender: '',
      mobilephone: '662342342343',
      citizenid: { num1: '', num2: '', num3: '', num4: '', num5: '' },
      passport: '',
      expectedsalary: '234,234,324',
      isCheck: false,
      nationality: 'American Samoa',
    },
    {
      title: '',
      firstname: 'user18',
      lastname: 'sdfsdf',
      birthday: '2020-08-04',
      gender: '',
      mobilephone: '662342342343',
      citizenid: { num1: '', num2: '', num3: '', num4: '', num5: '' },
      passport: '',
      expectedsalary: '234,234,324',
      isCheck: false,
      nationality: 'American Samoa',
    },
    {
      title: '',
      firstname: 'user19',
      lastname: 'sdfsdf',
      birthday: '2020-08-04',
      gender: '',
      mobilephone: '662342342343',
      citizenid: { num1: '', num2: '', num3: '', num4: '', num5: '' },
      passport: '',
      expectedsalary: '234,234,324',
      isCheck: false,
      nationality: 'American Samoa',
    },
    {
      title: '',
      firstname: 'user20',
      lastname: 'sdfsdf',
      birthday: '2020-08-04',
      gender: '',
      mobilephone: '662342342343',
      citizenid: { num1: '', num2: '', num3: '', num4: '', num5: '' },
      passport: '',
      expectedsalary: '234,234,324',
      isCheck: false,
      nationality: 'American Samoa',
    },
    {
      title: '',
      firstname: 'user21',
      lastname: 'sdfsdf',
      birthday: '2020-08-04',
      gender: '',
      mobilephone: '662342342343',
      citizenid: { num1: '', num2: '', num3: '', num4: '', num5: '' },
      passport: '',
      expectedsalary: '234,234,324',
      isCheck: false,
      nationality: 'American Samoa',
    },
  ],
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
  pagination: {
    curentpage: 1,
  },
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADDEM:
      return { ...state, employeelist: state.employeelist.concat(payload) };
    case UPDATEEM:
      return { ...state, employee: payload };
    case EDITEMLIST:
      return {
        ...state,
        employeelist: payload,
      };
    case DELETEEM:
      return {
        ...state,
        employeelist: state.employeelist.filter(
          (em, index) => index !== payload
        ),
      };

    case SETSELECTEM:
      return {
        ...state,
        employeelist: payload,
      };
    case SETSELECTEMALL:
      return {
        ...state,
        employeelist: payload,
      };

    case SETCURRENTPAGE:
      return {
        ...state,
        curentpage: payload,
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
