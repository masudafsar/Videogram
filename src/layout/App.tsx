import React from "react";

import {Container} from "../components/container/Container";
import {Header} from "../components/header/Header";

import styles from './App.module.scss'
import {Timeline} from "../components/timeline/Timeline";

interface Props {
}

export const App: React.FC<Props> = () => {
    return (
        <>
            <Header/>

            <div className={styles.TimelineContainer}>
                <Timeline />
            </div>
        </>
    );
}
