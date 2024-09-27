import { useVoting } from "../hooks/useVoting";

interface CandidateProps {
    id: string;
}

const Candidate: React.FC<CandidateProps> = ({ id }) => {
    const { votes, castVote } = useVoting();
    const candidateIndex = parseInt(id.replace('C', '')) - 1;

    return (
        <div className="border p-4">
            <h3 className="text-lg">Candidato {id}</h3>
            <button onClick={() => castVote(candidateIndex)} className="bg-blue-500 text-white p-2">
                Votar
            </button>
            <p>Votos: {votes[candidateIndex]}</p>
        </div>
    );
};

export default Candidate;