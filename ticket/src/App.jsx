import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap'; 
import MainPage from './pages/MainPage';
import SellPage from './pages/SellPage';
import GameList from './pages/GameList';
import BuyPage from './pages/BuyPage';
import VerifyTicketPage from './pages/VerifyTicketPage';
import PaymentPage from './pages/PaymentPage';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from './components/foooter';
import logo from './assets/logo.png';

function App() {
    return (
        <Router>
            {/* Bootstrap Navbar */}
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img
                            src={logo}
                            alt="Loja de Bilhetes Logo"
                            width="40"
                            height="40"
                            className="d-inline-block align-top me-2"
                        />
                        Loja de Bilhetes
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/">Página Principal</Nav.Link>
                            <Nav.Link as={Link} to="/verificar">Bilhetes</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Page Routes */}
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/sell" element={<SellPage />} />
                <Route path="/busca" element={<GameList />} />
                <Route path="/payment" element={<PaymentPage />} />
                <Route path="/buy/:id" element={<BuyPage />} /> 
                <Route path="/verificar" element={<VerifyTicketPage />} />
            </Routes>
            <Footer /> {Footer}
        </Router>
    );
}

export default App;
