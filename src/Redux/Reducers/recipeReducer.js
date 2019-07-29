import * as actionTypes from "../actionTypes";

const exampleRecipe = {
  id: "uuid",
  author: "",
  name: "",
  category: "",
  ingredients: [],
  instructions: "",
  cost: "",
  timeToCook: 0,
  difficulty: 1
};

const initialState = {
  recipes: [
    {
      id: "1",
      author: "Józsi",
      name: "Csülkös bableves",
      category: "Traditional",
      ingredients: [
        { name: "bab", amount: "sok" },
        { name: "csülök", amount: "sok" }
      ],
      instructions: "Főzzed amíg jó nem lesz",
      cost: "$$$",
      timeToCook: 90,
      difficulty: 5
    }
  ]
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
