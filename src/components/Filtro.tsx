import { useVoting } from "../hooks/useVoting";

const Filtro = () => {
    const { filter, setFilter, selectedCandidates, toggleCandidate, selectAll } = useVoting();

    return (
        <div className="my-4">
            <h2 className="text-xl">Filtro de Resultados</h2>
            <div>
                <label>
                    <input
                        type="radio"
                        name="filter"
                        value="percentage"
                        checked={filter === 'percentage'}
                        onChange={() => setFilter('percentage')}
                    /> Porcentaje
                </label>
                <label>
                    <input
                        type="radio"
                        name="filter"
                        value="total"
                        checked={filter === 'total'}
                        onChange={() => setFilter('total')}
                    /> Total
                </label>
            </div>
            <div className="my-4">
                <label>
                    <input
                        type="checkbox"
                        onChange={(e) => selectAll(e.target.checked)}
                        checked={selectedCandidates.every(Boolean)} // Marca si todos están seleccionados
                    /> Todos
                </label>
            </div>
            <div>
                {selectedCandidates.map((isSelected, index) => (
                    <label key={index}>
                        <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={() => toggleCandidate(index)}
                            disabled={selectedCandidates.every(Boolean) && !isSelected} // Desactiva si "Todos" está seleccionado
                        /> Candidato {index + 1}
                    </label>
                ))}
            </div>
        </div>
    );
};

export default Filtro;