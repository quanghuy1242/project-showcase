import React, { Component } from 'react';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';

class SearchBoxTop extends Component {
  render() {
    return (
      <div style={{margin: '0.5rem 0.5rem 0rem 0.5rem'}} className="SearchWrapper">
        <SearchBox placeholder="Search" />
      </div>
    );
  }
}

export default SearchBoxTop;