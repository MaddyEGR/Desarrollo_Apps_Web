//import logo from './logo.svg';

//import { Todos } from './Components/todos';
//import { Goals } from './Components/goals';
import './App.scss';
import Item from './Components/Item/Item';
import Menu from './Components/Menu/Menu';
import Container from 'react-bootstrap/Container';
import Formulario from './Components/Formulario/Formulario';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { use } from 'react';
//import AddingMobileButton from './Components/AddingMobileButton/AddingMobileButton'; //?
//import './Components/todos'//?
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, initAddTodo } from './reducers/todoSlice';



function App() {
  console.log('App se está renderizando');
  
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.value);
  const arr = [
    {
      'name': 'Realizar la tarea de la semana 1',
      'description': 'Realizar la tarea de la semana 1',
      'dueDate': '2025-05-10',
    },
    {
      'name': 'Realizar la tarea de la semana 2',
      'description': 'Realizar la tarea de la semana 2',
      'dueDate': '2025-05-15',
    },
  ];

  useEffect(() => {
    arr.map((item) => {
      dispatch(initAddTodo(item));
    });
  }, []);

  return (
    <div className="App">
      <Menu></Menu>

      { /*<Todos/> }
      { <Goals/> */ }

      <Container>
        <Row>
          <Col><Formulario></Formulario></Col>
          <Col>
            <div className='scrolling'>
              {
                todos.map((todo, index) => {
                  return (
                    <Item key={index} 
                    name={todo.name}
                    description={todo.description}
                    dueDate={todo.dueDate}
                    ></Item>
                  );
                })
              }
            </div>
          </Col>
          </Row>
      </Container>

    </div>
  );
}

export default App;