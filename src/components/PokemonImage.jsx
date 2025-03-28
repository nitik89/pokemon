import React from "react";

const PokemonImage = ({ pokemon }) => {
  return (
    <div className="border p-5 rounded shadow-md w-80 text-center bg-white">
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="mx-auto w-32 h-32"
      />
      <h2 className="text-2xl font-bold capitalize mt-2">{pokemon.name}</h2>
      <p className="text-gray-700 mt-2">
        Type:{" "}
        <span className="font-semibold">
          {pokemon.types.map((t) => t.type.name).join(", ")}
        </span>
      </p>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Stats:</h3>
        <ul className="text-gray-600 mt-2 space-y-1">
          {pokemon.stats.map((stat) => (
            <li
              key={stat.stat.name}
              className="flex justify-between border-b py-1"
            >
              <span className="capitalize">{stat.stat.name}</span>
              <span className="font-semibold">{stat.base_stat}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PokemonImage;
