import { useMemo } from 'react';

import { Quiz } from 'src/types/quiz';
import { suffleQuiz } from 'src/libs/quiz';

import styles from './QuizAnswer.module.css';
import clsx from 'clsx';
import { Answer } from 'src/store';

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

                    return (
                        <li key={index} onClick={handleClickAnswer(answer)} className={clsx(styles.answer)}>
                            {number}
                            {answer}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default QuizAnswer;
