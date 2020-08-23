import React from 'react';
import './table.scss';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import * as actions from '../../redux/actions/employee.action';
import { Route, NavLink, BrowserRouter } from 'react-router-dom';

export default function () {
  const dispatch = useDispatch();
  const employeeReducer = useSelector(({ employeeReducer }) => employeeReducer);

  const deleteEmployee = (firstname) => {
    dispatch(
      actions.onDelete(
        employeeReducer.employeelist.findIndex(
          (sum) => sum.firstname === firstname
        )
      )
    );
  };

  const selectAll = () => {
    const result = employeeReducer.employeelist.map(function (el) {
      var o = Object.assign({}, el);
      if (!employeeReducer.employeelist.some((em) => em.isCheck === false)) {
        o.isCheck = false;
      } else {
        o.isCheck = true;
      }

      return o;
    });
    dispatch(actions.onCheckall(result));
  };

  const deleteSelected = () => {
    dispatch(
      actions.onEditEmList(
        employeeReducer.employeelist.filter((em, index) => em.isCheck !== true)
      )
    );
  };

  const onPrev = () => {
    if (employeeReducer.curentpage !== 1) {
      dispatch(actions.onSetCurrentPage(employeeReducer.curentpage - 1));
    }
  };

  const onPageChange = (page) => {
    dispatch(actions.onSetCurrentPage(page));
  };

  const onNext = () => {
    if (
      employeeReducer.curentpage <
      Math.ceil(employeeReducer.employeelist.length / 10)
    ) {
      dispatch(actions.onSetCurrentPage(employeeReducer.curentpage + 1));
    }
  };

  const checkSelect = () => {
    return !employeeReducer.employeelist.some((em) => em.isCheck === false);
  };

  const numPage = () => {
    return Math.ceil(employeeReducer.employeelist.length / 10);
  };
  const start = () => {
    return (employeeReducer.curentpage - 1) * 10;
  };
  const end = () => {
    return employeeReducer.curentpage * 10;
  };
  const checkRow = (firstname) => {
    employeeReducer.employeelist[
      employeeReducer.employeelist.findIndex(
        (sum) => sum.firstname === firstname
      )
    ].isCheck = !employeeReducer.employeelist[
      employeeReducer.employeelist.findIndex(
        (sum) => sum.firstname === firstname
      )
    ].isCheck;
    dispatch(actions.onCheck(employeeReducer.employeelist));
  };

  return (
    <div>
      <div className="table-container">
        <div className="header">
          <div className="left">
            <div className="select-all">
              <input
                type="checkbox"
                checked={checkSelect()}
                onChange={() => {
                  selectAll();
                }}
              />
              <span> Select All</span>
            </div>
            <button
              onClick={() => {
                deleteSelected();
              }}
            >
              DELETE
            </button>
          </div>
          <div className="right">
            <div className="navigation-bar">
              <button
                onClick={() => {
                  onPrev();
                }}
              >
                PREV
              </button>

              {numPage() === 0 ? (
                <button
                  onClick={() => {
                    dispatch(actions.onSetCurrentPage(1));
                  }}
                >
                  1
                </button>
              ) : null}

              {_.map(
                employeeReducer.employeelist.slice(0, numPage()),
                (employee, index) => (
                  <button
                    key={employee}
                    onClick={() => {
                      onPageChange(index + 1);
                    }}
                  >
                    {index + 1}
                  </button>
                )
              )}
              <button
                onClick={() => {
                  onNext();
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
              {_.map(
                ['', 'NAME', 'GENDER', 'MOBILE PHONE', 'NATIONALITY', 'ACTION'],
                (item, index) => (
                  <th key={index}>{item}</th>
                )
              )}
            </tr>
          </thead>

          <tbody>
            {_.map(
              employeeReducer.employeelist.slice(start(), end()),
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
                        checkRow(employee.firstname);
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
                        deleteEmployee(employee.firstname);
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
