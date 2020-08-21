import React, { Component } from 'react';
import './home.scss';
import Table from '../../components/table/index';
import Form from '../../components/form/index';
class index extends Component {
  render() {
    return (
      <div>
        <Form />
        <Table />
      </div>
    );
  }
}

export default index;
