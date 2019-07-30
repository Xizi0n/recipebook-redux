import React from "react";
import { connect } from "react-redux";
import * as Yup from "yup";

import { Form, Field, withFormik, FieldArray } from "formik";
import FormError from "./FormError";
import * as actionTypes from "../Redux/actionTypes";
import uuid from "uuid/v1";

/*  */
const AddRecipeForm = ({ values, errors, touched, isSubmitting }) => {
  const colorizeInput = (defaultStyle, propertyName) => {
    if (touched[propertyName]) {
      if (errors[propertyName]) {
        return defaultStyle + " form__input--invalid";
      }
      if (!errors[propertyName]) {
        return defaultStyle + " form__input--valid";
      }
    } else {
      return defaultStyle;
    }
  };
  return (
    <React.Fragment>
      <Form className="add-recipe-form">
        <FormError property="name" errors={errors} touched={touched} />
        <Field
          type="text"
          placeholder="Recipe name"
          name="name"
          className={colorizeInput("add-recipe-form__text-input", "name")}
        />
        <FormError property="category" errors={errors} touched={touched} />
        <Field
          className={colorizeInput("add-recipe-form__select", "category")}
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
        <FormError property="instructions" errors={errors} touched={touched} />
        <Field
          className={colorizeInput(
            "add-recipe-form__text-area",
            "instructions"
          )}
          component="textarea"
          name="instructions"
          placeholder="Add cooking instructions here"
        />
        <FormError property="timeToCook" errors={errors} touched={touched} />
        <Field
          className={colorizeInput(
            "add-recipe-form__number-input",
            "timeToCook"
          )}
          type="number"
          placeholder="Time to make (minutes)"
          name="timeToCook"
        />
        <FormError property="ingredients" errors={errors} touched={touched} />
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
        <FormError property="difficulty" errors={errors} touched={touched} />
        <Field
          className={colorizeInput("add-recipe-form__select", "difficulty")}
          component="select"
          name="difficulty"
        >
          <option value="">Select a difficulty</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Field>
        <FormError property="cost" errors={errors} touched={touched} />
        <Field
          className={colorizeInput("add-recipe-form__select", "cost")}
          component="select"
          name="cost"
        >
          <option value="">Select cost category</option>
          <option value="$">$</option>
          <option value="$$">$$</option>
          <option value="$$$">$$$</option>
          <option value="$$$$">$$$$</option>
          <option value="$$$$$">$$$$$</option>
        </Field>
        <button
          type="submit"
          className="form-button button--action"
          disabled={Object.keys(errors).length > 0}
        >
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
    timeToCook: 0,
    instructions: "",
    difficulty: "",
    ingredients: [],
    cost: ""
  }),
  handleSubmit: (values, { props, setSubmitting, resetForm }) => {
    setTimeout(
      () => {
        setSubmitting(false);
        props.dispatch({
          type: actionTypes.ADD_RECIPE,
          recipe: { ...values, id: uuid() }
        });
        resetForm();
      },

      1000
    );
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required("Recipe name is required."),
    category: Yup.string()
      .oneOf(["Kosher", "Vegan", "Seasonal", "Traditional", "Diet"])
      .required("Please select a category!"),
    timeToCook: Yup.number("Time should be a number( in min)")
      .integer("Time must be an integer")
      .positive("Time should not be negative!")
      .required("Time is required!"),
    instructions: Yup.string().required(
      "You must set instructions for the recipe!"
    ),
    difficulty: Yup.string()
      .oneOf(["1", "2", "3", "4", "5"])
      .required("Please select a difficulty level!"),
    cost: Yup.string()
      .oneOf(["$", "$$", "$$$", "$$$$", "$$$$$"])
      .required("You must select a cost category"),
    ingredients: Yup.array()
      .of(
        Yup.object().shape({
          name: Yup.string(),
          amount: Yup.string()
        })
      )
      .min(1, "You should enter at least 1 ingredients.")
  })
};

const AddFormWithFormik = withFormik(formikOptions)(AddRecipeForm);

// Connect kell hogy hozzáférjünk a dispatchhez null null hiszen nem kell változó illetve a dispatch alapértelmezetten hozzá lesz adva a propokhoz
export default connect(
  null,
  null
)(AddFormWithFormik);
