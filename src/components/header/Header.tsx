import React from "react";
import {Icon} from "@iconify/react"
import IconMenu from '@iconify/icons-ic/twotone-menu';

import {Container} from "../container/Container";

import styles from "./Header.module.scss";

interface Props {
}

export const Header: React.FC<Props> = () => {
    return (
        <header className={styles.Header}>
            <Container className={styles.Container}>
                <h1 className={styles.Title}>ویدیوگرام</h1>

                <input
                    className={styles.SearchInput}
                    type="text"
                    autoComplete="off"
                    placeholder="جستجوی ویدیوهای رویدادها، شخصیت‌ها و ..."
                />

                <div className={styles.MenuButton}>
                    <Icon icon={IconMenu} width={24}/>
                </div>
            </Container>
        </header>
    );
}
