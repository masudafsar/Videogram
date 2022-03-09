import React from "react";

import styles from "./FullScreen.module.scss";

export const FullScreen: React.FC = ({children}) => {
    return (
        <div className={styles.FullScreen}>
            {children}
        </div>
    );
}
