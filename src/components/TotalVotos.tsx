import { useVoting } from "../hooks/useVoting";

const TotalVotos = () => {
    const { totalVotes } = useVoting();

    return (
        <div className="my-4 p-4 bg-white shadow rounded">
            <h2 className="text-xl font-semibold">Total Votos: {totalVotes}</h2>
        </div>
    );
};

export default TotalVotos;