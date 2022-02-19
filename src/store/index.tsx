import create from 'zustand';

export type Answer = {
    value: string;
    correct: boolean;
};

export type GlobalState = {
    myAnswersHistory: Array<Answer>;
    setMyAnswersHistory(answer: Answer): void;
    seconds: number;
    setSeconds(time: number): void;
};

export const useStore = create<GlobalState>((set) => ({
    myAnswersHistory: [],
    setMyAnswersHistory: (answer: Answer) =>
        set((state) => ({
            ...state,
            myAnswersHistory: [...state.myAnswersHistory, answer],
        })),
    seconds: 0,
    setSeconds: (time: number) =>
        set((state) => ({
            ...state,
            seconds: time,
        })),
}));
