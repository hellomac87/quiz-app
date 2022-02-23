import renderer from 'react-test-renderer';
import { AnswerResult } from 'src/types/quiz';

import QuizAnswerItem from './index';

const onClick = () => {
    console.log('onClick');
};

const answer = 'Is it correct to write test code like this?';

describe('QuizAnswerItem test', () => {
    test('snapshot: no Props', () => {
        const tree = renderer
            .create(<QuizAnswerItem onClick={onClick} answer={answer} correct={AnswerResult.CORRECT} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
