import "./App.css";
import { DrinkButtons } from "./components/ChoiceButtons";
import { DrinkChoice } from "./components/DrinkChoice";
import { coffee, tea } from "./utils/data";

export const App = () => {
  const greeting = "Welcome to our cafe!";
  const userDrink = tea;

  return (
    <div className="app">
      <h1>{greeting}</h1>
      <DrinkButtons drinkOne={tea.name} drinkTwo={coffee.name} />
      <DrinkChoice drink={userDrink} />
    </div>
  );
};
