import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./CocktailList.module.scss";
import { Route, Routes, Link } from "react-router-dom";
import RecipeDetailsPage from "../RecipeDetailsPage/RecipeDetailsPage";

function CocktailList() {
    const [cocktails, setCocktails] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        axios
            .get("www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
            .then((response) => {
                setCocktails(response.data.drinks);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [searchTerm]);

    const handleSearchInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredCocktails = cocktails.filter((cocktail) => cocktail.strDrink.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div className={styles.container}>
            <div className={styles.searchInput}>
                <p>Поиск</p>
                <input type="text" value={searchTerm} onChange={handleSearchInputChange} placeholder="Найти ваш любимый коктейль..." />
            </div>
            <div className={styles.cards}>
                <Routes>
                    {filteredCocktails.map((cocktail) => (
                        <Route key={cocktail.idDrink} path={`/recipe/${cocktail.idDrink}`} element={<RecipeDetailsPage />} />
                    ))}
                </Routes>
                {filteredCocktails.map((cocktail) => (
                    <Link key={cocktail.idDrink} to={`/recipe/${cocktail.idDrink}`} className={styles.card}>
                        <h2>{cocktail.strDrink}</h2>
                        <img className={styles.drinkImage} src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default CocktailList;
