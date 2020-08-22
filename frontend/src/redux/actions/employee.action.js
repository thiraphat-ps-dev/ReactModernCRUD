import {
  ADDEM,
  DELETEEM,
  UPDATEEM,
  CHECK,
  CHECKALL,
  EDIT,
  RESETEMPLOYEE,
} from '../actionTypes';

const setAddEmployeelistAction = (value) => ({
  type: ADDEM,
  payload: value,
});

const setUpdateEmployeelistAction = (value) => ({
  type: UPDATEEM,
  payload: value,
});

const setDeleteEmployeelistAction = (index) => ({
  type: DELETEEM,
  payload: index,
});
const setCheckEmployeelistAction = (index) => ({
  type: CHECK,
  payload: index,
});
const setCheckAllEmployeelistAction = (index) => ({
  type: CHECKALL,
  payload: index,
});

const setEditEmployeeAction = (index) => ({
  type: EDIT,
  payload: index,
});

const setResetEmployeeAction = () => ({
  type: RESETEMPLOYEE,
});

export const onAdd = (value) => {
  return (dispatch) => {
    dispatch(setAddEmployeelistAction(value));
  };
};
export const onUpdate = (value) => {
  return (dispatch) => {
    dispatch(setUpdateEmployeelistAction(value));
  };
};

export const onDelete = (value) => {
  return (dispatch) => {
    dispatch(setDeleteEmployeelistAction(value));
  };
};

export const onCheck = (value) => {
  return (dispatch) => {
    dispatch(setCheckEmployeelistAction(value));
  };
};

export const onCheckall = (value) => {
  return (dispatch) => {
    dispatch(setCheckAllEmployeelistAction(value));
  };
};

export const onEdit = (value) => {
  return (dispatch) => {
    dispatch(setEditEmployeeAction(value));
  };
};

export const onReset = () => {
  return (dispatch) => {
    dispatch(setResetEmployeeAction());
  };
};
