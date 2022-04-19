import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App(){

  let [글제목, 글제목변경] = useState(['남자 코트 추천','강남 우동 맛집']);
  let [글제목2, 글제목변경2] = useState('여자 코트 추천');
  let [ 따봉, 따봉변경 ] = useState(0);
  
  // let posts = '강남 고기 맛집'; 
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <div className="list">
        <h3>{ 글제목[1] }<span onClick= {()=>{따봉변경(따봉 +1)}}>👍</span> {따봉} </h3> 
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{ 글제목2 }</h3> 
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{ 글제목[0] }</h3> 
        <p>2월 17일 발행</p>
        <hr/>
      </div>
    </div>
  )
}

export default App;
