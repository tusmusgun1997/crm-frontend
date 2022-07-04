import React from 'react'
import { Jumbotron, Form, Row, Col, Button } from 'react-bootstrap'
import './add-ticket-form.style.css'

const AddTicketForm = ({ handleOnSubmit, handleChange, formData }) => {
    return (
        <Jumbotron className='mt-3 add-new-ticket bg-light'>
            <h3 className='text-info text-center'>Add New Ticket</h3>
            <hr />
            <Form autoComplete='off' onSubmit={handleOnSubmit}>
                <Form.Group as={Row}>
                    <Form.Label column sm={3}>Subject</Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            name='subject'
                            value={formData.subject}
                            minLength='10'
                            onChange={handleChange}
                            placeholder='Enter Subject'
                            required

                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Form.Label column sm={3}>Issue Date</Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            type='date'
                            name='issueDate'
                            value={formData.issueDate}
                            onChange={handleChange}
                            placeholder='Enter Issue Date'
                            required
                        />
                    </Col>
                </Form.Group>

                <Form.Group>
                    <Form.Label></Form.Label>
                    <Form.Control
                        type='textarea'
                        name='details'
                        rows="5"
                        value={formData.details}
                        onChange={handleChange}
                        placeholder='Enter Details'
                        required
                    />
                </Form.Group>

                <Button type='submit' variant='info' block>Login</Button>


            </Form>
        </Jumbotron>
    )
}

export default AddTicketForm