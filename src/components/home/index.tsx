import styles from './home.module.css';

type Props = {
    onClick(): void;
};

function Home({ onClick }: Props) {
    return (
        <section className={styles.container}>
            <button className={styles.container} onClick={onClick}>
                Start
            </button>
        </section>
    );
}

export default Home;
