import React from "react";
import cn from "classnames";

import styles from "./Container.module.scss";

interface Props {
    className?: string;
}

export const Container: React.FC<Props> = ({children, className}) => {
    return (
        <div className={cn(styles.Container, className)}>
            {children}
        </div>
    );
}
