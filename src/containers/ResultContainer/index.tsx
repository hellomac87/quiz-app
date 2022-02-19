import ResultTime from 'src/components/result/ResultTime';
import { getHHMMSSFromSeconds } from 'src/libs/result';
import { useStore } from 'src/store';

function ResultContainer() {
    const { seconds } = useStore((state) => state);

    const time = getHHMMSSFromSeconds(seconds);

    return (
        <>
            <ResultTime time={time} />
        </>
    );
}

export default ResultContainer;
