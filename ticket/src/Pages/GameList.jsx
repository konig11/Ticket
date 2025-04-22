import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function GameList() {
    const [jogos, setJogos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:3001/api/bilhetes')
            .then((res) => res.json())
            .then((data) => {
                // Caminho correto para imagens na pasta public
                const jogosAtualizados = data.map((jogo) => ({
                    ...jogo,
                    flag1: `/assets/${jogo.flag1}`,
                    flag2: `/assets/${jogo.flag2}`,
                }));
                setJogos(jogosAtualizados);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error('Erro ao buscar jogos:', error);
                setIsLoading(false);
            });
    }, []);

    const handleSelect = (jogo) => {
        navigate(`/buy/${jogo.id}`);
    };

    if (isLoading) {
        return <p className="text-center">Carregando jogos...</p>;
    }

    return (
        <div className="container py-5">
            <h2 className="text-center mb-4">Escolha um jogo</h2>
            <div className="row">
                {jogos.map((jogo) => (
                    <div className="col-md-4 mb-4" key={jogo.id}>
                        <div className="card h-100 text-center shadow-sm">
                            <div className="card-body">
                                <img src={jogo.flag1} alt="Bandeira 1" width={40} />
                                <span className="mx-2">VS</span>
                                <img src={jogo.flag2} alt="Bandeira 2" width={40} />
                                <h5 className="card-title mt-3">{jogo.name}</h5>
                                <p className="card-text">Preço: {jogo.price} MTN</p>
                                <button className="btn btn-primary" onClick={() => handleSelect(jogo)}>
                                    Comprar Bilhete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GameList;
