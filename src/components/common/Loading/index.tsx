import { Rings } from 'react-loader-spinner';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import styles from './Loading.module.css';

type Props = {
    message?: string;
};

function Loading({ message }: Props) {
    return (
        <div className={styles.container}>
            <Rings color='#00c896' height={80} width={80} />
            <p className={styles.message}>{message ?? 'Loading...'}</p>
        </div>
    );
}

export default Loading;
