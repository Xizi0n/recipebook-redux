import React from "react";

const FormError = ({ errors, touched, property }) => {
  return (
    <React.Fragment>
      {touched[property] && errors.name ? (
        <div className="message message--error">{errors[property]}</div>
      ) : null}
    </React.Fragment>
  );
};

export default FormError;
