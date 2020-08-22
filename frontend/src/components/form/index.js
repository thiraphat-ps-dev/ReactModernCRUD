import React, { useState, useEffect } from 'react';
import './form.scss';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { CountryDropdown } from 'react-country-region-selector';
import * as actions from '../../redux/actions/employee.action';
import { useDispatch, useSelector } from 'react-redux';

export default function () {
  const dispatch = useDispatch();
  let employeeReducer = useSelector(({ employeeReducer }) => employeeReducer);

  const intialState = {
    title: '',
    firstname: '',
    lastname: '',
    birthday: '',
    gender: '',
    mobilephone: '',
    citizenid: { num1: '', num2: '', num3: '', num4: '', num5: '' },
    passport: '',
    expectedsalary: '',
    isCheck: false,
  };
  const [employee, setEmployee] = useState(
    // employeeReducer.employee
    // ||
    intialState
  );
  const [phone, setPhone] = useState('');
  const [citizenid, setCitizenid] = useState({
    num1: '',
    num2: '',
    num3: '',
    num4: '',
    num5: '',
  });
  const [nationality, setNationality] = useState();

  return (
    <div>
      {/* <div>{JSON.stringify(employee)}</div> */}
      <form
        className="form-employee"
        onChange={() => {
          if (
            employee.firstname &&
            employee.lastname &&
            employee.birthday &&
            nationality &&
            phone &&
            employee.expectedsalary
          ) {
            document.querySelector('.error-msg').classList.remove('error');
          }
        }}
      >
        <div className="row-name">
          <div className="block-input">
            <label htmlFor="">
              Title :<sup>*</sup>
            </label>
            <select
              value={employee.title}
              onChange={(e) => {
                setEmployee({
                  ...employee,
                  title: e.target.value,
                });
              }}
            >
              <option value="Mr" defaultValue>
                Mr
              </option>
              <option value="Ms">Ms</option>
            </select>
          </div>
          <div className="block-input">
            <label htmlFor="">
              Firstname :<sup>*</sup>
            </label>
            <input
              className="firstname"
              type="text"
              value={employee.firstname}
              onChange={(e) => {
                document.querySelector('.firstname').classList.remove('error');
                setEmployee({
                  ...employee,
                  firstname: e.target.value,
                });
              }}
            />
          </div>
          <div className="block-input">
            <label htmlFor="">
              Lastname :<sup>*</sup>
            </label>
            <input
              className="lastname"
              type="text"
              value={employee.lastname}
              onChange={(e) => {
                document.querySelector('.lastname').classList.remove('error');
                setEmployee({
                  ...employee,
                  lastname: e.target.value,
                });
              }}
            />
          </div>
        </div>
        <div className="row-date">
          <div className="block-input">
            <label htmlFor="">
              Birthday :<sup>*</sup>
            </label>
            <input
              className="birthday"
              type="date"
              value={employee.birthday}
              onChange={(e) => {
                document.querySelector('.birthday').classList.remove('error');
                setEmployee({ ...employee, birthday: e.target.value });

                if (
                  employee.firstname &&
                  employee.lastname &&
                  employee.birthday &&
                  nationality &&
                  phone &&
                  employee.expectedsalary
                ) {
                  document
                    .querySelector('.error-msg')
                    .classList.remove('error');
                }
              }}
            />
          </div>

          <div className="block-input">
            <label htmlFor="">
              Nationality :<sup>*</sup>
            </label>
            <CountryDropdown
              className="nationality"
              style={{ padding: '0', width: '300px' }}
              defaultOptionLabel={'-- Please Select --'}
              value={nationality}
              onChange={(nationality) => {
                document
                  .querySelector('.nationality')
                  .classList.remove('error');
                console.log(nationality);
                setNationality(nationality);
                setEmployee({ ...employee, nationality: nationality });
              }}
            />
          </div>
        </div>
        <div className="row-citizenid">
          <div className="block-input">
            <label htmlFor="">CitizenID :</label>
            <input
              type="text"
              style={{ width: '10px' }}
              value={citizenid.num1}
              onChange={(e) => {
                setCitizenid({
                  ...citizenid,
                  num1:
                    e.target.value.replace(/[^0-9]+/g, '').length <= 1
                      ? e.target.value.replace(/[^0-9]+/g, '')
                      : citizenid.num1,
                });
              }}
            />{' '}
            -{' '}
            <input
              type="text"
              style={{ width: '40px' }}
              value={citizenid.num2}
              onChange={(e) => {
                setCitizenid({
                  ...citizenid,
                  num2:
                    e.target.value.replace(/[^0-9]+/g, '').length <= 4
                      ? e.target.value.replace(/[^0-9]+/g, '')
                      : citizenid.num2,
                });
              }}
            />{' '}
            -{' '}
            <input
              type="text"
              style={{ width: '50px' }}
              value={citizenid.num3}
              onChange={(e) => {
                setCitizenid({
                  ...citizenid,
                  num3:
                    e.target.value.replace(/[^0-9]+/g, '').length <= 5
                      ? e.target.value.replace(/[^0-9]+/g, '')
                      : citizenid.num3,
                });
              }}
            />{' '}
            -{' '}
            <input
              type="text"
              style={{ width: '20px' }}
              value={citizenid.num4}
              onChange={(e) => {
                setCitizenid({
                  ...citizenid,
                  num4:
                    e.target.value.replace(/[^0-9]+/g, '').length <= 2
                      ? e.target.value.replace(/[^0-9]+/g, '')
                      : citizenid.num4,
                });
              }}
            />{' '}
            -{' '}
            <input
              type="text"
              style={{ width: '10px' }}
              value={citizenid.num5}
              onChange={(e) => {
                setCitizenid({
                  ...citizenid,
                  num5:
                    e.target.value.replace(/[^0-9]+/g, '').length <= 1
                      ? e.target.value.replace(/[^0-9]+/g, '')
                      : citizenid.num5,
                });
                setEmployee({
                  ...employee,
                  citizenid: {
                    num1: citizenid.num1,
                    num2: citizenid.num2,
                    num3: citizenid.num3,
                    num4: citizenid.num4,
                    num5: citizenid.num5,
                  },
                });
              }}
            />
          </div>
        </div>
        <div className="row-gender">
          <div className="block-input">
            <label htmlFor="">Gender : </label>
          </div>
          <div className="block-input">
            <input
              type="checkbox"
              checked={employee.gender === 'male' ? true : false}
              onChange={() => {
                setEmployee({ ...employee, gender: 'male' });
              }}
            />
            <span>male</span>
          </div>

          <div className="block-input">
            <input
              type="checkbox"
              checked={employee.gender === 'female' ? true : false}
              onChange={() => {
                setEmployee({ ...employee, gender: 'female' });
              }}
            />
            <span>female</span>
          </div>

          <div className="block-input">
            <input
              type="checkbox"
              checked={employee.gender === 'unisex' ? true : false}
              onChange={() => {
                setEmployee({ ...employee, gender: 'unisex' });
              }}
            />
            <span>unisex</span>
          </div>
        </div>
        <div className="row-phone">
          <div className="block-input">
            <label htmlFor="">
              Mobile Phone :<sup>*</sup>
            </label>
            <PhoneInput
              className="phone-input"
              country={'th'}
              autoFormat
              masks={{ th: '...-...-....' }}
              value={phone}
              onChange={(phone) => {
                document
                  .querySelector('.react-tel-input')
                  .classList.remove('error');
                setPhone(phone);
                console.log(phone);
                setEmployee({ ...employee, mobilephone: phone });
              }}
            />
          </div>
        </div>
        <div className="row-passport">
          <div className="block-input">
            <label htmlFor="">Passport No :</label>
            <input
              type="text"
              className="passport"
              value={employee.passport}
              onChange={(e) => {
                setEmployee({
                  ...employee,
                  passport: e.target.value,
                });
              }}
            />
          </div>
        </div>
        <div className="row-sarary">
          <div className="block-input">
            <label htmlFor="">
              Expected Salary :<sup>*</sup>{' '}
            </label>
            <input
              type="text"
              className="expectedsalary"
              value={employee.expectedsalary}
              onChange={(e) => {
                document
                  .querySelector('.expectedsalary')
                  .classList.remove('error');
                setEmployee({
                  ...employee,
                  expectedsalary: e.target.value
                    .replace(/[^0-9]+/g, '')
                    .replace(/,/g, '')

                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ','),
                });
              }}
            />
            <label style={{ marginLeft: '5px' }}>THB</label>
          </div>
          <div className="block-input">
            <button
              type="button"
              onClick={() => {
                if (!employee.firstname) {
                  document.querySelector('.firstname').classList.add('error');
                }
                if (!employee.lastname) {
                  document.querySelector('.lastname').classList.add('error');
                }
                if (!employee.birthday) {
                  document.querySelector('.birthday').classList.add('error');
                }
                if (!nationality) {
                  document.querySelector('.nationality').classList.add('error');
                }
                if (phone.length < 10) {
                  document
                    .querySelector('.react-tel-input')
                    .classList.add('error');
                }
                if (!employee.expectedsalary) {
                  document
                    .querySelector('.expectedsalary')
                    .classList.add('error');
                }
                console.log(phone);
                if (
                  !employee.firstname ||
                  !employee.lastname ||
                  !employee.birthday ||
                  !nationality ||
                  phone.length < 10 ||
                  !employee.expectedsalary
                ) {
                  document.querySelector('.error-msg').classList.add('error');
                } else {
                  dispatch(actions.onAdd(employee));
                  dispatch(actions.onReset());
                  setPhone('');
                  setCitizenid({
                    num1: '',
                    num2: '',
                    num3: '',
                    num4: '',
                    num5: '',
                  });
                  setNationality('');
                  setEmployee(intialState);

                  console.log('Add Success');
                }
              }}
            >
              SUBMIT
            </button>
          </div>
        </div>
        <div className="row-error">
          <span className="error-msg">
            ! Please fill in the required information.
          </span>
        </div>
      </form>
    </div>
  );
}
