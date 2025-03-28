import React from "react";

const PokemonImage = ({ pokemon }) => {
  return (
    <>
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="mx-auto"
      />
      <h2 className="text-xl font-semibold capitalize">{pokemon.name}</h2>
      <p>Type: {pokemon.types.map((t) => t.type.name).join(", ")}</p>
      <p>Stats:</p>
      <ul>
        {pokemon.stats.map((stat) => (
          <li key={stat.stat.name}>
            {stat.stat.name}: {stat.base_stat}
          </li>
        ))}
      </ul>
    </>
  );
};

export default PokemonImage;
