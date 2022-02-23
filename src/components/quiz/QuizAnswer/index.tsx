import { useMemo } from 'react';
import clsx from 'clsx';
import { decode } from 'html-entities';

import { Answer } from 'src/store';
import { AnswerResult, Quiz } from 'src/types/quiz';
import { suffleQuiz } from 'src/libs/quiz';

import styles from './QuizAnswer.module.css';
import QuizAnswerItem from '../QuizAnswerItem';

type Props = {
    quiz: Quiz;
    currentAnswer?: Answer;
    onClickAnswer(answer: string): void;
    step: string;
};

function QuizAnswer({ quiz, currentAnswer, onClickAnswer, step }: Props) {
    const answers = useMemo(() => {
        return suffleQuiz<string>([...quiz.incorrect_answers, quiz.correct_answer]);
    }, [quiz]);

    const handleClickAnswer = (answer: string) => () => {
        onClickAnswer(answer);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.question}>
                {decode(quiz.question)}
                <span className={styles.step}>{step}</span>
            </h1>
            <ul className={styles.answers}>
                {answers.map((answer, index) => {
                    const number = `${index + 1}. `;

                    const getCorrect = () => {
                        const selectedIndex = currentAnswer && answers.indexOf(currentAnswer.myAnswer);
                        if (selectedIndex !== index) return AnswerResult.NONE;
                        return quiz.correct_answer === currentAnswer?.myAnswer
                            ? AnswerResult.CORRECT
                            : AnswerResult.INCORRECT;
                    };

                    const correct = getCorrect();

                    return (
                        <QuizAnswerItem
                            key={index}
                            onClick={handleClickAnswer(answer)}
                            number={number}
                            answer={answer}
                            correct={correct}
                        />
                    );
                })}
            </ul>
        </div>
    );
}

export default QuizAnswer;
