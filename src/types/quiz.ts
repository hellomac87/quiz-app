export type QuizResponse = {
    data: {
        response_code: number;
        results: QuizType[];
    };
    status: 200;
    statusText: string;
};

export type QuizType = {
    category: string;
    correct_answer: string;
    difficulty: 'easy';
    incorrect_answers: string[];
    question: string;
    type: 'multiple';
};

export type QuizParams = {
    amount: number;
    category: number;
    difficulty: 'easy';
    type: 'multiple';
};
