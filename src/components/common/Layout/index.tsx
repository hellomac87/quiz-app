import styles from './Layout.module.css';

type Props = {};

function Layout({ children }: React.PropsWithChildren<Props>) {
    return <div className={styles.container}>{children}</div>;
}

export default Layout;
