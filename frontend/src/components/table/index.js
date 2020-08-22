import React from 'react';
import './table.scss';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import * as actions from '../../redux/actions/employee.action';
export default function () {
  const dispatch = useDispatch();
  let employeeReducer = useSelector(({ employeeReducer }) => employeeReducer);
  return (
    <div>
      <div className="table-container">
        <div className="header">
          <div className="left">
            <div className="select-all">
              <input
                type="checkbox"
                name=""
                id=""
                checked={
                  !employeeReducer.employeelist.some(
                    (em) => em.isCheck === false
                  )
                }
              />
              <span> Select All</span>
            </div>
            <button>DELETE</button>
          </div>
          <div className="right">
            <div className="navigation-bar">
              <a href="#">PREV</a>
              {_.map(
                employeeReducer.employeelist.slice(
                  0,
                  employeeReducer.employeelist.length / 10
                ),
                (employee, index) => (
                  <a
                    key={employee}
                    onClick={() => {
                      dispatch(actions.onEdit(index + 1));
                    }}
                  >
                    {index + 1}
                  </a>
                )
              )}

              <a href="#">NEXT</a>
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
                      name=""
                      id=""
                      checked={employee.isCheck}
                      onClick={() => {
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
                    <a href="#" onClick={() => {}}>
                      EDIT
                    </a>{' '}
                    /{' '}
                    <a
                      href="#"
                      onClick={() => {
                        dispatch(actions.onDelete(index));
                      }}
                    >
                      DELETE
                    </a>
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
