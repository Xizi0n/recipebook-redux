import React from "react";

const FormError = ({ errors, touched, property }) => {
  const error = errors[property];
  return (
    <React.Fragment>
      {touched[property] && errors.name ? (
        <div className="message message--error">{error}</div>
      ) : null}
    </React.Fragment>
  );
};

export default FormError;
