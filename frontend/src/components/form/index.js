import React from 'react';
import './form.scss';
import phonecode from './phonecode.json';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const phonecodeArray = phonecode;
console.table(phonecode);

export default function () {
  const [phone, setPhone] = React.useState();
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
            <input type="text" />
          </div>
          <div className="block-input">
            <label htmlFor="">
              Lastname :<sup>*</sup>
            </label>
            <input type="text" />
          </div>
        </div>
        <div className="row-date">
          <div className="block-input">
            <label htmlFor="">
              Birthday :<sup>*</sup>
            </label>
            <input type="date" name="" id="" />
          </div>

          <div className="block-input">
            <label htmlFor="">
              Nationality :<sup>*</sup>
            </label>
            <select name="" id="">
              <option value="">-- Please Select --</option>
            </select>
          </div>
        </div>
        <div className="row-citizenid">
          <div className="block-input">
            <label htmlFor="">CitizenID :</label>
            <input type="text" /> - <input type="text" /> -{' '}
            <input type="text" /> - <input type="text" /> -{' '}
            <input type="text" />
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
              //   onlyCountries={['th']}
              masks={{ th: '...-...-....' }}
              value={phone}
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
            <label>THB</label>
          </div>
          <div className="block-input">
            <button>SUBMIT</button>
          </div>
        </div>
      </form>
    </div>
  );
}
