import React, { Component } from 'react';
import Band from './Band.js'

class Bands extends Component {

  listBands = () => {
    return this.props.store.getState().bands.map((band, idx) => {
      return (<Band band={band} key={idx} store={this.props.store} />)
    })
  }

  render() {
    return(
      <ul>
        {this.listBands()}
      </ul>
    );
  }
};

export default Bands;
