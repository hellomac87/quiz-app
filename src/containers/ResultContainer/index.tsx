import { useMount } from 'react-use';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';

import { routes } from 'src/constants/routes';
import { useStore } from 'src/store';
import { ChartData } from 'src/types/result';
import { getHHMMSSFromSeconds } from 'src/libs/result';

import Layout from 'src/components/common/Layout';
import ResultTime from 'src/components/result/ResultTime';
import ResultCorrectionAmount from 'src/components/result/ResultCorrectionAmount';
import ResultChart from 'src/components/result/ResultChart';
import ResultAction from 'src/components/result/ResultAction';
import ResultCorrectionNote from 'src/components/result/ResultCorrectionNote';

function ResultContainer() {
    const navigate = useNavigate();
    const { quizzes, myAnswersHistory, resetMyAnswerHistory, setIsRetry, startTime, endTime } = useStore(
        (state) => state
    );

    const corrections = myAnswersHistory.filter((answer) => answer.correct);
    const incorrections = myAnswersHistory.filter((answer) => !answer.correct);

    const chartData: ChartData[] = [
        { name: 'correct', value: corrections.length },
        { name: 'incorrect', value: incorrections.length },
    ];

    const getDuration = (startTime: Date | null, endTime: Date | null) => {
        if (!startTime || !endTime) {
            return '';
        }
        const diffSeconds = dayjs(endTime).diff(dayjs(startTime), 's');

        return getHHMMSSFromSeconds(diffSeconds);
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
        <Layout>
            <ResultTime time={time} />
            <ResultCorrectionAmount
                total={quizzes.length}
                correctAmount={corrections.length}
                incorrectAmount={incorrections.length}
            />
            <ResultChart chartData={chartData} />
            <ResultAction onClickRetry={retry} />
            <ResultCorrectionNote incorrections={incorrections} />
        </Layout>
    );
}

export default ResultContainer;
