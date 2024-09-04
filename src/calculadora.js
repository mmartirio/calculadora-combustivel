import React, { useState } from "react";
import './calculadora.css'

function Calculadora() {
  const [precoEtanol, setPrecoEtanol] = useState("");
  const [precoGasolina, setPrecoGasolina] = useState("");
  const [resultado, setResultado] = useState("");

  const calcularPreco = () => {
    const percentualLimite = 0.7;

    if(!precoEtanol || !precoGasolina){
      return "Informe os valores de Combustível!";
    }
    else if (precoEtanol / precoGasolina >= percentualLimite) {
        return "Abasteça com Gasolina";
    } else {
        return "Abasteça com Etanol";
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const resultado = calcularPreco();
    setResultado(resultado);

    setTimeout(() => setResultado(""), 3000);
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h1>Qual é a melhor opção?</h1>
        <label>Àlcool(preço por litro)</label>
        <input
          className="etanol" 
          type="text" 
          placeholder="Preço do Etanol" 
          value={precoEtanol}
          onChange={(e) => setPrecoEtanol(e.target.value)}
        />  
        <label>Gasolina (preço por litro)</label>
        <input 
          className="gasolina"
          type="text" 
          placeholder="Preço da Gasolina" 
          value={precoGasolina}
          onChange={(e) => setPrecoGasolina(e.target.value)}
        />
        <button className="btn" type="submit">Calcular</button>
        {resultado && <p className="resultado">{resultado}</p>}
      </form>
    </>
  );
}

export default Calculadora;
