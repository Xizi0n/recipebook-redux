import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actionTypes from "../Redux/actionTypes";
import NotFound from "./NotFound";

const RecipeDetails = props => {
  const recipe = useSelector(store =>
    store.recipes.filter(recipe => recipe.id === props.match.params.id)
  )[0];
  const dispatch = useDispatch();
  const handleDelete = (id, name) => {
    const shouldDelete = window.confirm(`Do you vant to delete ${name}`);
    if (shouldDelete) {
      dispatch({ type: actionTypes.REMOVE_RECIPE, id });
      props.history.push("/recipes");
    }
  };
  return (
    <div className="container">
      {recipe === undefined ? (
        <NotFound />
      ) : (
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
            <div className="divider-grid__item">
              <div className="card__title">Ingredients</div>
              <ul className="normal-list">
                {recipe.ingredients.map(ingredient => (
                  <li className="normal-list__item">
                    {ingredient.amount}
                    {"  "} {ingredient.name}
                  </li>
                ))}
              </ul>
              <div className="card__title">Instructions</div>
              {recipe.instructions}

              <div className="card__info">
                <div className="card__info__box">
                  <i className="far fa-clock card__icon" /> {recipe.timeToCook}{" "}
                  min
                </div>
                <div className="card__info__box">
                  <i className="fas fa-dumbbell card__icon" />{" "}
                  {recipe.difficulty}
                </div>
              </div>
              <button
                className="form-button button--danger"
                onClick={() => handleDelete(recipe.id, recipe.name)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeDetails;
