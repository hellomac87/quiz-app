import { useStore } from 'src/store';
import { ChartData } from 'src/types/result';
import { getHHMMSSFromSeconds } from 'src/libs/result';

import ResultTime from 'src/components/result/ResultTime';
import ResultCorrctAmount from 'src/components/result/ResultCorrectAmount';
import ResultChart from 'src/components/result/ResultChart';

function ResultContainer() {
    const { seconds, myAnswersHistory } = useStore((state) => state);

    const correctAmount = myAnswersHistory.filter((answer) => answer.correct).length;
    const incorrectAmount = myAnswersHistory.filter((answer) => !answer.correct).length;

    const chartData: ChartData[] = [
        { name: 'correct', value: correctAmount },
        { name: 'incorrect', value: incorrectAmount },
    ];

    const time = getHHMMSSFromSeconds(seconds);

    return (
        <>
            <ResultTime time={time} />
            <ResultCorrctAmount correctAmount={correctAmount} incorrectAmount={incorrectAmount} />
            <ResultChart chartData={chartData} />
        </>
    );
}

export default ResultContainer;
