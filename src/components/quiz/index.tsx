import { QuizType } from 'src/types/quiz';

type Props = {
    quiz?: QuizType;
};

function Quiz({ quiz }: Props) {
    if (!quiz) {
        return <div>loading...</div>;
    }

    const answers = suffle<string>([...quiz.incorrect_answers, quiz.correct_answer]);

    const handleClickAnswer = (answer: string) => () => {
        console.log(answer);
    };

    return (
        <div>
            <div>{quiz.category}</div>
            <div>{quiz.question}</div>
            <ul>
                {answers.map((answer, index) => {
                    const number = `${index + 1}. `;
                    return (
                        <li key={index} onClick={handleClickAnswer(answer)}>
                            {number}
                            {answer}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Quiz;

function suffle<T>(array: T[]) {
    return array
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
}
