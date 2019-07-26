import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddRecipePage from "./components/AddRecipePage";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route path="/addrecipes" component={AddRecipePage} />
      </Router>
    </div>
  );
}

export default App;
