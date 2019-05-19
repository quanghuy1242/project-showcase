import React, { Component } from 'react';
import { CategoryAPI } from '../../api/categories.api';

class CategoryDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: {}
    }
  }
  
  async componentDidMount() {
    try {
      const category = await CategoryAPI.getCategory(this.props.match.params.nameId);
      this.setState({ category: category });
    } catch (error) {
      this.props.history.push('/404');
    }
  }

  render() {
    return (
      <div>{this.state.category.description}</div>
    );
  }
}

export default CategoryDetail;