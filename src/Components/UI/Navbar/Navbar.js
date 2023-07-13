import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import styles from "./Navbar.module.scss";
import { Header } from "antd/es/layout/layout";

const Navbar = () => {
    return (
        <Layout className={styles.container}>
            <Header>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
                    <Menu.Item key="1">
                        <Link to="/main">Home</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/recipe">Recipes</Link>
                    </Menu.Item>
                </Menu>
            </Header>
        </Layout>
    );
};

export default Navbar;
