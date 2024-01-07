import { useState } from "react";
import Pokemon from "./components/Pokemon";

export default function App({ pokemons }) {
  const [selecionados, setSelecionados] = useState([]);

  function clicouCard(pokemon) {
    const estaSelecionado = selecionados.includes(pokemon);
    
    if (!estaSelecionado && selecionados.length < 3) {
      setSelecionados([...selecionados, pokemon]);
    }
  }

  return (
    <>
      <h1>Escolha seu time de 3 pokémons</h1>

      <ul className="lista">
        {pokemons.map((p) => (
          <li key={p.nome} onClick={() => clicouCard(p.nome)} className={`pokecard ${selecionados.includes(p.nome) ? "selecionado" : ""}`}>
            <Pokemon pokemon={p} />
          </li>
        ))}
      </ul>
    </>
  );
}
