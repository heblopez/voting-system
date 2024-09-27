import { VotingProvider } from './context/VotingContext';
import TotalVotos from './components/TotalVotos';
import Filtro from './components/Filtro';
import Candidate from './components/Candidate';
import VotosIndividuales from './components/VotosIndividuales';

const App = () => {
    return (
        <VotingProvider>
            <div className="p-4">
                <h1 className="text-2xl font-bold">Sistema de Votaciones</h1>
                <Filtro />
                <TotalVotos />
                <VotosIndividuales />
                <div className="grid grid-cols-2 gap-4">
                    <Candidate id="C1" />
                    <Candidate id="C2" />
                    <Candidate id="C3" />
                    <Candidate id="C4" />
                </div>
            </div>
        </VotingProvider>
    );
};

export default App;
