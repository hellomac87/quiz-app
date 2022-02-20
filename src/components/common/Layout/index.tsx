import styles from './Layout.module.css';

type Props = {};

function Layout({ children }: React.PropsWithChildren<Props>) {
    return (
        <div className={styles.container}>
            <header className={styles.header}>{'CLASSTING'}</header>
            {children}
        </div>
    );
}

export default Layout;
