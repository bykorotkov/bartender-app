import React, { useState } from "react";
import styles from "./MainPage.module.scss";
import { motion } from "framer-motion";
import CocktailList from "../CocktailList/CocktailList";

const MainPage = () => {
    const [rotate, setRotate] = useState(false);

    return (
        <div className={styles.container}>
            <div className={styles.header}>This is main page of bartender's app. Here you can see our cards with recipies</div>

            <div className={styles.content}>
                <div className={styles.card}>
                    <CocktailList />
                </div>
            </div>
        </div>
    );
};

export default MainPage;
