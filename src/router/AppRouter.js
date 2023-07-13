import React from "react";
import styles from "./AppRouter.module.scss";
import { Route, Routes } from "react-router-dom";
import MainPage from "../Components/MainPage/MainPage";
import RecipePage from "../Components/RecipePage/RecipePage";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import RecipeDetailsPage from "../Components/RecipeDetailsPage/RecipeDetailsPage";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/main/*" element={<MainPage />}></Route>
            <Route exact path="/" element={<MainPage />}></Route>
            <Route path="/recipe" element={<RecipePage />}></Route>
            <Route path="/recipe/:id" element={<RecipeDetailsPage />}></Route>
            <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
    );
};

export default AppRouter;
