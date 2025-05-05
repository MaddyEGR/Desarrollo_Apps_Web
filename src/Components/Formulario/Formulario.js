import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Formulario.scss';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo } from '../../reducers/todoSlice';
import { useRef } from 'react';

function Formulario() {
  const dispatch = useDispatch();
  const inputRefName = useRef();
  const inputRefDescription = useRef();
  const inputRefDueDate = useRef();

  const addItem = (e) => {
    e.preventDefault();
    dispatch(addTodo({
      'name': inputRefName.current.value,
      'description': inputRefDescription.current.value,
      'dueDate': inputRefDueDate.current.value,
    }))
  }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="" ref={inputRefName} />
        <Form.Text className="text-muted">
          Agrega el nombre de tu proxima tarea.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Descripción</Form.Label>
        <Form.Control type="textarea" rows={3} placeholder="" ref={inputRefDescription} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Due Date</Form.Label>
        <Form.Control type="date" placeholder="" ref={inputRefDueDate} />
      </Form.Group>

      <Button variant="info" onClick={addItem}>Agregar</Button>
    </Form>
  );
}

export default Formulario;