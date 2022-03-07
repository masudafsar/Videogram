import React from "react";

import styles from './App.module.scss'

interface Props {

}

export const App: React.FC<Props> = () => {
    return (
        <div className={styles.App}>
            HELLO WORLD!
        </div>
    );
}
