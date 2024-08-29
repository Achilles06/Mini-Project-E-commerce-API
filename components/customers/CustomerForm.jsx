import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';

const CustomerForm = ({ existingCustomer, onSubmit }) => {
    const [customer, setCustomer] = useState(
        existingCustomer || { name: '', email: '', phone: '' }
    );
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCustomer({ ...customer, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!customer.name || !customer.email || !customer.phone) {
            setError('All fields are required');
        } else {
            onSubmit(customer);
            setError(null);
        }
    };

    return (
        <Container>
            <h2>{existingCustomer ? 'Update Customer' : 'Create Customer'}</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={customer.name}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={customer.email}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                        type="text"
                        name="phone"
                        value={customer.phone}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Button type="submit" variant="primary">
                    {existingCustomer ? 'Update' : 'Create'}
                </Button>
            </Form>
        </Container>
    );
};

export default CustomerForm;
