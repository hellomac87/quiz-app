import styles from './QuizAction.module.css';

type Props = {
    displayNext: boolean;
    onClickNext: () => void;
    displayLast: boolean;
    onClickLast: () => void;
};

function QuizAction({ displayNext, onClickNext, displayLast, onClickLast }: Props) {
    const handleClick = () => {
        displayNext ? onClickNext() : onClickLast();
    };
    if (!displayNext && !displayLast) {
        return null;
    }
    return (
        <div className={styles.container}>
            <button onClick={handleClick} className={styles.button}>
                {displayNext && 'Next Quiz'}
                {displayLast && 'Show Result'}
            </button>
        </div>
    );
}

export default QuizAction;
