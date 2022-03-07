import React from "react";

import styles from "./Header.module.scss";

interface Props {
}

export const Header: React.FC<Props> = ({}) => {
    return (
        <header className={styles.Header}>
            <h1>Aparatgram</h1>
        </header>
    )
        ;
}