import React from "react";
import { useState } from "react";

function SearchBar() {
  const [input, setInput] = useState("");

  return (
      <input
        type="text"
        placeholder="Buscar publicacion..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
  );
}

export default SearchBar;