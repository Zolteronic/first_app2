import "./ChoiceButtons.css";
import { Button } from "./ui/button";

export const DrinkButtons = ({ drinkOne, drinkTwo }) => {
  return (
    <>
      <h2>Would you like tea or coffee?</h2>
      <div className="button-group">
        <Button text={drinkOne} />
        <Button text={drinkTwo} />
      </div>
    </>
  );
};
