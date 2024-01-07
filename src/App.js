import { useState } from "react";
import Pokemon from "./components/Pokemon";

export default function App({ pokemons }) {
  const [selecionados, setSelecionados] = useState([]);

  // Cada pokémon possui as propriedades nome e número
  // Ex: { nome: "bulbasaur", numero: 1 }

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
          // adicionar clique e classe CSS no li (nome da classe: selecionado)
          <li key={p.nome} onClick={() => clicouCard(p.nome)} className={`pokecard ${selecionados.includes(p.nome) ? "selecionado" : ""}`}>
            <Pokemon pokemon={p} />
          </li>
        ))}
      </ul>
    </>
  );
}
