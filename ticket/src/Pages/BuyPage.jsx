import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";
import ProductDetails from "../components/BuyPage/ProductDetails";
import QuantitySelector from "../components/BuyPage/QuantitySelector";
import BuyButton from "../components/BuyPage/BuyButton";

function BuyPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const product = location.state?.product;

    const [quantity, setQuantity] = useState(1);

    if (!product) {
        return <h2 className="text-center mt-5">Nenhum produto selecionado.</h2>;
    }

    const handleQuantityChange = (event) => {
        setQuantity(parseInt(event.target.value, 10));
    };

    const handleBuyClick = () => {
        navigate("/payment", { state: { product, quantity } });
    };

    return (
        <Container className="my-5">
            <Row className="justify-content-center">
                <Col md={6}>
                    <Card className="shadow-lg">
                        <Card.Body>
                            <ProductDetails product={product} />
                            <Form className="my-3">
                                <QuantitySelector quantity={quantity} onQuantityChange={handleQuantityChange} />
                            </Form>
                            <BuyButton onClick={handleBuyClick} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default BuyPage;
