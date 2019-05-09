import React, { Component } from 'react';
import { Nav } from 'office-ui-fabric-react/lib/Nav';
import { initializeIcons } from '@uifabric/icons';
import { Persona, PersonaSize, PersonaPresence } from 'office-ui-fabric-react/lib/Persona';
import './NavSide.css';
import { AppContext } from '../../AppContext';
initializeIcons()

class NavSide extends Component {
  render() {
    return (
      <div className="navWrapper">
        <Persona 
          imageUrl={this.context.image}
          imageInitials={this.context.shortName}
          size={PersonaSize.size100}
          presence={PersonaPresence.busy}
          hidePersonaDetails={true}
          className="persona"
        />
        <Nav 
          expandedStateText="expanded"
          collapsedStateText="collapsed"
          selectedKey="keyHome"
          styles={{
            root: {
              width: 250,
              height: 'calc(100vh - 155px - 1.2rem)',
              boxSizing: 'border-box',
              border: '1px solid #eee',
              borderTop: 'none',
              overflowY: 'auto'
            }
          }}
          groups={[
            {
              links: [
                {
                  name: 'Home',
                  url: '/',
                  isExpanded: true,
                  key: "keyHome",
                  icon: 'Home'
                },
                {
                  name: 'Categories',
                  url: '/',
                  key: 'keyCategories',
                  icon: 'Taskboard'
                },
                {
                  name: 'About',
                  url: '/',
                  key: 'keyAbout',
                  icon: 'Info'
                }
              ]
            }
          ]}
        />
      </div>
    );
  }
}
NavSide.contextType = AppContext;

export default NavSide;