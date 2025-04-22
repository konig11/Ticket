import { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

function VerifyTicketPage() {
    const [code, setCode] = useState('');
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleVerify = async () => {
        if (!code) return;
        setLoading(true);
        setResult(null);

        try {
            const response = await fetch(`http://localhost:3001/api/bilhetes/${code}`);
            const data = await response.json();
            setResult(data);
        } catch (error) {
            console.error("Erro ao verificar bilhete:", error);
            alert("Erro na verificação.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container className="mt-5">
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <h3 className="text-center">Verificar Autenticidade do Bilhete</h3>
                    <Form.Group className="my-3">
                        <Form.Label>Código do Bilhete</Form.Label>
                        <Form.Control
                            type="text"
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            placeholder="Digite o código do bilhete"
                        />
                    </Form.Group>
                    <Button variant="primary" onClick={handleVerify} disabled={loading}>
                        {loading ? "Verificando..." : "Verificar"}
                    </Button>

                    {result && (
                        <div className="mt-4">
                            {result.valid ? (
                                <Alert variant="success">
                                    ✅ Bilhete válido!<br />
                                    <strong>Jogo:</strong> {result.bilhete.jogo}<br />
                                    <strong>Quantidade:</strong> {result.bilhete.quantidade}<br />
                                    <strong>Data da Compra:</strong> {new Date(result.bilhete.data_compra).toLocaleString()}
                                </Alert>
                            ) : (
                                <Alert variant="danger">❌ Bilhete inválido!</Alert>
                            )}
                        </div>
                    )}
                </Col>
            </Row>
        </Container>
    );
}

export default VerifyTicketPage;
