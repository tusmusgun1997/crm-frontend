import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'


const LoginForm = ({ handleChange, handleOnSubmit, formSwitcher, email, password }) => {

    return (
        <Container>
            <Row>
                <Col>
                    <h1 className='text-info text-center'>Client Login</h1>
                    <hr />
                    <Form autoComplete='off' onSubmit={handleOnSubmit}>
                        <Form.Group>
                            <Form.Label>Email Address </Form.Label>
                            <Form.Control
                                type='email'
                                name='email'
                                value={email}
                                onChange={handleChange}
                                placeholder='Enter Email'
                                required

                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Email Address </Form.Label>
                            <Form.Control
                                type='password'
                                name='password'
                                value={password}
                                onChange={handleChange}
                                placeholder='Enter Password'
                                required
                            />
                        </Form.Group>

                        <Button type='submit'>Login</Button>


                    </Form>
                    <hr />
                </Col>
            </Row>
            <Row>
                <Col>
                    <a href='#!' onClick={() => formSwitcher('reset')}>Forgot Password?</a>
                </Col>
            </Row>

        </Container >
    )
}

export default LoginForm