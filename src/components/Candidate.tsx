import { useVoting } from "../hooks/useVoting";

interface CandidateProps {
    id: string;
}

const Candidate: React.FC<CandidateProps> = ({ id }) => {
    const { votes, castVote } = useVoting();
    const candidateIndex = parseInt(id.replace('candidate-', '')) - 1;

    return (
        <div className="grid gap-4 justify-items-center border p-4 bg-white shadow rounded-lg">
            <h3 className="text-lg font-semibold">Candidato {candidateIndex + 1}</h3>
            <button onClick={() => castVote(candidateIndex)} className="w-1/2 bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                Votar
            </button>
            <p className="mt-2">Votos: {votes[candidateIndex]}</p>
        </div>
    );
};

export default Candidate;