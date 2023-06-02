import "./styles/Form.css";

//TODO: use component children enstead of array of objects
//TODO: rewrite form
const Form = ({
  inputs,
  onSubmit,
  className,
  buttonName,
  validator,
  formTitle,
}) => {
  const validateInputs = (inputs, event) => {
    let message = "";

    const passed = Object.entries(inputs).every(([key, value], i) => {
      const eventValue = event.target[i].value;

      if (value.required) {
        if (!eventValue) {
          message = `${key} is required`;
          return eventValue;
        }
      }
      return true;
    });

    //TODO: highlight the inputs if there are empty
    message && alert(message);

    if (validator) {
      return validator(inputs, event);
    }

    return passed;
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const passed = validateInputs(inputs, event);
    if (onSubmit && passed) {
      onSubmit(event);
      event.target.reset();
    }
  };

  return (
    <div className="form-container">
      <h3 className="form-title">{formTitle || "Form"}</h3>
      <form className={`${className} form`} onSubmit={submitHandler}>
        {Object.entries(inputs).map(([key, value], i) => {
          return (
            <label className="form-label" key={key + i}>
              {key}:
              <input className="form-input" type={value.type} />
            </label>
          );
        })}
        <input
          className="form-submit-button"
          type="submit"
          value={buttonName}
        />
      </form>
    </div>
  );
};

export default Form;
