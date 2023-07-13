import React, { useEffect, useState } from "react";
import styles from "./RecipeDetailsPage.module.scss";
import { useParams } from "react-router-dom";
import axios from "axios";

const RecipeDetailsPage = () => {
    const params = useParams();
    const [recipe, setRecipe] = useState(null);
    const [colors, setColors] = useState([]);

    useEffect(() => {
        axios
            .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.id}`)
            .then((response) => {
                setRecipe(response.data.drinks[0]);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [params.id]);

    useEffect(() => {
        setColors(Array.from({ length: 5 }, () => getRandomColor()));
    }, []);

    const getRandomColor = () => {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    if (!recipe) {
        return <div>Loading...</div>;
    }

    const ingredients = [];
    for (let i = 1; i <= 15; i++) {
        const ingredient = recipe[`strIngredient${i}`];
        const measure = recipe[`strMeasure${i}`];
        if (ingredient) {
            ingredients.push(`${ingredient} - ${measure}`);
        }
    }

    return (
        <div className={styles.detailedPage}>
            <h1>Вы открыли детальную страницу рецепта!</h1>
            <p>ID: {params.id}</p>
            <h3>{recipe.strDrink}</h3>
            <p>{recipe.strInstructions}</p>
            <p>Рецепт на английском {recipe.strInstructions}</p>
            <h3>Необходимые ингредиенты:</h3>
            {/* выводим ингредиенты из массива */}
            <div className={styles.ingredContainer}>
                {ingredients.map((ingredient, index) => (
                    <p className={styles.ingred} key={index} style={{ backgroundColor: colors[index % colors.length] }}>
                        {ingredient}
                    </p>
                ))}
            </div>

            <div className={styles.bigImg}>
                <img className={styles.drinkImage} src={recipe.strDrinkThumb} alt={recipe.strDrink} />
            </div>
        </div>
    );
};

export default RecipeDetailsPage;
