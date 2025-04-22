import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';

function FeaturedProducts() {
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:3001/api/bilhetes')
            .then(response => response.json())
            .then(data => {
                // Adiciona o caminho das bandeiras se necessário
                const updated = data.map(bilhete => ({
                    ...bilhete,
                    flag1: `./src/assets/${bilhete.flag1}`,
                    flag2: `./src/assets/${bilhete.flag2}`
                }));
                setFeaturedProducts(updated);
                setIsLoading(false);
            })
            .catch(error => {
                console.error("Erro ao buscar bilhetes:", error);
                setIsLoading(false);
            });
    }, []);


    if (isLoading) {
        return <p className="text-center">Carregando bilhetes...</p>;
    }

    return (
        <Container className="my-4">
            <h2 className="text-center mb-4">Jogos em Destaque</h2>
            <Row>
                {featuredProducts.map((product) => (
                    <Col key={product.id} md={4} className="mb-3">
                        <Card className="text-center shadow-sm">
                            <Card.Body>
                                {/* Bandeiras dos países */}
                                <div className="d-flex justify-content-center align-items-center mb-3">
                                    <img
                                        src={product.flag1}
                                        alt="Bandeira 1"
                                        width="40"
                                        height="30"
                                        
                                    /> VS
                                    <img
                                        src={product.flag2}
                                        alt="Bandeira 2"
                                        width="40"
                                        height="30"
                                    />
                                </div>

                                {/* Nome do Jogo */}
                                <Card.Title>{product.name}</Card.Title>

                                {/* Preço */}
                                <Card.Text><strong>Preco:</strong>  {Number(product.price)} MTN</Card.Text>

                                {/* Botão de compra */}
                                <Link to={`/buy/${product.id}`} state={{ product }} className="btn btn-success">
                                    Compre Agora
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default FeaturedProducts;
