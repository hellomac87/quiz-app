import { SetState, GetState } from 'zustand';

import { Answer, StoreType } from 'src/store';

export type MyAnswerType = {
    myAnswersHistory: Array<Answer>;
    setMyAnswersHistory(answer: Answer): void;
    resetMyAnswerHistory(): void;
};

export const createMyAnswerSlice = (set: SetState<StoreType>, get: GetState<StoreType>) => ({
    myAnswersHistory: [],
    setMyAnswersHistory: (answer: Answer) =>
        set((state) => ({
            ...state,
            myAnswersHistory: [...state.myAnswersHistory, answer],
        })),
    resetMyAnswerHistory: () =>
        set((state) => ({
            ...state,
            myAnswersHistory: [],
        })),
});
