import { Card, ListGroup } from 'react-bootstrap';

function OrderSummary({ items, total }) {
    return (
        <Card className="shadow-sm p-3">
            <Card.Body>
                <Card.Title className="text-center">Resumo do Pedido</Card.Title>
                <ListGroup variant="flush">
                    {items.map((item) => (
                        <ListGroup.Item key={item.id}>
                            {item.name} - MTN {item.price.toFixed(2)}
                        </ListGroup.Item>
                    ))}
                </ListGroup>
                <h5 className="text-end mt-3">Total: MTN {total.toFixed(2)}</h5>
            </Card.Body>
        </Card>
    );
}

export default OrderSummary;
