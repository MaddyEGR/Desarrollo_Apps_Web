//import logo from './logo.svg';
import './App.scss';
import Item from './Components/Item/Item';
import Menu from './Components/Menu/Menu';
import Container from 'react-bootstrap/Container';
import Formulario from './Components/Formulario/Formulario';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



function App() {
  console.log('App se está renderizando');

  return (
    <div className="App">
      <Menu></Menu>

      <Container>
        <Row>
          <Col><Formulario></Formulario></Col>
          <Col>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
          </Col>
          </Row>
      </Container>

    </div>
  );
}

export default App;