import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

function PaymentForm({ onPayment }) {
    const [paymentMethod, setPaymentMethod] = useState('card');
    const [cardNumber, setCardNumber] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvv, setCvv] = useState('');
    const [mpesaNumber, setMpesaNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simulação direta do pagamento, independente da validação
        if (paymentMethod === 'card') {
            onPayment({ method: 'Cartao', cardNumber, expiry, cvv });
        } else {
            onPayment({ method: 'M-Pesa', mpesaNumber });
        }
    };

    return (
        <Form onSubmit={handleSubmit} className="p-3 border rounded shadow-sm">
            <h4 className="text-center mb-3">Escolha o Metodo de Pagamento</h4>

            <Form.Group className="mb-3">
                <Form.Label>Metodo de Pagamento</Form.Label>
                <Form.Select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                    <option value="card">Cartao de Credito/Debito</option>
                    <option value="mpesa">M-Pesa</option>
                </Form.Select>
            </Form.Group>

            {paymentMethod === 'card' && (
                <>
                    <Form.Group className="mb-3">
                        <Form.Label>Numero do Cartao</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="**** **** **** ****"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Validade (MM/AA)</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="MM/AA"
                            value={expiry}
                            onChange={(e) => setExpiry(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>CVV</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="***"
                            value={cvv}
                            onChange={(e) => setCvv(e.target.value)}
                        />
                    </Form.Group>
                </>
            )}

            {paymentMethod === 'mpesa' && (
                <>
                    <Form.Group className="mb-3">
                        <Form.Label>Numero do M-Pesa</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Digite seu numero de M-Pesa"
                            value={mpesaNumber}
                            onChange={(e) => setMpesaNumber(e.target.value)}
                        />
                    </Form.Group>
                    <Alert variant="info">
                        Um pedido de pagamento sera enviado para o seu numero M-Pesa.
                    </Alert>
                </>
            )}

            <Button variant="primary" type="submit" className="w-100">
                Confirmar Pagamento
            </Button>
        </Form>
    );
}

export default PaymentForm;

