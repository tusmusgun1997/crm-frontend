import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AddTicketForm from '../../components/add-ticket-form/AddTicketForm.comp'
import PageBreadcrumb from '../../components/breadcrumb/Breadcrumb.comp'


const initialFormData = {
    subject: '',
    issueDate: '2022-01-01',
    details: '',
}

const AddTicket = () => {

    const [formData, setFormData] = useState(initialFormData)

    // useEffect(() => {

    // }, [formData])

    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
    }
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        })
    }

    return (
        <Container>
            <Row>
                <Col>
                    <PageBreadcrumb page="New Ticket" />
                </Col>
            </Row>

            <Row>
                <Col>
                    <AddTicketForm handleChange={handleChange} handleOnSubmit={handleOnSubmit} formData={formData} />
                </Col>
            </Row>
        </Container>
    )
}

export default AddTicket