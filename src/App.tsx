import { VotingProvider } from "./context/VotingContext";
import TotalVotos from "./components/TotalVotos";
import Filtro from "./components/Filtro";
import Candidate from "./components/Candidate";
import VotosIndividuales from "./components/VotosIndividuales";

const App = () => {
  return (
    <VotingProvider>
      <div className="p-4 bg-gray-100 w-full max-w-screen-md text-center min-h-screen">
        <h1 className="text-3xl font-bold text-center mb-6">
          Sistema de Votaciones
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((id) => (
            <Candidate key={id} id={`candidate-${id}`} />
          ))}
        </div>
        <div className="flex flex-col sm:flex-row sm:gap-4 justify-center">
          <Filtro />
          <div className="w-full sm:w-1/2">
            <TotalVotos />
            <VotosIndividuales />
          </div>
        </div>
      </div>
    </VotingProvider>
  );
};

export default App;
