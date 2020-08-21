import React, { useState } from 'react';
import './form.scss';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from 'react-country-region-selector';

export default function () {
  const intialState = {
    title: '',
    firstname: '',
    lastname: '',
    birthday: '',
    nationality: '',
    // citizenid: {},
    gender: '',
    mobilephone: '',
    passport: '',
    expectedsalary: '',
  };
  const [employee, setEmployee] = useState(intialState);
  const [employeeList, setEmployeeList] = useState([]);
  const [phone, setPhone] = useState();
  const [citizenid, setCitizenid] = useState({
    num1: '',
    num2: '',
    num3: '',
    num4: '',
    num5: '',
  });

  return (
    <div>
      <form className="form-employee">
        <div className="row-name">
          <div className="block-input">
            <label htmlFor="">
              Title :<sup>*</sup>
            </label>
            <select name="" id="">
              <option value="Mr" selected>
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
              type="text"
              value={employee.firstname}
              onChange={(e) => {
                setEmployee({
                  ...employee,
                  firstname: e.target.value.replace(/[^a-zA-Z]+/g, ''),
                });
              }}
            />
          </div>
          <div className="block-input">
            <label htmlFor="">
              Lastname :<sup>*</sup>
            </label>
            <input
              type="text"
              value={employee.lastname}
              onChange={(e) => {
                setEmployee({
                  ...employee,
                  lastname: e.target.value.replace(/[^a-zA-Z]+/g, ''),
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
              type="date"
              name=""
              id=""
              value={employee.birthday}
              onChange={(e) => {
                setEmployee({ ...employee, birthday: e.target.value });
              }}
            />
          </div>

          <div className="block-input">
            <label htmlFor="">
              Nationality :<sup>*</sup>
            </label>
            <CountryDropdown
              style={{ padding: '0', width: '300px' }}
              defaultOptionLabel={'-- Please Select --'}
              value={employee.nationality}
              onChange={(e) => {
                setEmployee({ ...employee, nationality: e.target.value });
              }}
            />
          </div>
        </div>
        <div className="row-citizenid">
          <div className="block-input">
            <label htmlFor="">CitizenID :</label>
            <input
              type="text"
              style={{ width: '100px' }}
              value={citizenid.num1}
              onChange={(e) => {
                setCitizenid({
                  ...citizenid,
                  num1:
                    e.target.value.replace(/[^0-9]+/g, '').length <= 1
                      ? e.target.value.replace(/[^0-9]+/g, '').length <= 1
                      : citizenid.num1,
                });
              }}
              // onChange={(e) => {
              //   setEmployee({
              //     ...employee,
              //     citizenid: [
              //       ...employee.citizenid,
              //       e.target.value.replace(/[^0-9]+/g, '').length <= 1
              //         ? e.target.value.replace(/[^0-9]+/g, '').length
              //         : employee.citizenid[0],
              //     ],
              //   });
              // }}
            />{' '}
            -{' '}
            <input
              type="text"
              style={{ width: '80px' }}
              value={citizenid}
              onChange={(e) => {
                setCitizenid({
                  ...citizenid,
                  citizenid: [e.target.value],
                });
              }}
            />{' '}
            -{' '}
            <input
              type="text"
              style={{ width: '80px' }}
              // value={employee.citizenid[2]}
              // onChange={(e) => {
              //   setEmployee({
              //     ...employee,
              //     citizenid: [
              //       ...employee.citizenid[2],
              //       e.target.value.replace(/[^0-9]+/g, '').length <= 4
              //         ? e.target.value.replace(/[^0-9]+/g, '').length
              //         : employee.citizenid[2],
              //     ],
              //   });
              // }}
            />{' '}
            - <input type="text" style={{ width: '30px' }} /> -{' '}
            <input type="text" style={{ width: '10px' }} />
          </div>
        </div>
        <div className="row-gender">
          <div className="block-input">
            <label htmlFor="">Gender : </label>
          </div>
          <div className="block-input">
            <input type="checkbox" name="" id="" />
            <span>male</span>
          </div>

          <div className="block-input">
            <input type="checkbox" name="" id="" />
            <span>female</span>
          </div>

          <div className="block-input">
            <input type="checkbox" name="" id="" />
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
                setPhone((phone: phone));
                console.log(phone);
                setEmployee({ ...employee, mobilephone: phone });
              }}
            />
          </div>
        </div>
        <div className="row-passport">
          <div className="block-input">
            <label htmlFor="">Passport No :</label>
            <input type="text" />
          </div>
        </div>
        <div className="row-sarary">
          <div className="block-input">
            <label htmlFor="">
              Expected Salary :<sup>*</sup>{' '}
            </label>
            <input type="text" />
            <label style={{ marginLeft: '5px' }}>THB</label>
          </div>
          <div className="block-input">
            <button
              type="button"
              onClick={() => {
                console.table(employee);
              }}
            >
              SUBMIT
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
