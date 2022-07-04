import React from 'react'
import { Form, Row, Col } from 'react-bootstrap'

const SearchForm = ({ handleOnChange, str }) => {
    return (
        <Form>
            <Form.Group as={Row}>
                <Form.Label column sm="3">Search : </Form.Label>
                <Col sm="9">
                    <Form.Control
                        name='searchStr'
                        placeholder='Search ...'
                        onChange={handleOnChange}
                        value={str}
                    >

                    </Form.Control>
                </Col>
            </Form.Group>
        </Form>
    )
}

export default SearchForm