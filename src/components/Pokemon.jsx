import React, { useState, useEffect } from "react";
import PokemonImage from "./PokemonImage";

const PokemonSearch = () => {
  const [search, setSearch] = useState(1);
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${search}`
        );
        if (!response.ok) throw new Error("Pokemon not found");
        const data = await response.json();
        setPokemon(data);
      } catch (error) {
        setPokemon(null);
      }
    };
    if (search) {
      fetchPokemon();
    }
  }, [search]);

  const handlePrev = () => setSearch((prev) => Math.max(1, prev - 1));
  const handleNext = () => setSearch((prev) => prev + 1);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "24px",
        backgroundColor: "#f3f4f6",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px" }}
      >
        Pokémon Search
      </h1>
      <input
        type="text"
        placeholder="Enter Pokémon name or ID"
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
        style={{
          marginBottom: "16px",
          padding: "8px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          width: "200px",
          textAlign: "center",
        }}
      />
      {pokemon && search ? (
        <PokemonImage pokemon={pokemon} />
      ) : (
        <p>Pokemon not found</p>
      )}
      <div style={{ marginTop: "16px", display: "flex", gap: "16px" }}>
        <button
          onClick={handlePrev}
          style={{
            padding: "8px 16px",
            backgroundColor: "#3b82f6",
            color: "white",
            borderRadius: "4px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          style={{
            padding: "8px 16px",
            backgroundColor: "#3b82f6",
            color: "white",
            borderRadius: "4px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PokemonSearch;
