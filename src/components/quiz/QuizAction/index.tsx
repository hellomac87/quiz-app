import styles from './QuizAction.module.css';

type Props = {
    displayNext: boolean;
    onClickNext: () => void;
};

function QuizAction({ displayNext, onClickNext }: Props) {
    if (!displayNext) {
        return null;
    }
    return (
        <div className={styles.container}>
            <button onClick={onClickNext}>Next Quiz</button>
        </div>
    );
}

export default QuizAction;
