import "./App.css";
import mochileiro from "./back"; // Simulação da função no backend
import React, { useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [valor, setValor] = useState("");
  const [peso, setPeso] = useState("");
  const [capacidadeMaxima, setCapacidadeMaxima] = useState("");
  const [resultado, setResultado] = useState(null);

  const handleAddItem = () => {
    // Verifica se o valor e o peso são válidos antes de adicionar o item
    if (
      valor === "" ||
      peso === "" ||
      parseFloat(valor) <= 0 ||
      parseFloat(peso) <= 0
    ) {
      alert("Por favor, insira um valor e peso válidos para o item.");
      return;
    }

    const newItem = { valor: parseFloat(valor), peso: parseFloat(peso) };
    setItems([...items, newItem]);
    setValor("");
    setPeso("");
  };

  const handleCalculate = () => {
    if (capacidadeMaxima === "" || capacidadeMaxima <= 0) {
      alert("Por favor, insira uma capacidade máxima válida.");
      return;
    }
    const resultado = mochileiro(items, parseFloat(capacidadeMaxima));
    setResultado(resultado);
  };

  return (
    <div className="container">
      <h1>Knapsack Problem</h1>

      <div>
        <label htmlFor="capacidade">Capacidade Máxima da Mochila:</label>
        <input
          type="number"
          id="capacidade"
          placeholder="Capacidade Máxima"
          value={capacidadeMaxima}
          onChange={(e) => setCapacidadeMaxima(e.target.value)}
        />
      </div>

      <div>Digite os itens e os valores a serem considerados:</div>
      <div className="input-group">
        <input
          type="number"
          placeholder="Valor do item"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        />
        <input
          type="number"
          placeholder="Peso do item"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
        <button onClick={handleAddItem}>Adicionar item</button>
      </div>

      <div className="item-list">
        <h3>Itens adicionados:</h3>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {index + 1}. Valor: {item.valor}, Peso: {item.peso}
            </li>
          ))}
        </ul>
      </div>

      <button onClick={handleCalculate}>Calcular Mochila</button>

      {resultado !== null && (
        <div>
          <div>Você consegue levar no máximo:</div>
          <p>R$ {resultado},00</p>
        </div>
      )}
    </div>
  );
}

export default App;
