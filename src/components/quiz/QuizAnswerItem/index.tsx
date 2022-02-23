import { HTMLProps } from 'react';
import { AnswerResult } from 'src/types/quiz';

type Props = HTMLProps<HTMLLIElement> & {
    onClick(): void;
    number: string;
    answer: string;
    correct: AnswerResult;
};

function QuizAnswerItem({ onClick, number, answer, correct, ...rest }: Props) {
    return (
        <li onClick={onClick} className={rest.className}>
            <span>
                {number}
                {answer}
            </span>
            <span>
                {correct === AnswerResult.CORRECT && '맞았어요'}
                {correct === AnswerResult.INCORRECT && '틀렸어요'}
            </span>
        </li>
    );
}

export default QuizAnswerItem;
