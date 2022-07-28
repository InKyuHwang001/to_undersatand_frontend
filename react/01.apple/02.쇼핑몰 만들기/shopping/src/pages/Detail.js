import React from 'react';
import {useParams} from "react-router-dom";
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav} from 'react-bootstrap'


function Detail(props){
  let [alert, setAlert]=useState(true)

  useEffect(()=>{
    let a =setTimeout(()=>{setAlert(false)}, 2000)
    return ()=>{
      clearTimeout(a)
    }
  },[ ])

  let [count, setCount]= useState(0)

  let { id } = useParams();
  let 찾은상품 = props.shoes.find(function(x){
    return x.id == id
  });

  let[탭, 탭변경]=useState(0)
  
  return (
    <div className="container">
      {
        alert ==true
        ? <div className='alert aler-warning'>
            2초이내 구매시 할인
          </div>
        : null
      }
      {count}
      <button onClick={()=>{setCount(count+1)}}>버튼</button>
      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}원</p>
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>
      <Nav variant="tabs"  defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link onClick={()=>{탭변경(0) }} eventKey="link0">버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={()=>{탭변경(1) }} eventKey="link1">버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={()=>{탭변경(2) }} eventKey="link2">버튼2</Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent2 shoes={props.shoes} 탭={탭} ></TabContent2>
    </div>  
  )};

  function TabContent2({탭, shoes}){

    let [fade, setFade]=useState('')

    useEffect(()=>{
      setTimeout(()=>{setFade('end')},10)
      return()=>{
        setFade('')
      }
    },[탭])


    return (<div className='Start end'>{[<div>{shoes[0].title}</div>,<div>내용1</div>,<div>내용2</div>][탭]}
    </div>)
  } 
  export default Detail