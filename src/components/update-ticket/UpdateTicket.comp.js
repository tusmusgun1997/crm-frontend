import React from 'react'
import { Form, Button } from 'react-bootstrap'

const UpdateTicket = ({ msg, handleOnChange, handleOnSubmit }) => {
    return (
        <Form onSubmit={handleOnSubmit}>
            <Form.Label>Reply</Form.Label>
            <Form.Text>Please reply your message here or update the ticket</Form.Text>
            <Form.Control
                as="textarea"
                row="5"
                name="detail"
                value={msg}
                onChange={handleOnChange}
            />
            <div className='text-right mt-5 mb-3'>
                <Button variant='info' type='submit' >Reply</Button>
            </div>

        </Form>
    )
}

export default UpdateTicket