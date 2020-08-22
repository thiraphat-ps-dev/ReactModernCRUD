import React from 'react';
import './table.scss';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import * as actions from '../../redux/actions/employee.action';
import Form from '../form/index';
export default function () {
  const dispatch = useDispatch();
  const employeeReducer = useSelector(({ employeeReducer }) => employeeReducer);

  // const result = employeeReducer.employeelist.map(function (el) {
  //   var o = Object.assign({}, el);
  //   o.isCheck = false;
  //   return o;
  // });

  // console.table(result);
  // console.log(
  //   employeeReducer.employeelist.some((em, index) => em.isCheck === false)
  // );
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
                    (em, index) => em.isCheck === false
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
              <a href="#">1</a>

              <a href="#">2</a>

              <a href="#">3</a>
              <a href="#">4</a>
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
            {_.map(employeeReducer.employeelist, (employee, index) => (
              <tr className={`${employee.isCheck ? 'active' : ''}`} key={index}>
                <td>
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    checked={employee.isCheck}
                    onClick={() => {
                      console.log('ckicj');
                      const newArr = (employeeReducer.employeelist[
                        index
                      ].isCheck = !employee.isCheck);
                      console.table(employeeReducer.employeelist);

                      dispatch(actions.onUpdate(employeeReducer.employeelist));
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
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
