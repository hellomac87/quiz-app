import { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

import styles from './Button.module.css';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    width?: number;
    fullWidth?: boolean;
    variant?: 'fill' | 'outline';
};

function Button({ children, width, fullWidth = false, variant = 'fill', ...rest }: React.PropsWithChildren<Props>) {
    return (
        <button
            {...rest}
            className={clsx(styles.container, styles[variant], { [styles.fullWidth]: fullWidth })}
            style={{ width }}
        >
            {children}
        </button>
    );
}

export default Button;
