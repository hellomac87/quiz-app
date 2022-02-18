import { QuizType } from 'src/types/quiz';

import styles from './quiz.module.css';

type Props = {
    quiz?: QuizType;
};

function Quiz({ quiz }: Props) {
    if (!quiz) {
        return <div>loading...</div>;
    }

    const answers = suffle<string>([...quiz.incorrect_answers, quiz.correct_answer]);

    const handleClickAnswer = (answer: string) => () => {
        console.log(answer);
    };

    return (
        <div>
            <h1>{quiz.category}</h1>
            <h2 className={styles.question}>{quiz.question}</h2>
            <ul className={styles.answers}>
                {answers.map((answer, index) => {
                    const number = `${index + 1}. `;
                    return (
                        <li key={index} onClick={handleClickAnswer(answer)} className={styles.answer}>
                            {number}
                            {answer}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Quiz;

function suffle<T>(array: T[]) {
    return array
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
}
