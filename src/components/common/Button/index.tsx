import { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

import styles from './Button.module.css';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    width?: number;
    fullWidth?: boolean;
};

function Button({ children, width, fullWidth = false, ...rest }: React.PropsWithChildren<Props>) {
    return (
        <button {...rest} className={clsx(styles.container, { [styles.fullWidth]: fullWidth })} style={{ width }}>
            {children}
        </button>
    );
}

export default Button;
