import React, { Component } from 'react';
import { Text } from 'office-ui-fabric-react/lib/Text';
import { IconButton } from 'office-ui-fabric-react/lib/Button';
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';
import NavLink from '../NavLink/NavLink';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';
import './TopNav.css'

class TopNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        { name: 'Project Showcase', href: '#' },
      ]
    };
  }

  render() {
    return (
      <div className="TopNav" style={{boxShadow: Depths.depth8}}>
        <IconButton
          iconProps={{iconName: "GlobalNavButton"}} 
          className="ToggleSideBar" 
          onClick={this.props.onToggleSideBar} 
        />
        <NavLink href="#">
          <Text variant="xxLarge" style={{fontWeight: 400}}>Quang Huy</Text>
        </NavLink>
        <div className="TopNavAction">
        {
          this.state.links.map((link, index) => (
            <NavLink href={link.href} key={index}>
              <Text variant="xLarge">{link.name}</Text>
            </NavLink>
          ))
        }
        </div>
        <div className="spacer"></div>
        <div style={{width: 300, justifySelf: 'flex-end'}} className="SearchWrapper">
          <SearchBox placeholder="Search" />
        </div>
      </div>
    );
  }
}

export default TopNav;