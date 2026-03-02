import { useState } from "react";
import Calculator from "./components/Calculator";

function App() {
  const [showRecipe, setShowRecipe] = useState(false);

  return (
    <div className="app">
      <h1>MamaNourish - Pregnancy Nutrient Calculator</h1>

      <Calculator setShowRecipe={setShowRecipe} />

      <footer className={`footer ${showRecipe ? "visible" : ""}`}>
        <a
          href="https://www.parents.com/pregnancy/my-body/nutrition/prenatal-meal-plan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          #30 Recipes for Your Pregnancy Meal Plan
        </a>
      </footer>
    </div>
  );
}

export default App;