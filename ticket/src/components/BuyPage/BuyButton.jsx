import { Button } from "react-bootstrap";

function BuyButton({ onClick }) {
    return (
        <div className="text-center">
            <Button variant="success" size="lg" onClick={onClick}>
                Proceder para o Pagamento
            </Button>
        </div>
    );
}

export default BuyButton;
