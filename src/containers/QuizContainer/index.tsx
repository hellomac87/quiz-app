import { useState, useEffect } from 'react';

import { getQuiz } from 'src/api/quiz';
import { QuizParams, QuizType } from 'src/types/quiz';

import Quiz from 'src/components/quiz';

function QuizContainer() {
    const [quiz, setQuiz] = useState<QuizType[] | null>(null);

    const loadQuiz = async () => {
        const params: QuizParams = {
            amount: 10,
            category: 21,
            difficulty: 'easy',
            type: 'multiple',
        };
        try {
            const res = await getQuiz(params);
            setQuiz(res.data.results);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        void loadQuiz();
    }, []);
    return <Quiz />;
}

export default QuizContainer;
