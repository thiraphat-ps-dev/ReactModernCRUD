import React, { Component } from 'react';
import './home.scss';
import Table from '../../components/table/index';
import Formedit from '../../components/formedit/index';
class index extends Component {
  render() {
    return (
      <div>
        <Formedit />
        {/* <Table /> */}
      </div>
    );
  }
}

export default index;
