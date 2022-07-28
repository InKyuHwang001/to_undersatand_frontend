
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Container,Nav} from 'react-bootstrap'
import {useState} from "react";
import {data} from './data.js';
import {Routes, Route, useNavigate} from 'react-router-dom'
import Detail from './pages/Detail.js'
import axios from 'axios'


function App() {
  let [shoes, setShoes]= useState(data)
  let [재고]=useState([10,11,12])
  let navigate= useNavigate();
  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}} href="#home">Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}} href="#features">Detail</Nav.Link>
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
            axios.get('https://codingapple1.github.io/shop/data2.json')
            .then((결과)=>{
              console.log(결과.data)
              let copy=[...shoes, ...결과.dara];
              setShoes(copy);
            })
            .catch(()=>{
              console.log('실패함ㅅㄱ')
            })


          }}>버튼</button>
          </>
        } />
        <Route path="/detail/:id" element={
          <Detail shoes={shoes} />
        } />
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

export default App;
