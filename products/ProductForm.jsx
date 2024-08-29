import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';

const ProductForm = ({ existingProduct, onSubmit }) => {
    const [product, setProduct] = useState(
        existingProduct || { name: '', price: '' }
    );
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!product.name || !product.price) {
            setError('All fields are required');
        } else {
            onSubmit(product);
            setError(null);
        }
    };

    return (
        <Container>
            <h2>{existingProduct ? 'Update Product' : 'Create Product'}</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={product.name}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        type="text"
                        name="price"
                        value={product.price}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Button type="submit" variant="primary">
                    {existingProduct ? 'Update' : 'Create'}
                </Button>
            </Form>
        </Container>
    );
};

export default ProductForm;
