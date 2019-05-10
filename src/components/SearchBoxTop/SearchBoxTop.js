import React, { Component } from 'react';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';

class SearchBoxTop extends Component {
  render() {
    return (
      <div style={{width: 300, justifySelf: 'flex-end'}} className="SearchWrapper">
        <SearchBox placeholder="Search" />
      </div>
    );
  }
}

export default SearchBoxTop;