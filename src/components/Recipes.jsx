import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Recipe from "./Recipe";

const Recipes = () => {
  const recipes = useSelector(state => state.recipes);
  return (
    <main>
      <div className="container">
        <div className="item-grid">
          {recipes.map(recipe => (
            <Recipe key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Recipes;
