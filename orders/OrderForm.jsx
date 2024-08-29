import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';

const OrderForm = ({ onSubmit }) => {
    const [order, setOrder] = useState({
        customerId: '',
        productId: '',
        quantity: 1,
    });
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setOrder({ ...order, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!order.customerId || !order.productId || order.quantity < 1) {
            setError('All fields are required and quantity must be at least 1');
        } else {
            onSubmit(order);
            setError(null);
        }
    };

    return (
        <Container>
            <h2>Place Order</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Customer ID</Form.Label>
                    <Form.Control
                        type="text"
                        name="customerId"
                        value={order.customerId}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Product ID</Form.Label>
                    <Form.Control
                        type="text"
                        name="productId"
                        value={order.productId}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control
                        type="number"
                        name="quantity"
                        value={order.quantity}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Button type="submit" variant="primary">
                    Place Order
                </Button>
            </Form>
        </Container>
    );
};

export default OrderForm;
