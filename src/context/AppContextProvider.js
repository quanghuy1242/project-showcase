import React, { Component } from 'react';
import { AppContext } from './AppContext';
import { AdministratorAPI } from '../api/administrator.api';
import { ObjectUtil } from '../util/ObjectUtil';

export default class AppContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      administrator: {},
      baseUrl: 'https://project-showcase.netlify.com'
    };
  }

  async componentDidMount() {
    if (ObjectUtil.isEmpty(this.state.administrator)) {
      const administrator = await AdministratorAPI.getAdminInfo();
      this.setState({ administrator: administrator });
    }
  }
  
  render() {
    const value = {
      ...this.state
    };
    return (
      <AppContext.Provider value={value}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}