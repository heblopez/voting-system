import { createContext, ReactNode, useState } from 'react';

interface VotingContextType {
    votes: number[];
    totalVotes: number;
    castVote: (candidateIndex: number) => void;
    filter: string;
    setFilter: (filter: string) => void;
    selectedCandidates: boolean[]; // Nuevo estado para los candidatos seleccionados
    toggleCandidate: (index: number) => void; // Función para alternar la selección de candidatos
    selectAll: (select: boolean) => void; // Función para seleccionar/deseleccionar todos
}

export const VotingContext = createContext<VotingContextType | undefined>(undefined);

export const VotingProvider = ({ children }: { children: ReactNode }) => {
    const [votes, setVotes] = useState<number[]>([0, 0, 0, 0]);
    const [filter, setFilter] = useState<string>('total');
    const [selectedCandidates, setSelectedCandidates] = useState<boolean[]>([true, true, true, true]); // Todos seleccionados por defecto

    const totalVotes = votes.reduce((acc, vote) => acc + vote, 0);

    const castVote = (candidateIndex: number) => {
        const newVotes = [...votes];
        newVotes[candidateIndex]++;
        setVotes(newVotes);
    };

    const toggleCandidate = (index: number) => {
        const newSelection = [...selectedCandidates];
        newSelection[index] = !newSelection[index];
        setSelectedCandidates(newSelection);
    };

    const selectAll = (select: boolean) => {
        setSelectedCandidates([select, select, select, select]);
    };

    return (
        <VotingContext.Provider value={{ votes, totalVotes, castVote, filter, setFilter, selectedCandidates, toggleCandidate, selectAll }}>
            {children}
        </VotingContext.Provider>
    );
};
