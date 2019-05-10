import React, { Component } from 'react';
import { Nav } from 'office-ui-fabric-react/lib/Nav';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { initializeIcons } from '@uifabric/icons';
import { Link } from 'react-router-dom';
import './NavSide.css';
import { withRouter } from 'react-router-dom';
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
      this.setState({
        selectedKey: this.state.links.find(link => link.url === location.pathname).key
      })
    })
  }

  onRenderLink = (props) => {
    return (
      <Link className={props.className} style={{color: 'inherit', boxSizing: 'border-box'}} to={props.href}>
        <span style={{display: 'flex'}}>
          { props.iconProps && <Icon style={{margin: '0 4px'}} {...props.iconProps} /> }
          {props.children}
        </span>
      </Link>
    );
  }

  render() {
    let selectedKey = this.state.selectedKey ? this.state.selectedKey : null;
    return (
      <div className="navWrapper" style={{width: this.props.isCollapsed ? 0 : 250}}>
        <Nav
          expandedStateText="expanded"
          collapsedStateText="collapsed"
          {...selectedKey}
          onLinkClick={() => {console.log('á')}}
          styles={{
            root: {
              width: this.props.isCollapsed ? 0 : 250,
              height: 'calc(100vh - 155px - 1.2rem)',
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