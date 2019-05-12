import React, { Component } from 'react';
import { Nav } from 'office-ui-fabric-react/lib/Nav';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { initializeIcons } from '@uifabric/icons';
import { Link, withRouter } from 'react-router-dom';
import { style } from './NavSide.style';
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
        })
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
    return (
      <div className={style.navWrapper} style={{width: this.props.isCollapsed ? 0 : 250}}>
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
              border: '1px solid #eee',
              borderTop: 'none',
              overflowY: 'auto',
              transition: '0.2s'
            }
          }}
          groups={[{ links: this.state.links }]}
          linkAs={this.onRenderLink}
        />
      </div>
    );
  }
}

export default withRouter(NavSide);