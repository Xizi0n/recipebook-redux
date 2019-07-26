import React from "react";
import AddRecipeInformation from "./AddRecipeInformation";
import AddRecipeForm from "./AddRecipeForm";

const AddRecipePage = () => {
  return (
    <div className="container">
      <div className="divider">
        <aside className="divider__information">
          <AddRecipeInformation />
        </aside>
        <main className="divider__form">
          <AddRecipeForm />
        </main>
      </div>
    </div>
  );
};

export default AddRecipePage;
