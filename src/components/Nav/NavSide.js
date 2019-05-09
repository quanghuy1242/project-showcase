import React, { Component } from 'react';
import { Nav } from 'office-ui-fabric-react/lib/Nav'
import { Persona, PersonaSize, PersonaPresence } from 'office-ui-fabric-react/lib/Persona';
import './NavSide.css';
import { AppContext } from '../../AppContext';

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
                  key: "keyHome"
                },
                {
                  name: 'Categories',
                  url: '/',
                  key: 'keyCategories'
                },
                {
                  name: 'About',
                  url: '/',
                  key: 'keyAbout'
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