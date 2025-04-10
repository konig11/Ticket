import { Card } from "react-bootstrap";

function ProductDetails({ product }) {
    return (
        <Card>
            <Card.Body>
                <h2 className="text-center">{product.name}</h2>
                <p className="text-center text-muted">Preco: <strong> {product.price} MTN</strong></p>
            </Card.Body>
        </Card>
    );
}

export default ProductDetails;
