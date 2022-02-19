type Props = {
    onClickRetry(): void;
};

function ResultAction({ onClickRetry }: Props) {
    return (
        <div>
            <button onClick={onClickRetry}>retry</button>
        </div>
    );
}

export default ResultAction;
