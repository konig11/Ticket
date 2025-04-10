import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
function Footer() {
    return (
        <footer className="bg-dark text-light py-4 mt-5">
            <Container>
                <Row>
                    {/* Left Side - About */}
                    <Col md={5} className="text-center text-md-start">
                        <h5> <img
                            src={logo}
                            alt="Loja de Bilhetes Logo"
                            width="40"
                            height="40"
                            className="d-inline-block align-top me-2"
                        /> Loja de Bilhetes</h5>
                        <p>Compre ou venda bilhetes de futebol de forma fácil e segura.</p>
                    </Col>

                   

                    {/* Right Side - Social Media */}
                    <Col md={5} className="text-center text-md-end">
                        <h5>Siga-nos</h5>
                        <a href="#" className="text-light me-3">
                            <FontAwesomeIcon icon={faFacebook} size="lg" />
                        </a>
                        <a href="#" className="text-light me-3">
                            <FontAwesomeIcon icon={faTwitter} size="lg" />
                        </a>
                        <a href="#" className="text-light">
                            <FontAwesomeIcon icon={faInstagram} size="lg" />
                        </a>
                    </Col>
                </Row>
                <hr className="bg-light" />
                <p className="text-center mb-0">&copy; {new Date().getFullYear()} Loja de bilhetes. Todos os Direitos Reservados.</p>
            </Container>
        </footer>
    );
}

export default Footer;
