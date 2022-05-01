import React from 'react';
import {useParams} from "react-router-dom";
import { useEffect, useState } from 'react';

function Detail(props){
  
  let [alert, setAlert]=useState(true)

  useEffect(()=>{
    let a =setTimeout(()=>{setAlert(false)}, 2000)
    return ()=>{
      clearTimeout(a)
    }
  },[ ])

  useEffect(()=>{   }) // 1.제렌더링마다 코드실행하고 싶으면
  useEffect(()=>{   },[]) //2. mount 1회 코드실행하고 싶으면
  useEffect(()=>{
    return ()=>{
      //3.unmount시 1회 코드실행하고 싶으면
    }
  },[])

  useEffect(()=>{
    console.log('안녕')
  })
  let [count, setCount]= useState(0)

  let { id } = useParams();
  let 찾은상품 = props.shoes.find(function(x){
    return x.id == id
  });
  
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
    </div>  
  )};
  
  export default Detail