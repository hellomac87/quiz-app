import { useState } from 'react';
import { useAsync } from 'react-use';
import { useNavigate } from 'react-router-dom';

import { getQuiz } from 'src/api/quiz';
import { Answer, useStore } from 'src/store';
import { routes } from 'src/constants/routes';
import { QuizParams } from 'src/types/quiz';

import Layout from 'src/components/common/Layout';
import QuizAnswer from 'src/components/quiz/QuizAnswer';
import QuizAction from 'src/components/quiz/QuizAction';

const AMOUNT = 10;

function QuizContainer() {
    const navigate = useNavigate();
    const { quizzes, setQuizzes, myAnswersHistory, setMyAnswersHistory, isRetry, setStartTime, setEndTime } = useStore(
        (state) => state
    );
    const [step, setStep] = useState(0);

    const lastQuiz = step === AMOUNT - 1;
    const currentQuiz = quizzes?.[step];
    const currentMyAnswer = myAnswersHistory[step] as Answer | undefined;
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
            console.log(res);
            setQuizzes(res.data.results);
        } catch (error) {
            console.error(error);
        }
    };

    const handleClickAnswer = (answer: string) => {
        if (!currentQuiz || currentMyAnswer) return;

        const myAnswer: Answer = {
            myAnswer: answer,
            correct: answer === currentQuiz.correct_answer,
            correct_answer: currentQuiz.correct_answer,
            question: currentQuiz.question,
        };

        lastQuiz && setEndTime(new Date());

        setMyAnswersHistory(myAnswer);
    };

    const handleClickNext = () => {
        setStep(step + 1);
    };

    const handleClickLast = () => {
        navigate(routes.result);
    };

    useAsync(async () => {
        if (isRetry && quizzes.length > 0) return;
        setStartTime(new Date());
        await loadQuiz();
    });

    if (!currentQuiz) {
        return <div>loading quiz...</div>;
    }

    return (
        <Layout>
            <QuizAnswer quiz={currentQuiz} onClickAnswer={handleClickAnswer} currentAnswer={currentMyAnswer} />
            <QuizAction
                displayNext={displayNext}
                onClickNext={handleClickNext}
                displayLast={displayLast}
                onClickLast={handleClickLast}
            />
        </Layout>
    );
}

export default QuizContainer;
