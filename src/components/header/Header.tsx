import React from "react";
import {Icon} from "@iconify/react"
import IconMenu from '@iconify/icons-ic/twotone-menu';


import styles from "./Header.module.scss";
import {Container} from "../container/Container";

interface Props {
}

export const Header: React.FC<Props> = ({}) => {
    return (
        <header className={styles.Header}>
            <Container className={styles.Container}>
                <h1 className={styles.Title}>آپاراتگرام</h1>
                <div className={styles.MenuButton}>
                    <Icon icon={IconMenu} width={24}/>
                </div>
            </Container>
        </header>
    );
}
