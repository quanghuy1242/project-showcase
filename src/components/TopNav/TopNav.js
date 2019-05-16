import React, { Component } from 'react';
import { Text } from 'office-ui-fabric-react/lib/Text';
import { IconButton } from 'office-ui-fabric-react/lib/Button';
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';
import NavLink from '../NavLink/NavLink';
import { getStyle } from './TopNav.style';

class TopNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        { name: 'Project Showcase', href: '/' },
      ]
    };
  }

  render() {
    const classNames = getStyle();
    return (
      <div className={classNames.topNav} style={{boxShadow: Depths.depth8}}>
        <IconButton
          iconProps={{iconName: "GlobalNavButton"}} 
          className={classNames.toggleSideBar}
          style={{color: 'black', marginRight: '0.5rem'}}
          onClick={this.props.onToggleSideBar} 
        />
        <div className={classNames.topNavInner}>
          <NavLink href="/">
            <Text variant="xLarge" style={{fontWeight: 400}}>Quang Huy</Text>
          </NavLink>
          <div className={classNames.topNavAction}>
          {
            this.state.links.map((link, index) => (
              <NavLink href={link.href} key={index}>
                <Text variant="Large">{link.name}</Text>
              </NavLink>
            ))
          }
          </div>
        </div>
      </div>
    );
  }
}

export default TopNav;