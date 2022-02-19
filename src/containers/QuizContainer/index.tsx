import { useState } from 'react';
import { useAsync } from 'react-use';
import { useNavigate } from 'react-router-dom';

import { getQuiz } from 'src/api/quiz';
import { Answer, useStore } from 'src/store';
import { routes } from 'src/constants/routes';
import { QuizParams, QuizType } from 'src/types/quiz';

import QuizAnswer from 'src/components/quiz/QuizAnswer';
import QuizAction from 'src/components/quiz/QuizAction';
import QuizResult from 'src/components/quiz/QuizResult';

const AMOUNT = 10;

function QuizContainer() {
    const navigate = useNavigate();
    const { myAnswersHistory, setMyAnswersHistory } = useStore((state) => state);
    const [quizzes, setQuizzes] = useState<QuizType[]>();
    const [step, setStep] = useState(0);

    const lastQuiz = step === AMOUNT - 1;
    const currentQuiz = quizzes?.[step];
    const currentMyAnswer = myAnswersHistory[step] as Answer | undefined;
    const currentResult = currentMyAnswer?.correct;
    const displayNext = Boolean(currentMyAnswer) && !lastQuiz;
    const displayLast = Boolean(currentMyAnswer) && lastQuiz;

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
            correct: answer === currentQuiz.correct_answer,
        };

        setMyAnswersHistory(myAnswer);
    };

    const handleClickNext = () => {
        setStep(step + 1);
    };

    const handleClickLast = () => {
        navigate(routes.result);
    };

    useAsync(async () => {
        await loadQuiz();
    });

    if (!currentQuiz) {
        return <div>loading quiz...</div>;
    }

    return (
        <>
            <QuizAnswer quiz={currentQuiz} onClickAnswer={handleClickAnswer} />
            <QuizResult currentResult={currentResult} />
            <QuizAction
                displayNext={displayNext}
                onClickNext={handleClickNext}
                displayLast={displayLast}
                onClickLast={handleClickLast}
            />
        </>
    );
}

export default QuizContainer;
