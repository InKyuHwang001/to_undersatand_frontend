import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App(){
  let [title, setTitle]=useState(0);
  let [글제목,글제목변경]=useState(['1일차','2일차','3일차']);
  let [따봉, 따봉변경]=useState(0);
  let [modal, setModal]=useState(false);
  function 제목바꾸기(){
    var newArray=[...글제목];
    newArray[0]='1일차 똥';
    글제목변경(newArray)
  }
  return(
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      { 
        글제목.map(function(a, i){
          return (
          <div className="list">
            <h4 onClick={()=>{ setModal(true); setTitle(i); }}>{ 글제목[i] }</h4>
            <p>2월 18일 발행</p>
          </div> )
        }) 
      }
      { 
         modal == true ? <Modal title={title} 글제목={글제목} ></Modal> : null
      }
    </div>
  )  
}

function Modal(props){
  return (
    <div className="modal" style={{ background : 'skyblue' }}>
      <h4>{ props.글제목[props.title] }</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}
export default App;
