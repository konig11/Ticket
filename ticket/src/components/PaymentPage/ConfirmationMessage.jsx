import { Alert } from 'react-bootstrap';

function ConfirmationMessage({ message }) {
    return (
        <Alert variant="success" className="text-center mt-3">
            {message}
        </Alert>
    );
}

export default ConfirmationMessage;
