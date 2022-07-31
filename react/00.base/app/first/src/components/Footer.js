import React, { Component } from 'react';

class Footer extends Component{
    render() {
      return (
        <footer>
          <h2>{this.props.title}</h2>
          {this.props.sub}
        </footer>
      );
    }
  }

export default Footer;