import { useParams } from 'react-router-dom';
import { useEffect, useState} from 'react';
import {Nav} from 'react-bootstrap'
import {useDispatch } from "react-redux"
import {addItem} from'./../store'

function Detail(props){

  let { id } = useParams();
  let 찾은상품 = props.shoes.find(function(x){return x.id == id});
  
  let [alert, setAlert] = useState(true);
  let [count, setCount]=useState(0);  
  useEffect(()=>{
    let a=setTimeout(()=>{ setAlert(false) }, 2000)

    return ()=>{
      clearTimeout(a)
    }
  }, [])

  let[num, setNum]=useState('')
  useEffect(()=>{
    if (isNaN(num)==true){
      alert('그러지마')
    }
  }, [num])

  let [tab, setTab]=useState(0);  
  let dispatch = useDispatch();

  return (
    
    <div className="container">
    
      {
        alert === true
        ? <div className='alert alert-warnnig'>

        </div>
        :null
      }
      
      <div className="row">
        <div className="col-md-6">
          <img src={'https://codingapple1.github.io/shop/shoes'+(String(Number(id)+1))+'.jpg'} width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}원</p>
          <button className="btn btn-danger" onClick={()=>{
            dispatch(addItem( {id : 1, name : 'Red Knit', count : 1} ))
          }}>주문하기</button>
        </div>
        <Nav variant="tabs"  defaultActiveKey="link0">
          <Nav.Item>
            <Nav.Link onClick={()=>{setTab(0)}} eventKey="link0">버튼0</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={()=>{setTab(1)}} eventKey="link1">버튼1</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={()=>{setTab(2)}} eventKey="link2">버튼2</Nav.Link>
          </Nav.Item>
        </Nav>
        <TabContent tab={tab}></TabContent>

      </div>
    </div>  
  )
};

function TabContent(props){
  if (props.tab === 0){
    return <div>내용0</div>
  }else if (props.tab === 1){
    return <div>내용1</div>
  }else if (props.tab === 2){
    return <div>내용2</div>
  }
  //return [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][props.tab]
}

export {Detail};