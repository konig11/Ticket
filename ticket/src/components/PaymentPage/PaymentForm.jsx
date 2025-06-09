import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';


function VerifyEmail(Email) {
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/
return emailRegex.test(Email)
}
function PaymentForm({ onPayment }) {
    const [paymentMethod, setPaymentMethod] = useState('card');
    const [cardNumber, setCardNumber] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvv, setCvv] = useState('');
    const [mpesaNumber, setMpesaNumber] = useState('');
    const [completeName, setCompleteName] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simulação direta do pagamento, independente da validação
        if (paymentMethod === 'card') {
            onPayment({ method: 'Cartao', completeName, confirmEmail, cardNumber,  expiry, cvv });
        } else {
            onPayment({ method: 'M-Pesa', completeName, confirmEmail, mpesaNumber });
        }
    };

    return (
        <Form onSubmit={handleSubmit} className="p-3 border rounded shadow-sm">
            <h4 className="text-center mb-3">Escolha o Metodo de Pagamento</h4>
            <Form.Group className="mb-3">
                <Form.Label>Nome Completo</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Escreva o seu Nome Completo"
                    value={completeName}
                    onChange={(e) => setCompleteName(e.target.value)}
                    required
                ></Form.Control>
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Escreva o seu email"
                    value={confirmEmail}
                    onChange={(e) => setConfirmEmail(e.target.value)}
                    required
                ></Form.Control>
            </Form.Group>
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

