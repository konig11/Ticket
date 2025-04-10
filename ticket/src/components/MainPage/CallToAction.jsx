import { useNavigate } from 'react-router-dom';
function CallToAction() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/busca');
    };
    return (
        <div className="bg-dark text-white text-center py-5">
            <h2>Adquira ja os seus bilhetes!</h2>
            <button className="btn btn-warning btn-lg mt-3" onClick={handleClick}>Procurar Jogos</button>
        </div>
    );
}

export default CallToAction;
