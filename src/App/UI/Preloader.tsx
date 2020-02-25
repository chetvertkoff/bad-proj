import React, { Component } from 'react';

export class Preloader extends Component {
  render() {
    return (
      <div>
        <img width="200px" height="200px" src={'/upload/preloader.jpg'} alt=""/>
      </div>
    );
  }
}

export default Preloader
