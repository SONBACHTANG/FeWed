import { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Form, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import './cart.css';

const Cart = () => {
    const [cart, setDataCart] = useState([]);
    const navivate = useNavigate();

    const goToCheckOut = async () => {
        if (cart.length < 1) {
            alert("Giỏ hàng của bạn rỗng")
            return;
        }
        navivate("/checkout")
    }

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        setDataCart(cart);
        TotalMoney();
    }, []);

    const handleQuantityChange = (id, change) => {
        const giohang = JSON.parse(localStorage.getItem('cart')) || [];
        const findId = giohang.find(x => x.product_id === id);

        if (findId) {
            if (change === 1) {
                findId.soluong += 1;
            } else if (change === -1 && findId.soluong > 1) {
                findId.soluong -= 1;
            } else if (change === -1 && findId.soluong <= 1) {
                Swal.fire({
                    title: "Thông báo",
                    text: "Phải có ít nhất 1 sản phẩm",
                    icon: "error",
                    duration: 5000
                });
                return;
            }

            findId.total = Math.round(findId.soluong * findId.price);
            localStorage.setItem('cart', JSON.stringify(giohang));
            setDataCart(giohang);
        }
    };




    const TotalMoney = () => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const sum = cart.reduce((acc, item) => acc + (item.soluong * item.price), 0);
        return sum;
    };

    const Delete = (id) => {
        const cartList = JSON.parse(localStorage.getItem('cart')) || [];
        const updatedCart = cartList.filter(item => item.product_id !== id);
        setDataCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    return (
        <Container className='cart-container'>
            <Row>
                <Col md={8}>
                    <h2>Shopping Cart</h2>
                    {cart.map(item => (
                        <Card key={item.product_id} className="mb-3">
                            <Card.Body>
                                <Row className="align-items-center">
                                    <Col md={2}>
                                        <img src={item.image} alt={item.product_name} style={{ width: '100%' }} />
                                    </Col>
                                    <Col md={3}>
                                        <h5>{item.product_name}</h5>
                                    </Col>
                                    <Col md={3}>
                                        <Button variant="outline-secondary" onClick={() => handleQuantityChange(item.product_id, -1)} disabled={item.soluong <= 1}>-</Button>
                                        <span className="mx-2">{item.soluong}</span>
                                        <Button variant="outline-secondary" onClick={() => handleQuantityChange(item.product_id, 1)}>+</Button>
                                    </Col>
                                    <Col md={2}>
                                        <span>€ {item.total}</span>
                                    </Col>
                                    <Col md={2}>
                                        <Button variant="outline-danger" onClick={() => Delete(item.product_id)}>x</Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    ))}
                    <Button variant="link" className="back-to-shop" onClick={() => window.history.back()}>← Back to shop</Button>
                </Col>
                <Col md={4}>
                    <div className="summary">
                        <h3>Summary</h3>
                        <div className="summary-item">
                            <span>ITEMS {cart.length}</span>
                            <span>€ {TotalMoney()}</span>
                        </div>
                        <div className="summary-item">
                            <span>SHIPPING</span>
                            <Form.Control as="select">
                                <option>Standard-Delivery </option>
                            </Form.Control>
                        </div>
                        <div className="summary-item">
                            <span>GIVE CODE</span>
                            <Form.Control type="text" placeholder="Enter your code" />
                        </div>
                        <div className="summary-item total">
                            <span>TOTAL PRICE</span>
                            <span>€ {TotalMoney()}</span>
                        </div>
                        <Button variant="dark" className="w-100" onClick={goToCheckOut}>Order</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Cart;
