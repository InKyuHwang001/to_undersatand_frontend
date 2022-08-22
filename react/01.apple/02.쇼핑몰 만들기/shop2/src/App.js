import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Container,Nav} from 'react-bootstrap'
import {useState} from "react";
import {data} from './data.js';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
import {Detail} from './pages/Detail'
import axios from 'axios';
import {Cart} from './pages/Cart';

function App() {
  let [shoes, setShoes]= useState(data);
  let navigate=useNavigate();
  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}} >ShoeShop</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}} shoes={shoes}>Detail</Nav.Link>
            <Nav.Link onClick={()=>{navigate(-1)}} >Back</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={
          <>
          <div className='main-bg'></div>
          <div className='container'>
            <div className='row'>
              {
                shoes.map((a, i)=>{
                  return(
                    <Cards shoes={shoes[i]} i={i}></Cards>
                  )
                })
               }
            </div>
          </div>
          <button onClick={()=>{
            axios.get('https://codingapple1.github.io/shop/data2.json').then((결과)=>{
              let copy=[...shoes, ...결과.data];
              setShoes(copy);
            })
            .catch(()=>{
              console.log('실패함')
            })
          }}>버튼</button>
          </>
        } />
        <Route path="/event" element={<EventPage/>}>
          <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>}></Route>
          <Route path="two" element={<p>생일기념 쿠폰받기</p>}></Route>
        </Route>
        <Route path="/detail/:id" element={ <Detail shoes={shoes}/> }/>
        <Route path="/about" element={ <About/> } >  
          <Route path="member" element={ <div>멤버들</div> } />
          <Route path="location" element={ <div>회사위치</div> } />
        </Route>
        <Route path="/cart" element={ <Cart/> } /> 
        <Route path="*" element={<div>없는 페이지다요</div>} />
      </Routes>

    </div>
  );
}

function Cards(props){
  return(
    <div className='col-md-4'>
      <img src={'https://codingapple1.github.io/shop/shoes'+(props.i+1)+'.jpg'} width="80%"/>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  )
}
function About(){
  return (
    <div>
      <h4>about페이지임</h4>
      <Outlet></Outlet>
    </div>
  )
}
function EventPage(){
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
} 

export default App;