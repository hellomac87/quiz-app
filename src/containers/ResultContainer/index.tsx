import { useMount } from 'react-use';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';

import { routes } from 'src/constants/routes';
import { useStore } from 'src/store';
import { ChartData } from 'src/types/result';
import { getHHMMSSFromSeconds } from 'src/libs/result';

import ResultTime from 'src/components/result/ResultTime';
import ResultCorrctAmount from 'src/components/result/ResultCorrectAmount';
import ResultChart from 'src/components/result/ResultChart';
import ResultAction from 'src/components/result/ResultAction';

function ResultContainer() {
    const navigate = useNavigate();
    const { myAnswersHistory, resetMyAnswerHistory, setIsRetry, startTime, endTime } = useStore((state) => state);

    const correctAmount = myAnswersHistory.filter((answer) => answer.correct).length;
    const incorrectAmount = myAnswersHistory.filter((answer) => !answer.correct).length;

    const chartData: ChartData[] = [
        { name: 'correct', value: correctAmount },
        { name: 'incorrect', value: incorrectAmount },
    ];

    const getDuration = (startTime: Date | null, endTime: Date | null) => {
        if (!startTime || !endTime) {
            return '';
        }
        const diffSeconds = dayjs(endTime).diff(dayjs(startTime), 's');

        return dayjs(diffSeconds).format('HH:mm:ss');
    };

    const time = getDuration(startTime, endTime);

    const retry = () => {
        resetMyAnswerHistory();
        setIsRetry(true);
        navigate(routes.quiz);
    };

    useMount(() => {
        if (myAnswersHistory.length < 1) {
            navigate(routes.home);
        }
        setIsRetry(false);
    });

    return (
        <>
            <ResultTime time={time} />
            <ResultCorrctAmount correctAmount={correctAmount} incorrectAmount={incorrectAmount} />
            <ResultChart chartData={chartData} />
            <ResultAction onClickRetry={retry} />
        </>
    );
}

export default ResultContainer;
