import React, { Component } from 'react';
import TopNav from '../TopNav/TopNav';
import NavSide from '../Nav/NavSide';
import { style } from './MainApp.style';

class MainApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCollapsed: false,
      isOverlay: false
    };
  }

  componentDidMount() {
    this.toggleOverlayNav();
    window.addEventListener('resize', this.toggleOverlayNav.bind(this), false);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.toggleOverlayNav.bind(this), false);
  }

  toggleOverlayNav() {
    const isMobile = window.matchMedia("(max-width: 599px)").matches;
    this.setState({
      isCollapsed: isMobile,
      isOverlay: isMobile
    });
  }

  toggleSideBar() {
    this.setState({ isCollapsed: !this.state.isCollapsed })
  }

  render() {
    return (
      <div className={style.app}>
        <TopNav onToggleSideBar={() => this.toggleSideBar()} />
        <div className={style.appMain}>
          <NavSide
            isCollapsed={this.state.isCollapsed} 
            isOverlay={this.state.isOverlay} 
            onDismiss={() => this.toggleSideBar()}
          />
          <div
            style={{
              marginLeft: this.state.isOverlay ? 0 : this.state.isCollapsed ? -250 : 0,
              transition: 'margin 0.36s cubic-bezier(0.4, 0, 0.2, 1)',
              flexGrow: 1
            }}
          >
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default MainApp;