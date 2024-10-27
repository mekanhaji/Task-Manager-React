import PropTypes from "prop-types";

const Button = ({  text, onClick }) => {
  return (
    <button onClick={onClick} className="btn">
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: "btn-default",
};

Button.prototype = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
