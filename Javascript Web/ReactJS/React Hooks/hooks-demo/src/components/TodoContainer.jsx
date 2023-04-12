import 'bootstrap/dist/css/bootstrap.min.css';

import { ListGroup, Button } from 'react-bootstrap'
import { TodoItem } from './TodoItem.jsx';


export function TodoContainer({ todos, onToDoClick, onToDoDelete }) {


    return (
        <div style={{ width: '30%', margin: '30px auto' }}>
            <h1 style={{ textAlign: 'center' }}>To-do List</h1>
            <ListGroup>
                {todos.map(todo => <TodoItem key={todo._id} {...todo} />)}
                <Button variant="primary" style={{ width: '30%', margin: '10px auto' }} onClick={onToDoClick}>Add Task</Button>
            </ListGroup>
        </div>
    )
}