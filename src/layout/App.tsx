import React from "react";

import {Container} from "../components/container/Container";
import {Header} from "../components/header/Header";

import styles from './App.module.scss'

interface Props {
}

export const App: React.FC<Props> = ({}) => {
    return (
        <>
            <Header/>

            <Container className={styles.App}>
                به آپاراتگرام خوش اومدی
            </Container>
        </>
    );
}
