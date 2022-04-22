import logo from './logo.svg';
import { Container, Navbar } from 'react-bootstrap';
import './App.css';
import { useState } from 'react';





function App() {
  return (
    
    
    <div className="App">
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">
            <h2>
              가사를 만들자
            </h2>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              with: <a> 너의 목소리를 들려줘</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">가사 생성</h1>
          <p class="lead">어쩌구 저쩌구</p>
        </div>
      </div>
      
      <div className='container'>
        <div className='row'>
          <div className='col-md-5'>
            <div class="jumbotron jumbotron-fluid">
              <div class="container">
                <h1 class="display-4">가사 생성</h1>
                <p class="lead">어쩌구 저쩌구</p>
              </div>
            </div>
          </div>
          <div className='col-md-5'>
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                  <h1 class="display-4">가사 생성</h1>
                  <p class="lead">어쩌구 저쩌구</p>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
