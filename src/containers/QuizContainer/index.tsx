import { useState } from 'react';
import { useAsync, useToggle } from 'react-use';

import { Answer, useStore } from 'src/store';
import { getQuiz } from 'src/api/quiz';
import { QuizParams, QuizType } from 'src/types/quiz';

import QuizAnswer from 'src/components/quiz/QuizAnswer';
import QuizAction from 'src/components/quiz/QuizAction';

const AMOUNT = 10;

function QuizContainer() {
    const { myAnswersHistory, setMyAnswersHistory } = useStore((state) => state);
    const [quizzes, setQuizzes] = useState<QuizType[] | null>(null);
    const [step, setStep] = useState(0);

    const currentQuiz = quizzes?.[step];
    const currentMyAnswer = myAnswersHistory[step];
    const displayNext = Boolean(currentMyAnswer);

    const loadQuiz = async () => {
        const params: QuizParams = {
            amount: AMOUNT,
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

    const handleClickAnswer = (answer: string) => {
        if (!currentQuiz || currentMyAnswer) return;

        const myAnswer: Answer = {
            value: answer,
            status: answer === currentQuiz.correct_answer,
        };

        setMyAnswersHistory(myAnswer);
    };

    const handleClickNext = () => {
        setStep(step + 1);
    };

    useAsync(async () => {
        await loadQuiz();
        console.log('asdf');
    });

    if (!currentQuiz) {
        return <div>loading quiz...</div>;
    }

    return (
        <>
            <QuizAnswer quiz={currentQuiz} onClickAnswer={handleClickAnswer} />
            <QuizAction displayNext={displayNext} onClickNext={handleClickNext} />
        </>
    );
}

export default QuizContainer;
