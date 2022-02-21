import { useState } from 'react';
import { useAsync } from 'react-use';
import { useNavigate } from 'react-router-dom';

import { getQuiz } from 'src/api/quiz';
import { Answer, useStore } from 'src/store';
import { routes } from 'src/constants/routes';
import { QuizParams } from 'src/types/quiz';

import Layout from 'src/components/common/Layout';
import Loading from 'src/components/common/Loading';
import QuizAnswer from 'src/components/quiz/QuizAnswer';
import QuizAction from 'src/components/quiz/QuizAction';

const AMOUNT = 5;

function QuizContainer() {
    const navigate = useNavigate();
    const { quizzes, setQuizzes, myAnswersHistory, setMyAnswersHistory, isRetry, setStartTime, setEndTime } = useStore(
        (state) => state
    );
    const [stepIndex, setStepIndex] = useState(0);

    const lastQuiz = stepIndex === AMOUNT - 1;
    const currentQuiz = quizzes?.[stepIndex];
    const currentMyAnswer = myAnswersHistory[stepIndex] as Answer | undefined;
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
            myAnswer: answer,
            correct: answer === currentQuiz.correct_answer,
            correct_answer: currentQuiz.correct_answer,
            question: currentQuiz.question,
        };

        lastQuiz && setEndTime(new Date());

        setMyAnswersHistory(myAnswer);
    };

    const handleClickNext = () => {
        setStepIndex(stepIndex + 1);
    };

    const handleClickLast = () => {
        navigate(routes.result);
    };

    useAsync(async () => {
        if (isRetry) return;
        setStartTime(new Date());
        await loadQuiz();
    });

    return (
        <Layout>
            {!currentQuiz && <Loading message={'문제를 불러오는 중이에요'} />}
            {currentQuiz && (
                <>
                    <QuizAnswer
                        quiz={currentQuiz}
                        onClickAnswer={handleClickAnswer}
                        currentAnswer={currentMyAnswer}
                        step={`(${stepIndex + 1}/${quizzes.length})`}
                    />
                    <QuizAction
                        displayNext={displayNext}
                        onClickNext={handleClickNext}
                        displayLast={displayLast}
                        onClickLast={handleClickLast}
                    />
                </>
            )}
        </Layout>
    );
}

export default QuizContainer;
