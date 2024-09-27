import { useVoting } from "../hooks/useVoting";

const VotosIndividuales = () => {
    const { votes, totalVotes, filter, selectedCandidates } = useVoting();

    return (
        <div>
            {votes.map((vote, index) => {
                if (!selectedCandidates[index]) return null;
                return (
                    <div key={index}>
                        Candidato {index + 1}: {filter === 'percentage' ? ((totalVotes ? ((vote / totalVotes) * 100).toFixed(2) : 0) + ' %') : vote }
                    </div>
                );
            })}
        </div>
    );
};

export default VotosIndividuales;
