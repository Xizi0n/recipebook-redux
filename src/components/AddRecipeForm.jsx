import React from "react";
import * as Yup from "yup";

import { Form, Field, withFormik, FieldArray } from "formik";

const AddRecipeForm = ({ values }) => {
  return (
    <React.Fragment>
      <Form className="add-recipe-form">
        <Field
          type="text"
          placeholder="Recipe name"
          name="name"
          className="add-recipe-form__text-input"
        />
        <Field
          className="add-recipe-form__select"
          component="select"
          name="category"
        >
          <option value="">Select Category</option>
          <option value="Kosher">Kosher</option>
          <option value="Vegan">Vegan</option>
          <option value="Seasonal">Seasonal</option>
          <option value="Traditional">Traditional</option>
          <option value="Diet">Diet</option>
        </Field>
        <Field
          className="add-recipe-form__text-area"
          component="textarea"
          name="instructions"
          placeholder="Add cooking instructions here"
        />
        <Field
          className="add-recipe-form__number-input"
          type="number"
          placeholder="Time to make (minutes)"
          name="timeToMake"
        />
        <FieldArray
          name="ingredients"
          render={arrayHelpers => (
            <div>
              {values.ingredients.map((ingredient, index) => (
                <div key={index} className="form-row">
                  <Field
                    className="add-recipe-form__text-input"
                    name={`ingredients[${index}].name`}
                    placeholder="Ingredient name"
                  />
                  <Field
                    className="add-recipe-form__text-input"
                    name={`ingredients.${index}.amount`}
                    placeholder="Ingredient amount"
                  />
                  <button
                    className="form-button button--danger button--margin-left"
                    type="button"
                    onClick={() => arrayHelpers.remove(index)}
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                className="form-button button--info"
                type="button"
                onClick={() =>
                  arrayHelpers.push({
                    name: "",
                    amount: ""
                  })
                }
              >
                Add ingredient
              </button>
            </div>
          )}
        />
        <Field
          className="add-recipe-form__select"
          component="select"
          name="difficulty"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Field>
        <button type="submit" className="form-button button--action">
          Submit
        </button>
      </Form>
    </React.Fragment>
  );
};

const formikOptions = {
  mapPropsToValues: () => ({
    name: "",
    category: "",
    timeToMake: null,
    difficulty: null,
    ingredients: []
  }),
  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(
      () => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      },

      1000
    );
  },
  validationSchema: {}
};

export default withFormik(formikOptions)(AddRecipeForm);
