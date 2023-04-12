import { Modal, Button, Form } from "react-bootstrap"

import { useForm } from '../hooks/useForm.js'

export function NewTodoModal({ show, onTodoAdd, onToDoClose }) {

    const { formValues, handleChange, onSubmit } = useForm({
        text: ''
    }, onTodoAdd)



    return (
        <Modal show={show}>
            <Modal.Header closeButton onClick={onToDoClose}>
                <Modal.Title>Add To-Do</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={onSubmit}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>New Task</Form.Label>
                        <Form.Control
                            type="name"
                            name="text"
                            value={formValues.text}
                            onChange={handleChange}
                            placeholder="touch some grass"
                            autoFocus
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">Add</Button>
                </Form>
            </Modal.Body>
        </Modal>
    )
}