import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddRecipePage from "./components/AddRecipePage";
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import RecipeDetails from "./components/RecipeDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route path="/addrecipes" component={AddRecipePage} />
        <Route path="/recipes" exact component={Recipes} />
        <Route path="/recipes/:id" component={RecipeDetails} />
      </Router>
    </div>
  );
}

export default App;
