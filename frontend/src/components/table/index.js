import React from 'react';
import './table.scss';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import * as actions from '../../redux/actions/employee.action';

export default function () {
  const dispatch = useDispatch();
  const employeeReducer = useSelector(({ employeeReducer }) => employeeReducer);

  return (
    <div>
      <div className="table-container">
        <div className="header">
          <div className="left">
            <div className="select-all">
              <input
                type="checkbox"
                checked={
                  !employeeReducer.employeelist.some(
                    (em) => em.isCheck === false
                  )
                }
                onChange={() => {
                  const result = employeeReducer.employeelist.map(function (
                    el
                  ) {
                    var o = Object.assign({}, el);
                    o.isCheck = !employeeReducer.employeelist[0].isCheck;
                    return o;
                  });
                  dispatch(actions.onCheckall(result));
                }}
              />
              <span> Select All</span>
            </div>
            <button>DELETE</button>
          </div>
          <div className="right">
            <div className="navigation-bar">
              <button
                onClick={() => {
                  if (employeeReducer.curentpage !== 1) {
                    dispatch(actions.onEdit(employeeReducer.curentpage - 1));
                  }
                }}
              >
                PREV
              </button>

              {Math.ceil(employeeReducer.employeelist.length / 10) === 0 ? (
                <button
                  onClick={() => {
                    dispatch(actions.onEdit(1));
                  }}
                >
                  1
                </button>
              ) : null}

              {_.map(
                employeeReducer.employeelist.slice(
                  0,
                  Math.ceil(employeeReducer.employeelist.length / 10)
                ),
                (employee, index) => (
                  <button
                    key={employee}
                    onClick={() => {
                      dispatch(actions.onEdit(index + 1));
                    }}
                  >
                    {index + 1}
                  </button>
                )
              )}
              <button
                onClick={() => {
                  if (
                    employeeReducer.curentpage <
                    Math.ceil(employeeReducer.employeelist.length / 10)
                  ) {
                    dispatch(actions.onEdit(employeeReducer.curentpage + 1));
                  }
                }}
              >
                NEXT
              </button>
            </div>
          </div>
        </div>
        <table className="table-employee">
          <thead>
            <tr>
              <th></th>
              <th>NAME</th>
              <th>GENDER</th>
              <th>MOBILE PHONE</th>
              <th>NATIONALITY</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {_.map(
              employeeReducer.employeelist.slice(
                (employeeReducer.curentpage - 1) * 10,
                employeeReducer.curentpage * 10
              ),
              (employee, index) => (
                <tr
                  className={`${employee.isCheck ? 'active' : ''}`}
                  key={index}
                >
                  <td>
                    <input
                      type="checkbox"
                      checked={employee.isCheck}
                      onChange={() => {
                        console.log('ckicj');
                        console.table(employeeReducer.employeelist);

                        dispatch(
                          actions.onUpdate(employeeReducer.employeelist)
                        );
                      }}
                    />
                  </td>
                  <td>{`${employee.firstname}  ${employee.lastname}`}</td>
                  <td>{employee.gender || '-'}</td>
                  <td>+{employee.mobilephone}</td>
                  <td>{employee.nationality}</td>
                  <td>
                    <a href={`/edit/${index}`} onClick={() => {}}>
                      EDIT
                    </a>
                    /
                    <button
                      onClick={() => {
                        dispatch(actions.onDelete(index));
                      }}
                    >
                      DELETE
                    </button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
