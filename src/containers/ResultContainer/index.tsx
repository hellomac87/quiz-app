import { useStore } from 'src/store';
import { getHHMMSSFromSeconds } from 'src/libs/result';

import ResultTime from 'src/components/result/ResultTime';
import ResultCorrctAmount from 'src/components/result/ResultCorrectAmount';

function ResultContainer() {
    const { seconds, myAnswersHistory } = useStore((state) => state);

    const correctAmount = myAnswersHistory.filter((answer) => answer.correct).length;
    const incorrectAmount = myAnswersHistory.filter((answer) => !answer.correct).length;

    const time = getHHMMSSFromSeconds(seconds);

    return (
        <>
            <ResultTime time={time} />
            <ResultCorrctAmount correctAmount={correctAmount} incorrectAmount={incorrectAmount} />
        </>
    );
}

export default ResultContainer;
