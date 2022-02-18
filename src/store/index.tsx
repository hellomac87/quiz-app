import create from 'zustand';

export type Answer = {
    value: string;
    status: boolean;
};

export type GlobalStateType = {
    myAnswersHistory: Array<Answer>;
    setMyAnswersHistory(answer: Answer): void;
};

export const useStore = create<GlobalStateType>((set) => ({
    myAnswersHistory: [],
    setMyAnswersHistory: (answer: Answer) =>
        set((state) => ({
            ...state,
            myAnswersHistory: [...state.myAnswersHistory, answer],
        })),
}));
