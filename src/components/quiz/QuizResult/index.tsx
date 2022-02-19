import clsx from 'clsx';

import styles from './QuizResult.module.css';

type Props = {
    currentResult?: boolean;
};

function QuizResult({ currentResult }: Props) {
    if (currentResult === undefined) return null;
    return (
        <div
            className={clsx(
                styles.container,
                { [styles.correct]: currentResult },
                { [styles.incorrect]: !currentResult }
            )}
        >
            {currentResult ? 'correct' : 'incorrect'}
        </div>
    );
}

export default QuizResult;
