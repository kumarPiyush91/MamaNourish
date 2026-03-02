function Result({ result, nutrients }) {
  return (
    <div className="output">
      <h2>
        BMI: {result.bmi} ({result.bodyType})
      </h2>

      <h3>Daily Recommended Nutrients</h3>

      <ul>
        {nutrients.map((item, index) => (
          <li key={index}>
            {item.name}: {item.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Result;