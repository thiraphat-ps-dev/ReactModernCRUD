import React from 'react';
import './table.scss';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import * as actions from '../../redux/actions/employee.action';
import { Route, NavLink, BrowserRouter } from 'react-router-dom';

export default function () {
  const dispatch = useDispatch();
  const employeeReducer = useSelector(({ employeeReducer }) => employeeReducer);

  console.log(employeeReducer.employeelist.sort());
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
                    if (
                      !employeeReducer.employeelist.some(
                        (em) => em.isCheck === false
                      )
                    ) {
                      o.isCheck = false;
                    } else {
                      o.isCheck = true;
                    }

                    return o;
                  });
                  dispatch(actions.onCheckall(result));
                }}
              />
              <span> Select All</span>
            </div>
            <button
              onClick={() => {
                dispatch(
                  actions.onEditEmList(
                    employeeReducer.employeelist.filter(
                      (em, index) => em.isCheck !== true
                    )
                  )
                );
              }}
            >
              DELETE
            </button>
          </div>
          <div className="right">
            <div className="navigation-bar">
              <button
                onClick={() => {
                  if (employeeReducer.curentpage !== 1) {
                    dispatch(
                      actions.onSetCurrentPage(employeeReducer.curentpage - 1)
                    );
                  }
                }}
              >
                PREV
              </button>

              {Math.ceil(employeeReducer.employeelist.length / 10) === 0 ? (
                <button
                  onClick={() => {
                    dispatch(actions.onSetCurrentPage(1));
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
                      dispatch(actions.onSetCurrentPage(index + 1));
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
                    dispatch(
                      actions.onSetCurrentPage(employeeReducer.curentpage + 1)
                    );
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
          {/* {JSON.stringify(employeeReducer.employeelist.reverse())} */}
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
                        employeeReducer.employeelist[
                          employeeReducer.employeelist.findIndex(
                            (sum) => sum.firstname === employee.firstname
                          )
                        ].isCheck = !employeeReducer.employeelist[
                          employeeReducer.employeelist.findIndex(
                            (sum) => sum.firstname === employee.firstname
                          )
                        ].isCheck;
                        dispatch(actions.onCheck(employeeReducer.employeelist));
                      }}
                    />
                  </td>
                  <td>{`${employee.firstname}  ${employee.lastname}`}</td>
                  <td>{employee.gender || '-'}</td>
                  <td>+{employee.mobilephone}</td>
                  <td>{employee.nationality}</td>
                  <td>
                    <NavLink
                      style={{ backgroundColor: 'transparent' }}
                      to={`/edit/${employeeReducer.employeelist.findIndex(
                        (sum) => sum.firstname === employee.firstname
                      )}`}
                    >
                      <button
                        onClick={() => {
                          dispatch(actions.onUpdate(employee));
                        }}
                      >
                        EDIT
                      </button>
                    </NavLink>
                    /
                    <button
                      onClick={() => {
                        dispatch(actions.onDelete(employeeReducer.employeelist.findIndex(
                          (sum) => sum.firstname === employee.firstname
                        )));
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
