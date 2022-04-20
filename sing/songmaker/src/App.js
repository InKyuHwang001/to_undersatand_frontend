import logo from './logo.svg';
import { Navbar, Container,Nav,NavDropdown,Form,Button } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">너의 목소리를 들려조</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className='background'>
        <h1>가사 생성 프로그램</h1>
        <p>
          당신의 가사를 넣어 주세요
        </p>
      </div>
      <Form>
        <fieldset disabled>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledTextInput">입력할 가사</Form.Label>
            <Form.Control id="disabledTextInput" placeholder="가사의 첫줄을 입력하세요." />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledSelect">장르 선택</Form.Label>
            <Form.Select id="disabledSelect">
              <option>발라드</option>
              <option>댄스</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              id="disabledFieldsetCheck"
              label="Can't check this"
            />
          </Form.Group>
          <Button type="submit">Submit</Button>
        </fieldset>
      </Form>
    </div>
  );
}

export default App;
