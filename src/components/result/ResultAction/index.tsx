import Button from 'src/components/common/Button';

import styles from './ResultAction.module.css';

type Props = {
    onClickRetry(): void;
    onClickOtherQuiz(): void;
};

function ResultAction({ onClickRetry, onClickOtherQuiz }: Props) {
    return (
        <div className={styles.container}>
            <Button onClick={onClickRetry}>{'같은 문제 다시 풀기'}</Button>
            <Button onClick={onClickOtherQuiz} variant='outline'>
                {'다른 문제 풀기'}
            </Button>
        </div>
    );
}

export default ResultAction;
