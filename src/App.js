import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddRecipePage from "./components/AddRecipePage";
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import RecipeDetails from "./components/RecipeDetails";
import NotFound from "./components/NotFound";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/addrecipes" component={AddRecipePage} />
          <Route path="/recipes" exact component={Recipes} />
          <Route path="/recipes/:id" component={RecipeDetails} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
