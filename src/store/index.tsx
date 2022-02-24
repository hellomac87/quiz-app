import create from 'zustand';

import { createMyAnswerSlice, MyAnswerType } from 'src/store/mySlice';
import { createQuizSlice, QuizType } from 'src/store/quizSlice';
import { createResultSlice, ResultType } from './resultSlice';

export type Answer = {
    myAnswer: string;
    correct_answer: string;
    correct: boolean;
    question: string;
};

export type StoreType = {
    isRetry: boolean;
    setIsRetry(flag: boolean): void;
} & MyAnswerType &
    QuizType &
    ResultType;

export const useStore = create<StoreType>((set, get) => ({
    ...createQuizSlice(set, get),
    ...createMyAnswerSlice(set, get),
    ...createResultSlice(set, get),
    isRetry: false,
    setIsRetry: (flag: boolean) =>
        set((state) => ({
            ...state,
            isRetry: flag,
        })),
}));
