import Button from 'src/components/common/Button';

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
            <Button onClick={handleClick} variant={displayLast ? 'fill' : 'outline'} fullWidth>
                {displayNext && '다음'}
                {displayLast && '결과 보기'}
            </Button>
        </div>
    );
}

export default QuizAction;
