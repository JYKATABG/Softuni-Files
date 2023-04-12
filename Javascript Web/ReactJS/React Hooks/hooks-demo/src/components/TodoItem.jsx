import { ListGroup, Button } from 'react-bootstrap'
import { useContext } from 'react'
import { TodoContext } from '../contexts/TodoContext.js'

export function TodoItem({
    _id,
    text,
    isCompleted,
}) {

    const { onToDoDelete } = useContext(TodoContext);

    return (
        <>
            <ListGroup.Item action style={{ display: 'flex', justifyContent: 'space-between', }}>
                {text}
                <div>
                <Button variant='dark' onClick={() => onToDoDelete(_id)}>X</Button>
                </div>
            </ListGroup.Item>
        </>
    )
}