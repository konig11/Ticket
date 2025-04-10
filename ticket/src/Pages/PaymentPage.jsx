import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import PaymentForm from '../components/PaymentPage/PaymentForm';
import OrderSummary from '../components/PaymentPage/OrderSummary';
import ConfirmationMessage from '../components/PaymentPage/ConfirmationMessage';
import { generateTicketPDF } from '../utils/generateTicketPDF';

function PaymentPage() {
    const location = useLocation();
    const { product, quantity } = location.state || { product: { name: "Ingresso", price: 100 }, quantity: 1 };
    const total = product.price * quantity;

    const [paymentSuccess, setPaymentSuccess] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState('');

    const handlePayment = async (paymentDetails) => {
        console.log("Detalhes do Pagamento:", paymentDetails);
        setPaymentMethod(paymentDetails.method);
        setPaymentSuccess(true);

        // Simula geração do ticket
        const ticketId = Math.floor(Math.random() * 1000000);

        await generateTicketPDF({
            game: product,
            quantity,
            buyer: 'Cliente',
            ticketId
        });
    };

    return (
        <Container className="mt-4">
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <h2 className="text-center">Pagamento</h2>
                    <OrderSummary items={[{ ...product, id: 1 }]} total={total} />
                    {!paymentSuccess ? (
                        <PaymentForm onPayment={handlePayment} />
                    ) : (
                        <ConfirmationMessage message={`Pagamento via ${paymentMethod} realizado com sucesso! O seu bilhete foi gerado.`} />
                    )}
                </Col>
            </Row>
        </Container>
    );
}

export default PaymentPage;
