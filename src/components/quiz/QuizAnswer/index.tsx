import { useMemo } from 'react';
import clsx from 'clsx';

import { Answer } from 'src/store';
import { Quiz } from 'src/types/quiz';
import { suffleQuiz } from 'src/libs/quiz';

import styles from './QuizAnswer.module.css';

type Props = {
    quiz: Quiz;
    currentAnswer?: Answer;
    onClickAnswer(answer: string): void;
};

function QuizAnswer({ quiz, currentAnswer, onClickAnswer }: Props) {
    const answers = useMemo(() => {
        return suffleQuiz<string>([...quiz.incorrect_answers, quiz.correct_answer]);
    }, [quiz]);

    const handleClickAnswer = (answer: string) => () => {
        onClickAnswer(answer);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.question}>{quiz.question}</h1>
            <ul className={styles.answers}>
                {answers.map((answer, index) => {
                    const number = `${index + 1}. `;

                    const getCorrect = () => {
                        const selectedIndex = currentAnswer && answers.indexOf(currentAnswer.myAnswer);
                        if (selectedIndex !== index) return undefined;
                        return quiz.correct_answer === currentAnswer?.myAnswer;
                    };

                    const correct = getCorrect();

                    return (
                        <li
                            key={index}
                            onClick={handleClickAnswer(answer)}
                            className={clsx(
                                styles.answer,
                                { [styles.correct]: correct === true },
                                { [styles.incorrect]: correct === false }
                            )}
                        >
                            <span>
                                {number}
                                {answer}
                            </span>
                            <span>
                                {correct === true && '맞았어요'}
                                {correct === false && '틀렸어요'}
                            </span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default QuizAnswer;
