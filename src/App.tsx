import "./App.css";
import { createEffect, createSignal } from "solid-js";
const App = () => {
  const [scale, setScale] = createSignal<"Celsius" | "Fahrenheit">("Celsius");
  const [temperature, setTemperature] = createSignal(0);

  createEffect(() => {
    console.log("Nuvarande temperaturskala: ", scale());
  });
  return (
    <div class="app">
      <h1>Temperaturomvandlare</h1>
      <div>
        <button
          onClick={() => setScale("Celsius")}
          style={{
            border: scale() === "Celsius" ? "2px solid red" : "none",
          }}
        >
          Celsius - Fahrenheit
        </button>
        <button
          onClick={() => setScale("Fahrenheit")}
          style={{
            border: scale() === "Fahrenheit" ? "2px solid red" : "none",
          }}
        >
          Fahrenheit - Celsius{" "}
        </button>
      </div>
      <input
        id="converter"
        type="number"
        value={temperature()}
        onInput={(e) => setTemperature(Number(e.currentTarget.value))}
      />
      <p>
        {temperature()}° {scale()} ={" "}
        {scale() === "Celsius"
          ? (temperature() * 9) / 5 + 32
          : ((temperature() - 32) * 5) / 9}
        ° {scale() === "Celsius" ? "Fahrenheit" : "Celsius"}
      </p>
    </div>
  );
};

export default App;
