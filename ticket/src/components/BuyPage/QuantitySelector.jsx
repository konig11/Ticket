import { Form } from "react-bootstrap";

function QuantitySelector({ quantity, onQuantityChange }) {
    return (
        <Form.Group className="text-center">
            <Form.Label>Quantidade:</Form.Label>
            <Form.Control
                type="number"
                value={quantity}
                onChange={onQuantityChange}
                min="1"
                className="text-center"
            />
        </Form.Group>
    );
}

export default QuantitySelector;
