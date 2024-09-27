import { useContext } from "react";
import { VotingContext } from "../context/VotingContext";

export const useVoting = () => {
    const context = useContext(VotingContext);
    if (!context) {
        throw new Error('useVoting must be used within a VotingProvider');
    }
    return context;
};
