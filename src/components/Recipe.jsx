import React from "react";
import { withRouter } from "react-router-dom";

const Recipe = props => {
  const { recipe } = props;

  const handleClick = id => {
    props.history.push(`/recipes/${id}`);
  };
  return (
    <div className="grid-item">
      <div className="card">
        <div className="card__image">
          <img src="https://picsum.photos/350/200" alt="" />
        </div>
        <div className="card__title">{recipe.name}</div>
        <div className="card__subtitle">
          <div className="card__subtitle__item">
            Number of ingredients: {recipe.ingredients.length}
          </div>
          <div className="card__subtitle__item">
            Cost:{" "}
            <span className="card__subtitle__item--money">{recipe.cost}</span>
          </div>
        </div>

        <div className="card__info">
          <div className="card__info__box">
            <i className="far fa-clock card__icon" /> {recipe.timeToCook} min
          </div>
          <div className="card__info__box">
            <i className="fas fa-dumbbell card__icon" /> {recipe.difficulty}
          </div>
        </div>
        <div className="card__actions">
          <div className="card__actions__button">
            <i className="far fa-thumbs-up card__icon" />
            Like
          </div>
          <div className="card__actions__button">
            <i className="fas fa-share-alt card__icon" />
            Share
          </div>
          <div
            className="card__actions__button"
            onClick={() => handleClick(recipe.id)}
          >
            <i className="far fa-eye card__icon" />
            View
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Recipe);
