import { useVoting } from "../hooks/useVoting";

const TotalVotos = () => {
    const { totalVotes } = useVoting();

    return (
        <div className="my-4">
            <h2 className="text-xl">Total Votos: {totalVotes}</h2>
        </div>
    );
};

export default TotalVotos;