import { useMount } from 'react-use';
import Button from 'src/components/common/Button';

import styles from './home.module.css';

type Props = {
    onClick(): void;
};

function Home({ onClick }: Props) {
    useMount(() => {
        // TODO reset state
    });
    return (
        <section className={styles.container}>
            <h1 className={styles.title}>{'퀴즈 풀기에 도전해 보세요!'}</h1>
            <Button onClick={onClick} width={300}>
                {'퀴즈 시작하기'}
            </Button>
        </section>
    );
}

export default Home;
