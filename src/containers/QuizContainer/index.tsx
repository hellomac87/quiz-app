import { useState, useEffect } from 'react';

import { getQuiz } from 'src/api/quiz';
import { QuizParams, QuizType } from 'src/types/quiz';

import Quiz from 'src/components/quiz';

function QuizContainer() {
    const [quiz, setQuiz] = useState<QuizType[] | null>(null);
    useEffect(() => {
        const params: QuizParams = {
            amount: 10,
            category: 21,
            difficulty: 'easy',
            type: 'multiple',
        };
        void getQuiz(params).then((res) => {
            console.log(res.data);
            setQuiz(res.data.results);
        });
    }, []);
    return <Quiz />;
}

export default QuizContainer;
