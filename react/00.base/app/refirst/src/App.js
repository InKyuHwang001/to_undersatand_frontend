import React, { Component } from 'react';
import './App.css';
import ReadContent from './components/ReadContent ';
import CreateContent from './components/CreateContent';
import Control from './components/Control';
import Subject from './components/Subject';
import TOC from './components/TOC';
import UpdateContent from './components/UpdateContent';

class App extends Component{
  constructor(props){
    super(props);
    this.max_content_id = 3;
    this.state={
      mode: 'welcome',
      selected_content_id:2,
      welcome: {title:"Life is short", desc:"Play a game"},
      subject: { title : "Game of Day" , sub : "the game what you did day by day" },
      contents : [
        {id : 1 , title : 'Maple Story' , desc : 'P2W'},
        {id : 2 , title : 'Lost Ark' , desc : 'P2L'},
        {id : 3 , title : 'League of Legends' , desc : 'C2W'},
      ]
    }
  };
  
  getReadContent(){
    var i =0;
      while(i< this.state.contents.length){
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id){
          return data;
        }
        i=i+1;
      }
  };

  getContent(){
    var _title, _desc, _article = null;
    if(this.state.mode === 'welcome'){
      _title=this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article=<ReadContent title={_title} desc={_desc}></ReadContent>
    } else if (this.state.mode==='read'){
      var _content=this.getReadContent();
      _article=<ReadContent title={_content.title} desc={_content.desc}></ReadContent>
    }
    else if (this.state.mode ==='create'){
      _content=this.getReadContent();
      _article=<CreateContent onSubmit={function(_title, _desc){
        this.max_content_id = this.max_content_id+1;
        var _contents = this.state.contents.concat(
          {id:this.max_content_id, title:_title, desc:_desc}
        )
        this.setState({
          contents:_contents,
          mode: "read",
          selected_content_id:this.max_content_id
        });
        console.log(_title, _desc);
    }.bind(this)}></CreateContent>
    } else if (this.state.mode ==='update'){
      _content=this.getReadContent();
      _article = <UpdateContent data={_content} onSubmit={
        function(_id,_title, _desc){
          var _contents= Array.from(this.state.contents);
          var i = 0;
          while(i < _contents.length){
            if(_contents[i].id === _id) {
                _contents[i] = {id:_id, title:_title, desc:_desc};
                break;
              }
              i = i + 1;
          }
          this.setState({
            contents:_contents,
            mode: "read"
        });
        console.log(_title, _desc);
      }.bind(this)}></UpdateContent>
    }
    return _article;
  }

  render() {   
    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}
          onChangePage={function(){
            this.setState({mode:'welcome'});
          }.bind(this)}>
        </Subject>
        <TOC data={this.state.contents} 
          onChangePage={function(id){
          this.setState({
            mode:"read",
            selected_content_id:Number(id)
          });
        }.bind(this)}></TOC>
        <Control onChangeMode={function(_mode){
          if(_mode === 'delete'){
            if(window.confirm('really?')){
              var _contents = Array.from(this.state.contents);
              var i = 0;
              while(i < _contents.length){
                if(_contents[i].id === this.state.selected_content_id){
                  _contents.splice(i,1);
                  break;
                }
                i = i + 1;
              }
              this.setState({
                mode:'welcome',
                contents:_contents
              });
              alert('deleted!');
            }
          } else {
            this.setState({
              mode:_mode
            });
          }

        }.bind(this)}></Control>
        {this.getContent()}
      </div>
    );
  }
}

export default App;
