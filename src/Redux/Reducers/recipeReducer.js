import * as actionTypes from "../actionTypes";

const exampleRecipe = {
  id: "uuid",
  author: "",
  name: "",
  category: "",
  ingredients: [],
  instructions: [],
  timeToCook: 0,
  difficulty: 1
};

const initialState = {
  recipes: []
};

const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_RECIPE:
      return {
        ...state,
        recipes: state.recipes.concat(action.recipe)
      };
    case actionTypes.REMOVE_RECIPE:
      return {
        ...state,
        recipes: state.recipes.filter(recipe => recipe.id !== action.id)
      };
    default:
      return state;
  }
};

export default recipeReducer;
