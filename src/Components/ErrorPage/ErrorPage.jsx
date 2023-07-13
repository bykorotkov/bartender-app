import React from "react";
import styles from "./ErrorPage.module.scss";

const ErrorPage = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.header}>This page does not exist. Go back to main page</h1>
        </div>
    );
};

export default ErrorPage;
