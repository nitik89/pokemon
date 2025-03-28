import React, { useEffect, useState } from "react";
import Search from "./Search";
import PokemonImage from "./PokemonImage";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState(null);
  const [search, setSearch] = useState("1");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (search.length > 0) {
      fetchPokemon(search);
    }
  }, [search]);

  const fetchPokemon = async (query) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`
      );
      if (!res.ok) throw new Error("Pokémon not found");
      const data = await res.json();
      setPokemon(data);
    } catch (err) {
      setError(err.message);
      setPokemon(null);
    }
    setLoading(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (search) fetchPokemon(search);
  };

  const navigatePokemon = (offset) => {
    if (pokemon) {
      const newId = pokemon.id + offset;
      if (newId > 0) {
        setSearch(newId.toString());
        fetchPokemon(newId);
      }
    }
  };

  return (
    <div className="flex flex-col items-center p-5">
      <h1 className="text-2xl font-bold mb-4">Pokédex</h1>
      <form onSubmit={handleSearch} className="mb-4">
        <Search search={search} setSearch={setSearch} />
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {pokemon && (
        <div className="border p-5 rounded shadow-md w-80 text-center">
          <PokemonImage pokemon={pokemon} />
          <div className="mt-4 flex justify-between">
            <button
              onClick={() => navigatePokemon(-1)}
              className="bg-gray-500 text-white px-4 py-2 rounded"
              disabled={pokemon.id === 1}
            >
              Previous
            </button>
            <button
              onClick={() => navigatePokemon(1)}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pokemon;
