import { routes } from 'src/constants/routes';

import styles from './Layout.module.css';

type Props = {};

function Layout({ children }: React.PropsWithChildren<Props>) {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <a href={routes.home}>{'CLASSTING'}</a>
            </header>
            {children}
        </div>
    );
}

export default Layout;
