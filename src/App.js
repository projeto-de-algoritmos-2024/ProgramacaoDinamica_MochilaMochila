import './App.css';
import mochileiro from './back';

function App() {
  const itens = {
    arroz: {
      valor: 4,
      peso: 1
    },
    feijao: {
      valor: 5,
      peso: 2
    },
    ouro: {
      valor: 30,
      peso: 4
    },
    diamante: {
      valor: 50,
      peso: 10
    },
  }
  const resultado = mochileiro(itens,9);

  return (
    <div>
      <div>Digite os itens e os valores a serem considerados:</div>
      <div>
        <input type='text'></input>
        <input type='number'></input>
      </div>
      <button>Calcular</button>
      <br/>
      
      <div>Você consegue levar no máximo:</div>
      <p>R$ {resultado},00</p>
    </div>
  );
}

export default App;
