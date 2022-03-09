import React from "react";

import styles from "./Loading.module.scss";

export const Loading: React.FC = ({children}) => {
    return (
        <div className={styles.Loading}>
            <div/>
            <div/>
            <div/>
            <div/>
        </div>
    );
}
