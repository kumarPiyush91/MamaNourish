import { useState } from "react";
// import "./Nourish.css";

const Nourish = () => {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [month, setMonth] = useState("");
    const [result, setResult] = useState("");
    const [nutrients, setNutrients] = useState([]);

    const calculateBMI = (weight, height) => {
        const heightInMeters = height / 100;
        return (weight / (heightInMeters * heightInMeters)).toFixed(2);
    };

    const getBodyType = (bmi) => {
        if (bmi < 18.5) return "Underweight";
        if (bmi < 24.9) return "Normal";
        if (bmi < 29.9) return "Overweight";
        return "Obese";
    };

    const nutrientData = {
        "Underweight": {
            "1": [
                { "name": "Calories", "amount": "2500 kcal" },
                { "name": "Protein", "amount": "80 g" },
                { "name": "Folic Acid", "amount": "600 mcg" },
                { "name": "Iron", "amount": "27 mg" },
                { "name": "Calcium", "amount": "1000 mg" },
                { "name": "Omega-3", "amount": "200 mg" }
            ],
            "2": [
                { "name": "Calories", "amount": "2550 kcal" },
                { "name": "Protein", "amount": "85 g" },
                { "name": "Folic Acid", "amount": "600 mcg" },
                { "name": "Iron", "amount": "27 mg" },
                { "name": "Calcium", "amount": "1000 mg" },
                { "name": "Omega-3", "amount": "200 mg" }
            ],
            "3": [
                { "name": "Calories", "amount": "2600 kcal" },
                { "name": "Protein", "amount": "90 g" },
                { "name": "Folic Acid", "amount": "600 mcg" },
                { "name": "Iron", "amount": "27 mg" },
                { "name": "Calcium", "amount": "1000 mg" },
                { "name": "Omega-3", "amount": "200 mg" }
            ],
            "4": [
                { "name": "Calories", "amount": "2650 kcal" },
                { "name": "Protein", "amount": "95 g" },
                { "name": "Folic Acid", "amount": "600 mcg" },
                { "name": "Iron", "amount": "27 mg" },
                { "name": "Calcium", "amount": "1200 mg" },
                { "name": "Omega-3", "amount": "250 mg" }
            ],
            "5": [
                { "name": "Calories", "amount": "2700 kcal" },
                { "name": "Protein", "amount": "100 g" },
                { "name": "Folic Acid", "amount": "600 mcg" },
                { "name": "Iron", "amount": "30 mg" },
                { "name": "Calcium", "amount": "1200 mg" },
                { "name": "Omega-3", "amount": "250 mg" }
            ],
            "6": [
                { "name": "Calories", "amount": "2750 kcal" },
                { "name": "Protein", "amount": "105 g" },
                { "name": "Folic Acid", "amount": "600 mcg" },
                { "name": "Iron", "amount": "30 mg" },
                { "name": "Calcium", "amount": "1200 mg" },
                { "name": "Omega-3", "amount": "300 mg" }
            ],
            "7": [
                { "name": "Calories", "amount": "2800 kcal" },
                { "name": "Protein", "amount": "110 g" },
                { "name": "Folic Acid", "amount": "600 mcg" },
                { "name": "Iron", "amount": "30 mg" },
                { "name": "Calcium", "amount": "1200 mg" },
                { "name": "Omega-3", "amount": "300 mg" }
            ],
            "8": [
                { "name": "Calories", "amount": "2850 kcal" },
                { "name": "Protein", "amount": "115 g" },
                { "name": "Folic Acid", "amount": "600 mcg" },
                { "name": "Iron", "amount": "30 mg" },
                { "name": "Calcium", "amount": "1200 mg" },
                { "name": "Omega-3", "amount": "300 mg" }
            ],
            "9": [
                { "name": "Calories", "amount": "2900 kcal" },
                { "name": "Protein", "amount": "120 g" },
                { "name": "Folic Acid", "amount": "600 mcg" },
                { "name": "Iron", "amount": "30 mg" },
                { "name": "Calcium", "amount": "1200 mg" },
                { "name": "Omega-3", "amount": "300 mg" }
            ]
        },
        "Normal": {
            "1": [
                { "name": "Calories", "amount": "2200 kcal" },
                { "name": "Protein", "amount": "75 g" },
                { "name": "Folic Acid", "amount": "600 mcg" },
                { "name": "Iron", "amount": "27 mg" },
                { "name": "Calcium", "amount": "1000 mg" },
                { "name": "Omega-3", "amount": "200 mg" }
            ],
            "2": [
                { "name": "Calories", "amount": "2250 kcal" },
                { "name": "Protein", "amount": "80 g" },
                { "name": "Folic Acid", "amount": "600 mcg" },
                { "name": "Iron", "amount": "27 mg" },
                { "name": "Calcium", "amount": "1000 mg" },
                { "name": "Omega-3", "amount": "200 mg" }
            ],
            "3": [
                { "name": "Calories", "amount": "2300 kcal" },
                { "name": "Protein", "amount": "85 g" },
                { "name": "Folic Acid", "amount": "600 mcg" },
                { "name": "Iron", "amount": "27 mg" },
                { "name": "Calcium", "amount": "1000 mg" },
                { "name": "Omega-3", "amount": "200 mg" }
            ],
            "4": [
                { "name": "Calories", "amount": "2350 kcal" },
                { "name": "Protein", "amount": "90 g" },
                { "name": "Folic Acid", "amount": "600 mcg" },
                { "name": "Iron", "amount": "27 mg" },
                { "name": "Calcium", "amount": "1200 mg" },
                { "name": "Omega-3", "amount": "250 mg" }
            ],
            "5": [
                { "name": "Calories", "amount": "2400 kcal" },
                { "name": "Protein", "amount": "95 g" },
                { "name": "Folic Acid", "amount": "600 mcg" },
                { "name": "Iron", "amount": "30 mg" },
                { "name": "Calcium", "amount": "1200 mg" },
                { "name": "Omega-3", "amount": "250 mg" }
            ],
            "6": [
                { "name": "Calories", "amount": "2450 kcal" },
                { "name": "Protein", "amount": "100 g" },
                { "name": "Folic Acid", "amount": "600 mcg" },
                { "name": "Iron", "amount": "30 mg" },
                { "name": "Calcium", "amount": "1200 mg" },
                { "name": "Omega-3", "amount": "300 mg" }
            ],
            "7": [
                { "name": "Calories", "amount": "2500 kcal" },
                { "name": "Protein", "amount": "105 g" },
                { "name": "Folic Acid", "amount": "600 mcg" },
                { "name": "Iron", "amount": "30 mg" },
                { "name": "Calcium", "amount": "1200 mg" },
                { "name": "Omega-3", "amount": "300 mg" }
            ],
            "8": [
                { "name": "Calories", "amount": "2550 kcal" },
                { "name": "Protein", "amount": "110 g" },
                { "name": "Folic Acid", "amount": "600 mcg" },
                { "name": "Iron", "amount": "30 mg" },
                { "name": "Calcium", "amount": "1200 mg" },
                { "name": "Omega-3", "amount": "300 mg" }
            ],
            "9": [
                { "name": "Calories", "amount": "2600 kcal" },
                { "name": "Protein", "amount": "115 g" },
                { "name": "Folic Acid", "amount": "600 mcg" },
                { "name": "Iron", "amount": "30 mg" },
                { "name": "Calcium", "amount": "1200 mg" },
                { "name": "Omega-3", "amount": "300 mg" }
            ]
        },
        "Overweight": {
            "1": [
                { "name": "Calories", "amount": "2000 kcal" },
                { "name": "Protein", "amount": "70 g" },
                { "name": "Folic Acid", "amount": "600 mcg" },
                { "name": "Iron", "amount": "27 mg" },
                { "name": "Calcium", "amount": "1000 mg" },
                { "name": "Omega-3", "amount": "200 mg" }
            ],
            "2": [
                { "name": "Calories", "amount": "2050 kcal" },
                { "name": "Protein", "amount": "75 g" },
                { "name": "Folic Acid", "amount": "600 mcg" },
                { "name": "Iron", "amount": "27 mg" },
                { "name": "Calcium", "amount": "1000 mg" },
                { "name": "Omega-3", "amount": "200 mg" }
            ],
            "3": [
                { "name": "Calories", "amount": "2100 kcal" },
                { "name": "Protein", "amount": "80 g" },
                { "name": "Folic Acid", "amount": "600 mcg" },
                { "name": "Iron", "amount": "27 mg" },
                { "name": "Calcium", "amount": "1000 mg" },
                { "name": "Omega-3", "amount": "200 mg" }
            ],
            "4": [
                { "name": "Calories", "amount": "2150 kcal" },
                { "name": "Protein", "amount": "85 g" },
                { "name": "Folic Acid", "amount": "600 mcg" },
                { "name": "Iron", "amount": "27 mg" },
                { "name": "Calcium", "amount": "1200 mg" },
                { "name": "Omega-3", "amount": "250 mg" }
            ],
            "5": [
                { "name": "Calories", "amount": "2200 kcal" },
                { "name": "Protein", "amount": "90 g" },
                { "name": "Folic Acid", "amount": "600 mcg" },
                { "name": "Iron", "amount": "30 mg" },
                { "name": "Calcium", "amount": "1200 mg" },
                { "name": "Omega-3", "amount": "250 mg" }
            ],
            "6": [
                { "name": "Calories", "amount": "2250 kcal" },
                { "name": "Protein", "amount": "95 g" },
                { "name": "Folic Acid", "amount": "600 mcg" },
                { "name": "Iron", "amount": "30 mg" },
                { "name": "Calcium", "amount": "1200 mg" },
                { "name": "Omega-3", "amount": "300 mg" }
            ],
            "7": [
                { "name": "Calories", "amount": "2300 kcal" },
                { "name": "Protein", "amount": "100 g" },
                { "name": "Folic Acid", "amount": "600 mcg" },
                { "name": "Iron", "amount": "30 mg" },
                { "name": "Calcium", "amount": "1200 mg" },
                { "name": "Omega-3", "amount": "300 mg" }
            ],
            "8": [
                { "name": "Calories", "amount": "2350 kcal" },
                { "name": "Protein", "amount": "105 g" },
                { "name": "Folic Acid", "amount": "600 mcg" },
                { "name": "Iron", "amount": "30 mg" },
                { "name": "Calcium", "amount": "1200 mg" },
                { "name": "Omega-3", "amount": "300 mg" }
            ],
            "9": [
                { "name": "Calories", "amount": "2400 kcal" },
                { "name": "Protein", "amount": "110 g" },
                { "name": "Folic Acid", "amount": "600 mcg" },
                { "name": "Iron", "amount": "30 mg" },
                { "name": "Calcium", "amount": "1200 mg" },
                { "name": "Omega-3", "amount": "300 mg" }
            ]
        },
        "Obese": {
            "1": [
                { "name": "Calories", "amount": "1800 kcal" },
                { "name": "Protein", "amount": "60 g" },
                { "name": "Folic Acid", "amount": "600 mcg" },
                { "name": "Iron", "amount": "27 mg" },
                { "name": "Calcium", "amount": "1000 mg" },
                { "name": "Omega-3", "amount": "200 mg" }
            ],
            "2": [
                { "name": "Calories", "amount": "1850 kcal" },
                { "name": "Protein", "amount": "65 g" },
                { "name": "Folic Acid", "amount": "600 mcg" },
                { "name": "Iron", "amount": "27 mg" },
                { "name": "Calcium", "amount": "1000 mg" },
                { "name": "Omega-3", "amount": "200 mg" }
            ],
            "3": [
                { "name": "Calories", "amount": "1900 kcal" },
                { "name": "Protein", "amount": "70 g" },
                { "name": "Folic Acid", "amount": "600 mcg" },
                { "name": "Iron", "amount": "27 mg" },
                { "name": "Calcium", "amount": "1000 mg" },
                { "name": "Omega-3", "amount": "200 mg" }
            ],
            "4": [
                { "name": "Calories", "amount": "1950 kcal" },
                { "name": "Protein", "amount": "75 g" },
                { "name": "Folic Acid", "amount": "600 mcg" },
                { "name": "Iron", "amount": "27 mg" },
                { "name": "Calcium", "amount": "1200 mg" },
                { "name": "Omega-3", "amount": "250 mg" }
            ],
            "5": [
                { "name": "Calories", "amount": "2000 kcal" },
                { "name": "Protein", "amount": "80 g" },
                { "name": "Folic Acid", "amount": "600 mcg" },
                { "name": "Iron", "amount": "30 mg" },
                { "name": "Calcium", "amount": "1200 mg" },
                { "name": "Omega-3", "amount": "250 mg" }
            ],
            "6": [
                { "name": "Calories", "amount": "2050 kcal" },
                { "name": "Protein", "amount": "85 g" },
                { "name": "Folic Acid", "amount": "600 mcg" },
                { "name": "Iron", "amount": "30 mg" },
                { "name": "Calcium", "amount": "1200 mg" },
                { "name": "Omega-3", "amount": "300 mg" }
            ],
            "7": [
                { "name": "Calories", "amount": "2100 kcal" },
                { "name": "Protein", "amount": "90 g" },
                { "name": "Folic Acid", "amount": "600 mcg" },
                { "name": "Iron", "amount": "30 mg" },
                { "name": "Calcium", "amount": "1200 mg" },
                { "name": "Omega-3", "amount": "300 mg" }
            ],
            "8": [
                { "name": "Calories", "amount": "2150 kcal" },
                { "name": "Protein", "amount": "95 g" },
                { "name": "Folic Acid", "amount": "600 mcg" },
                { "name": "Iron", "amount": "30 mg" },
                { "name": "Calcium", "amount": "1200 mg" },
                { "name": "Omega-3", "amount": "300 mg" }
            ],
            "9": [
                { "name": "Calories", "amount": "2200 kcal" },
                { "name": "Protein", "amount": "100 g" },
                { "name": "Folic Acid", "amount": "600 mcg" },
                { "name": "Iron", "amount": "30 mg" },
                { "name": "Calcium", "amount": "1200 mg" },
                { "name": "Omega-3", "amount": "300 mg" }
            ]
        }
    }


    const handleCalculate = () => {
        if (!weight || !height || !month || month < 1 || month > 9) {
            alert("Please fill all fields correctly");
            return;
        }

        const bmi = calculateBMI(weight, height);
        const bodyType = getBodyType(bmi);

        setResult(`Your BMI: ${bmi} | Body Type: ${bodyType}`);
        setNutrients(nutrientData[bodyType][month] || []);
    };

    return (
        <div className="main-wrapper">
            {/* Calculator Section */}
            <div className="container">
                <h1>#1 MamaNourish – Pregnancy Nutrient Calculator</h1>

                <div>
                    <label>Weight (kg):</label>
                    <input
                        type="number"
                        placeholder="Enter weight"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                    />
                </div>

                <div>
                    <label>Height (cm):</label>
                    <input
                        type="number"
                        placeholder="Enter height"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                    />
                </div>

                <div>
                    <label>Month of Pregnancy (1–9):</label>
                    <input
                        type="number"
                        min="1"
                        max="9"
                        placeholder="Enter month"
                        value={month}
                        onChange={(e) => setMonth(e.target.value)}
                    />
                </div>

                <button onClick={handleCalculate}>Calculate</button>

                <h2>
                    <a
                        href="https://www.parents.com/pregnancy/my-body/nutrition/prenatal-meal-plan/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        #30 Recipes for Pregnancy Meal Plan
                    </a>
                </h2>
            </div>

            {/* Result Section */}
            <div className="output">
                <h2>{result || "Your BMI & Body Type will appear here"}</h2>

                <h3>Recommended Nutrients Per Day:</h3>

                <ul>
                    {nutrients.length === 0 ? (
                        <li>Please enter your weight, height, and pregnancy month, then click the Calculate button to see results.</li>
                    ) : (
                        nutrients.map((item, index) => (
                            <li key={index}>
                                <strong>{item.name}</strong>: {item.amount}
                            </li>
                        ))
                    )}
                </ul>
            </div>
        </div>
    );



};

export default Nourish;
