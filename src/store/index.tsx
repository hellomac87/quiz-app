import { QuizType } from 'src/types/quiz';
import create from 'zustand';

export type Answer = {
    value: string;
    correct: boolean;
};

export type GlobalState = {
    quizzes: QuizType[];
    setQuizzes(quizzes: QuizType[]): void;
    myAnswersHistory: Array<Answer>;
    setMyAnswersHistory(answer: Answer): void;
    resetMyAnswerHistory(): void;
    seconds: number;
    setSeconds(time: number): void;
    isRetry: boolean;
    setIsRetry(flag: boolean): void;
};

export const useStore = create<GlobalState>((set) => ({
    quizzes: [],
    setQuizzes: (quizzes: QuizType[]) =>
        set((state) => ({
            ...state,
            quizzes,
        })),
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
