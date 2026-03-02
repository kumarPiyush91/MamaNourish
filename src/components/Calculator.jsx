import { useState } from "react";
import { calculateBMI, getBodyType } from "../utils/bmiUtils";
import { nutrientData } from "../data/nutrientData";
import Result from "./Result";

function Calculator({ setShowRecipe }) {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [month, setMonth] = useState("");
  const [result, setResult] = useState(null);
  const [nutrients, setNutrients] = useState([]);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const w = parseFloat(weight);
    const h = parseFloat(height);
    const m = parseInt(month);

    // Validation
    if (
      isNaN(w) ||
      isNaN(h) ||
      isNaN(m) ||
      w <= 0 ||
      h <= 0 ||
      m < 1 ||
      m > 9
    ) {
      setError("Please enter valid positive values.");
      setResult(null);
      setNutrients([]);
      setShowRecipe(false);
      return;
    }

    setError("");

    const bmi = calculateBMI(w, h);
    const bodyType = getBodyType(bmi);
    const recommended = nutrientData[bodyType]?.[m] || [];

    setResult({ bmi, bodyType });
    setNutrients(recommended);

    // Show recipe link in footer
    setShowRecipe(true);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />

        <input
          type="number"
          placeholder="Height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />

        <input
          type="number"
          placeholder="Month of Pregnancy (1-9)"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
        />

        <button type="submit">Calculate</button>
      </form>

      {error && <p className="error">{error}</p>}

      {result && <Result result={result} nutrients={nutrients} />}
    </div>
  );
}

export default Calculator;