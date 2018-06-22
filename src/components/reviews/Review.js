import React, { Component } from 'react';

class Review extends Component {
  handleClick = () => {
    this.props.store.dispatch({
      type: 'DELETE_REVIEW',
      
    })
  }

  render() {
    return (
      <li>
        {this.props.review.text}
        <button onClick={this.handleClick}>Remove</button>
      </li>
    );
  }
};

export default Review;
