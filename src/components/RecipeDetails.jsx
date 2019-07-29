import React from "react";
import { useSelector } from "react-redux";

const RecipeDetails = props => {
  const recipe = useSelector(store =>
    store.recipes.filter(recipe => recipe.id === props.match.params.id)
  )[0];
  console.log(recipe);
  return (
    <div className="container">
      <div className="card card--wide">
        <div className="card__title">{recipe.name}</div>
        <div className="divider-grid">
          <div className="divider-grid__item">
            <img
              className="responsive-image"
              src="https://picsum.photos/500/500"
              alt=""
            />
          </div>
          <div className="divider-grid__item">a</div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
