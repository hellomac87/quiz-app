import create from 'zustand';

import { createMyAnswerSlice, MyAnswerType } from 'src/store/mySlice';
import { createQuizSlice, QuizType } from 'src/store/quizSlice';

export type Answer = {
    value: string;
    correct: boolean;
};

export type StoreType = {
    seconds: number;
    setSeconds(time: number): void;
    isRetry: boolean;
    setIsRetry(flag: boolean): void;
} & MyAnswerType &
    QuizType;

export const useStore = create<StoreType>((set, get) => ({
    ...createQuizSlice(set, get),
    ...createMyAnswerSlice(set, get),

    seconds: 0,
    setSeconds: (time: number) =>
        set((state) => ({
            ...state,
            seconds: time,
        })),
    isRetry: false,
    setIsRetry: (flag: boolean) =>
        set((state) => ({
            ...state,
            isRetry: flag,
        })),
}));
