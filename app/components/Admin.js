/**
 * Created by daiyingheng on 16/9/4.
 */
import React from 'react';
import Sidebar from './Sidebar';

class Admin extends React.Component {
  render() {
    return (
      <div>
        <Sidebar />
        {this.props.children || "Hello"}
      </div>


    );
  }
}

export default Admin;