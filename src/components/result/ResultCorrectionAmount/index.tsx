import Card from 'src/components/common/Card';

import styles from './ResultCorrectionAmount.module.css';

type Props = {
    total: number;
    correctAmount: number;
    incorrectAmount: number;
};

function ResultCorrectionAmount({ total, correctAmount, incorrectAmount }: Props) {
    return (
        <Card className={styles.container}>
            <span>총 문제 수: {total}</span>
            <span>맞힌 개수: {correctAmount}</span>
            <span>틀린 개수: {incorrectAmount}</span>
        </Card>
    );
}

export default ResultCorrectionAmount;
