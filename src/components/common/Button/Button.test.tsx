import renderer from 'react-test-renderer';

import Button from 'src/components/common/Button';

const onClick = () => {
    console.log('onClick');
};

describe('Button test', () => {
    test('snapshot: no Props', () => {
        const tree = renderer.create(<Button>Button</Button>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('snapshot: onClick', () => {
        const tree = renderer.create(<Button onClick={onClick}>Button</Button>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
