import { useMemo } from 'react';

import { Quiz } from 'src/types/quiz';
import { suffleQuiz } from 'src/libs/quiz';

import Card from 'src/components/common/Card';

import styles from './QuizAnswer.module.css';

type Props = {
    quiz: Quiz;
    onClickAnswer(answer: string): void;
};

function QuizAnswer({ quiz, onClickAnswer }: Props) {
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
                        <Card key={index} onClick={handleClickAnswer(answer)} className={styles.answer}>
                            {number}
                            {answer}
                        </Card>
                    );
                })}
            </ul>
        </div>
    );
}

export default QuizAnswer;
