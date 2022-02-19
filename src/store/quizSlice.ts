import { StoreType } from 'src/store';
import { Quiz } from 'src/types/quiz';
import { SetState, GetState } from 'zustand';

export type QuizType = {
    quizzes: Quiz[];
    setQuizzes(quizzes: Quiz[]): void;
};

export const createQuizSlice = (set: SetState<StoreType>, get: GetState<StoreType>) => ({
    quizzes: [],
    setQuizzes: (quizzes: Quiz[]) =>
        set((state: StoreType) => ({
            ...state,
            quizzes,
        })),
});
