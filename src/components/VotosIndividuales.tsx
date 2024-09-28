import { useVoting } from "../hooks/useVoting";

const VotosIndividuales = () => {
    const { votes, totalVotes, filter, selectedCandidates } = useVoting();

    return selectedCandidates.every( item => !item) ? null: (
        <div className="my-4 p-4 bg-white shadow rounded">
        <h2 className="text-xl font-semibold mb-4">Votos Individuales</h2>
        {votes.filter((_, index) => selectedCandidates[index]).map((vote, index) => {
            return (
                <div key={index} className="mb-2">
                    Candidato {index + 1}: {filter === 'percentage' ? ((totalVotes ? ((vote / totalVotes) * 100).toFixed(2) : 0) + ' %') : vote }
                </div>
            );
        })}
    </div>
    );

};

export default VotosIndividuales;
