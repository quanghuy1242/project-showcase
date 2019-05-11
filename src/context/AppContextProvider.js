import React, { Component } from 'react';
import { AppContext } from './AppContext';

export default class AppContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Quang Huy',
      image: 'https://raw.githubusercontent.com/quanghuy1242/MyLibary/master/images/cover.jpg',
      shortName: 'QH'
    };
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