import Card from 'src/components/common/Card';

import styles from './ResultTime.module.css';

type Props = {
    time: string;
};

function ResultTime({ time }: Props) {
    return (
        <Card className={styles.container}>
            <span>{'문제 푸는데 걸린 시간'}</span>
            <span>{time}</span>
        </Card>
    );
}

export default ResultTime;
