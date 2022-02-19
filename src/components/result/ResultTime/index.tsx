import Card from 'src/components/common/Card';
import styles from './ResultTime.module.css';

type Props = {
    time: string;
};

function ResultTime({ time }: Props) {
    return (
        <div className={styles.container}>
            <Card>{time}</Card>
        </div>
    );
}

export default ResultTime;
