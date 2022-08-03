import React, { Component } from 'react';

class Control extends Component {
  render() {
    return ( 
      <ul>
          <li><a href="/create" onClick={function(e){
            e.preventDefault();
            this.props.onChangeMode('create');
          }.bind(this)}>create</a></li>
          <li><a href="/update" onClick={function(e){
            e.preventDefault();
            this.props.onChangeMode('update');
          }.bind(this)}>update</a></li>
          {/* <li><a href="/delete">delete</a></li> : 미리가서 하지도 않은 삭재해버릴수 */}
          <li><input onClick={function(e){
            e.preventDefault();
            this.props.onChangeMode('delete');
          }.bind(this)} type="button" value="delete"></input></li>
        </ul>
    );
  }
}

export default Control;