import { useVoting } from "../hooks/useVoting";

const Filtro = () => {
    const { filter, setFilter, selectedCandidates, toggleCandidate, selectAll } = useVoting();

    return (
        <div className="flex flex-col w-full sm:w-1/2 items-center my-4 p-4 bg-white shadow rounded-lg">
            <h2 className="text-xl font-semibold">Filtro de Resultados</h2>
            <div className="flex space-x-4 my-2">
                <label className="flex items-center">
                    <input
                        type="radio"
                        name="filter"
                        value="percentage"
                        checked={filter === 'percentage'}
                        onChange={() => setFilter('percentage')}
                        className="mr-2"
                    /> Porcentaje
                </label>
                <label className="flex items-center">
                    <input
                        type="radio"
                        name="filter"
                        value="total"
                        checked={filter === 'total'}
                        onChange={() => setFilter('total')}
                        className="mr-2"
                    /> Total
                </label>
            </div>
            <div className="my-4">
                <label className="flex items-center">
                    <input
                        type="checkbox"
                        onChange={(e) => selectAll(e.target.checked)}
                        checked={selectedCandidates.every(Boolean)}
                        className="mr-2"
                    /> Todos
                </label>
            </div>
            <div>
                {selectedCandidates.map((isSelected, index) => (
                    <label key={index} className="flex items-center">
                        <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={() => toggleCandidate(index)}
                            disabled={selectedCandidates.every(Boolean) && !isSelected}
                            className="mr-2"
                        /> Candidato {index + 1}
                    </label>
                ))}
            </div>
        </div>
    );
};

export default Filtro;