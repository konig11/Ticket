import { useNavigate } from 'react-router-dom';

const jogos = [
    {
        id: 1,
        name: 'Mo�ambique X Marrocos - Bilhetes VIP',
        price: 120,
        flag1: './src/assets/mozambique.png',
        flag2: './src/assets/morocco.png',
    },
    {
        id: 2,
        name: 'Mo�ambique X Sud�o - Bilhetes Normais',
        price: 80,
        flag1: './src/assets/mozambique.png',
        flag2: './src/assets/sudan.png',
    },
    {
        id: 3,
        name: 'Mo�ambique X Arg�lia - Bilhetes Normais',
        price: 50,
        flag1: './src/assets/mozambique.png',
        flag2: './src/assets/algeria.png',
    },
];

function GameList() {
    const navigate = useNavigate();

    const handleSelect = (jogo) => {
        navigate(`/buy/${jogo.id}`);
    };

    return (
        <div className="container py-5">
            <h2 className="text-center mb-4">Escolha um jogo</h2>
            <div className="row">
                {jogos.map((jogo) => (
                    <div className="col-md-4 mb-4" key={jogo.id}>
                        <div className="card h-100 text-center">
                            <div className="card-body">
                                <img src={jogo.flag1} alt="Flag1" width={40} />
                                <span className="mx-2">VS</span>
                                <img src={jogo.flag2} alt="Flag2" width={40} />
                                <h5 className="card-title mt-3">{jogo.name}</h5>
                                <p className="card-text">Pre�o: {jogo.price} MTN</p>
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
