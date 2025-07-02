import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import PaymentForm from '../components/PaymentPage/PaymentForm';
import OrderSummary from '../components/PaymentPage/OrderSummary';
import ConfirmationMessage from '../components/PaymentPage/ConfirmationMessage';
import { generateTicketPDF } from '../utils/generateTicketPDF';

function PaymentPage() {
    const location = useLocation();
    const { product, quantity } = location.state || { product: { id: 99, name: "Ingresso", price: 100 }, quantity: 1 };
    const total = product.price * quantity;

    const [paymentSuccess, setPaymentSuccess] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState('');

    const handlePayment = async (paymentDetails) => {
        console.log("Detalhes do Pagamento:", paymentDetails);
        const ticketId = Math.floor(Math.random() * 1000000);
        const date = new Date().toISOString().slice(0, 19).replace('T', ' '); // formato SQL

        await generateTicketPDF({
            game: product,
            quantity,
            buyer: paymentDetails.completeName,
            ticketId
        });

        // Enviar os dados para o backend
        try {
            const response = await fetch('http://localhost:3001/api/bilhetes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    code: ticketId,
                    game: product.name,
                    quantity,
                    total,
                    method: paymentDetails.method,
                    date,
                    
                    buyer: paymentDetails.completeName,
                    email: paymentDetails.confirmEmail,
                    dateGame: product.date_game.split("T")[0] + " " + product.date_game.split("T")[1].split(".")[0]
                })
            });

            const result = await response.json();
            if (result.success) {
                setPaymentMethod(paymentDetails.method);
                setPaymentSuccess(true);
            } else {
                alert("Erro ao salvar bilhete.");
            }
        } catch (error) {
            console.error("Erro ao salvar bilhete:", error);
            alert("Erro na comunicação com o servidor.");
        }
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
