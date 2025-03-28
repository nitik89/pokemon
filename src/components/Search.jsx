import React from "react";

const Search = ({ search, setSearch }) => {
  return (
    <>
      <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Enter Pokémon name or ID"
          style={{
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            width: "200px",
            textAlign: "center",
          }}
        />
        <button
          style={{
            padding: "8px",
            backgroundColor: "#007bff",
            color: "white",
            borderRadius: "4px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Search
        </button>
      </div>
    </>
  );
};

export default Search;
