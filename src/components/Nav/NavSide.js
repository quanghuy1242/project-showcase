import React, { Component } from 'react';
import { Nav } from 'office-ui-fabric-react/lib/Nav';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { initializeIcons } from '@uifabric/icons';
import { Link, withRouter } from 'react-router-dom';
import { getStyle } from './NavSide.style';
import SearchBoxTop from '../SearchBoxTop/SearchBoxTop';
initializeIcons()

class NavSide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        {
          name: 'Home',
          url: '/',
          key: "keyHome",
          icon: 'Home'
        },
        {
          name: 'Categories',
          url: '/categories',
          key: 'keyCategories',
          icon: 'Taskboard'
        },
        {
          name: 'About',
          url: '/about',
          key: 'keyAbout',
          icon: 'Info'
        }
      ],
      selectedKey: null
    };
  }

  componentDidMount() {
    this.props.history.listen((location, action) => {
      const currentRoute = this.state.links.find(link => link.url === location.pathname);
      if (currentRoute) {
        this.setState({
          selectedKey: currentRoute.key
        });
        this.props.isOverlay && !this.props.isCollapsed && this.props.onDismiss(); // đóng navside chỉ khi navside đang mở
      };
    })
  }

  onRenderLink = (props) => {
    return (
      <Link className={props.className} style={{color: 'inherit', boxSizing: 'border-box'}} to={props.href}>
        <span style={{display: 'flex'}}>
          { props.iconProps && <Icon style={{margin: '0 10px', fontSize: '20px'}} {...props.iconProps} /> }
          {props.children}
        </span>
      </Link>
    );
  }

  render() {
    let selectedKey = this.state.selectedKey ? this.state.selectedKey : null;
    const classNames = getStyle(this.props);
    return (
      <div>
        <div className={classNames.navWrapper}>
          <div className={classNames.searchBoxWrapper}>
            <SearchBoxTop />
          </div>
          <Nav
            expandedStateText="expanded"
            collapsedStateText="collapsed"
            {...selectedKey}
            onLinkClick={() => {}}
            styles={{
              root: {
                width: this.props.isCollapsed ? 0 : 250,
                height: 'calc(100vh - 55px)',
                boxSizing: 'border-box',
                overflowY: 'auto',
                transition: '0.2s',
                zIndex: 98
              }
            }}
            groups={[{ links: this.state.links }]}
            linkAs={this.onRenderLink}
          />
        </div>
        {
          this.props.isOverlay
            ? !this.props.isCollapsed
              ? <div className={classNames.navOverlay} onClick={this.props.onDismiss}></div>
              : <></>
            : <></>
        }
      </div>
    );
  }
}

export default withRouter(NavSide);