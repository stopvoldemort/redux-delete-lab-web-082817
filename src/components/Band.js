import React, { Component } from 'react';

class Band extends Component {

  handleClick = () => {
    this.props.store.dispatch({
      type: "DELETE_BAND",
      id: this.props.band.id
    })

  }

  render() {
    return(
      <div>
        <li>
          <p>{this.props.band.text}</p>
          <button id={this.props.band.id} onClick={this.handleClick} >Delete</button>
        </li>
      </div>
    );
  }
};

export default Band;
