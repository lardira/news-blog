import "./styles/Button.css";

const Button = ({ className, onClickHander, text }) => {
  return (
    <button className={`${className} button`} onClick={onClickHander}>
      {text}
    </button>
  );
};

export default Button;
