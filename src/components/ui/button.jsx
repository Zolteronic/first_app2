import "./button.css";

export const Button = ({ text, className, clickFn }) => {
  console.log("Button rendered");
  return (
    <button className={`Button ${className}`} onClick={clickFn}>
      {text}
    </button>
  );
};
