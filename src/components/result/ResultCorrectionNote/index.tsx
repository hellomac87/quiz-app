import { Answer } from 'src/store';

type Props = {
    incorrections: Answer[];
};

function ResultCorrectionNote({ incorrections }: Props) {
    if (incorrections.length < 1) return null;
    return (
        <div>
            <ul>
                {incorrections.map((answer) => {
                    return (
                        <li key={answer.myAnswer}>
                            <div>q: {answer.question}</div>
                            <div>a: {answer.myAnswer}</div>
                            <div>correctAnswer: {answer.correct_answer}</div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default ResultCorrectionNote;
