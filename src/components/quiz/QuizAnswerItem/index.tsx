import { HTMLProps } from 'react';
import clsx from 'clsx';

import { AnswerResult } from 'src/types/quiz';

import styles from './QuizAnswerItem.module.css';

type Props = HTMLProps<HTMLLIElement> & {
    onClick(): void;
    number?: string;
    answer: string;
    correct: AnswerResult;
};

function QuizAnswerItem({ onClick, number, answer, correct, ...rest }: Props) {
    return (
        <li
            onClick={onClick}
            className={clsx(
                styles.container,
                { [styles.correct]: correct === AnswerResult.CORRECT },
                { [styles.incorrect]: correct === AnswerResult.INCORRECT }
            )}
            {...rest}
        >
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
