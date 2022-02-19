import Card from 'src/components/common/Card';

type Props = {
    correctAmount: number;
    incorrectAmount: number;
};

function ResultCorrctAmount({ correctAmount, incorrectAmount }: Props) {
    return (
        <Card>
            <div>correct: {correctAmount}</div>
            <div>incorrect: {incorrectAmount}</div>
        </Card>
    );
}

export default ResultCorrctAmount;
