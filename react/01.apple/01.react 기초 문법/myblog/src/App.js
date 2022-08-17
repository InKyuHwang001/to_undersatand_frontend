import React, { useState } from 'react';
import './App.css';

function App() {
  let [Sub, changeSub]=useState(['Python', 'JAVA','JavaScript'])
  //state는 재 랜더링을 자동으로 시켜주기에 사용함
  let [good, changeGood]=  useState([0,0,0]);
  let [modal, setModal]=useState(false);
  let [title, setTitle]=useState(0);
  let [입력값, 입력값변경] = useState('');
  

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog </div>
      </div>
      <button onClick={()=>{
        let copy = [...Sub].sort();
        changeSub(copy)
      }}>정렬</button>
      
      {
        Sub.map(function(a,i){
          return(
            <div className="list" key={i}>
              <h3 onClick={()=>{setModal(!modal); setTitle(i)}}>{ Sub[i]}</h3>
              <button onClick={()=>{
                let copy=[...good];
                copy[i]=copy[i]+1;
                changeGood(copy)}}>👍</button>{good[i]}
              <p onClick={()=>{
                let copy = [...Sub];
                copy[i]=copy[i]+' Data'
                changeSub(copy)}} >+ Data</p>
              <button onClick={()=>{ 
                  let copy = [...Sub];
                  copy.splice(i, 1);
                  changeSub(copy);
              }}>삭제</button>
            </div>
          )
        })
      }
      
      {
        modal===true ?  <Modal title={title} changeSub={changeSub} color={'yellow'} Sub={Sub}></Modal>: null 
      } 
      <div>
        <input onChange={ (e)=>{ 입력값변경(e.target.value) } } />
        <button onClick={()=>{ 
          let copy = [...Sub];
          copy.unshift(입력값);
          changeSub(copy);
        }}>글발행</button>
    </div>
    </div>
  );
}

function Modal(props){
  return(
    <div className="modal" style={{background: props.color}}>
      <h4>{props.Sub[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={()=>{props.changeSub(['Go', 'JAVA','JavaScript'])}}>글수정</button>
    </div>
  )
}
class Modal2 extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name : 'kim',
      age : 20
    }
  }

  render(){
    return (
      <div>안녕 { this.state.age }
        <button onClick={()=>{ this.setState({age : 21}) }}>버튼</button>
      </div>
    )
  }

}

export default App;
