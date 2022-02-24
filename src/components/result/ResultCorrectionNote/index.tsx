import { decode } from 'html-entities';

import { Answer } from 'src/store';

import Card from 'src/components/common/Card';

import styles from './ResultCorrectionNote.module.css';

type Props = {
    incorrections: Answer[];
};

function ResultCorrectionNote({ incorrections }: Props) {
    if (incorrections.length < 1) return null;
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>🗒 오답노트</h2>
            <ul className={styles.list}>
                {incorrections.map((answer) => {
                    return (
                        <li key={answer.myAnswer} className={styles.item}>
                            <Card>
                                <div className={styles.question}>{decode(answer.question)}</div>
                                <div className={styles.correctAnswer}>정답: {answer.correct_answer}</div>
                            </Card>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default ResultCorrectionNote;
