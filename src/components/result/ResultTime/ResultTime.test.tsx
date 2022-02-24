import renderer from 'react-test-renderer';

import ResultTime from './index';

describe('ResultTime test', () => {
    test('snapshot: no Props', () => {
        const tree = renderer.create(<ResultTime time={'time'} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
