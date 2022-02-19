import clsx from 'clsx';
import React from 'react';
import styles from './Card.module.css';

type Props = {
    className?: string;
    onClick?: () => void;
};

function Card({ children, className, onClick }: React.PropsWithChildren<Props>) {
    return (
        <div className={clsx(styles.container, className)} onClick={onClick}>
            {children}
        </div>
    );
}

export default Card;
