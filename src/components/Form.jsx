import './styles/Form.css';

const Form = ({ inputs, onSubmit, className, buttonName, validator }) => {
  const validateInputs = (inputs, event) => {
    if (validator) {
      return validator(inputs, event);
    }

    let message = '';

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
    return passed;
  };

  const submitHandler = event => {
    event.preventDefault();
    const passed = validateInputs(inputs, event);
    if (onSubmit && passed) {
      onSubmit(event);
      event.target.reset();
    }
  };

  return (
    <form className={`${className} form`} onSubmit={submitHandler}>
      {Object.entries(inputs).map(([key, value], i) => {
        return (
          <label key={key + i}>
            {key}:
            <input type={value.type} />
          </label>
        );
      })}
      <input className='submit-button' type='submit' value={buttonName} />
    </form>
  );
};

export default Form;
