import React from "react";

const PokemonImage = ({ pokemon }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "24px",
        borderRadius: "8px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        width: "300px",
        textAlign: "center",
        background: "linear-gradient(to bottom right, #dbeafe, #93c5fd)",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "50%",
          padding: "8px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          display: "inline-block",
        }}
      >
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          style={{
            display: "block",
            margin: "auto",
            width: "100px",
            height: "100px",
          }}
        />
      </div>
      <h2
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          textTransform: "capitalize",
          marginTop: "16px",
          color: "#1f2937",
        }}
      >
        {pokemon.name}
      </h2>
      <p style={{ color: "#374151", marginTop: "8px", fontSize: "16px" }}>
        Type:{" "}
        <span style={{ fontWeight: "bold", color: "#111827" }}>
          {pokemon.types.map((t) => t.type.name).join(", ")}
        </span>
      </p>
      <div
        style={{
          marginTop: "16px",
          padding: "16px",
          backgroundColor: "white",
          borderRadius: "8px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h3 style={{ fontSize: "18px", fontWeight: "bold", color: "#1f2937" }}>
          Stats
        </h3>
        <ul
          style={{
            color: "#4b5563",
            marginTop: "12px",
            listStyle: "none",
            padding: 0,
          }}
        >
          {pokemon.stats.map((stat) => (
            <li
              key={stat.stat.name}
              style={{
                display: "flex",
                justifyContent: "space-between",
                borderBottom: "1px solid #e5e7eb",
                padding: "8px 16px",
                backgroundColor: "#f9fafb",
                borderRadius: "4px",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.05)",
                marginBottom: "8px",
              }}
            >
              <span
                style={{
                  textTransform: "capitalize",
                  fontWeight: "500",
                  color: "#1f2937",
                }}
              >
                {stat.stat.name}
              </span>
              <span style={{ fontWeight: "bold", color: "#111827" }}>
                {stat.base_stat}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PokemonImage;
