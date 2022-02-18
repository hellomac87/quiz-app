import { useState, useEffect } from 'react';

import { getQuiz } from 'src/api/quiz';
import { QuizParams, QuizType } from 'src/types/quiz';

import Quiz from 'src/components/quiz';

function QuizContainer() {
    const [quizzes, setQuizzes] = useState<QuizType[] | null>(null);
    const [step, setStep] = useState(0);

    const currentQuiz = quizzes?.[step];

    const loadQuiz = async () => {
        const params: QuizParams = {
            amount: 10,
            category: 21,
            difficulty: 'easy',
            type: 'multiple',
        };
        try {
            const res = await getQuiz(params);
            setQuizzes(res.data.results);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        void loadQuiz();
    }, []);

    return <Quiz quiz={currentQuiz} />;
}

export default QuizContainer;
