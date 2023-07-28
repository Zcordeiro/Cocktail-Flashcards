"use client";

import { useEffect, useState } from "react";
import Flashcard from "@/components/Flashcard";

const searchPage = () => {
  const [cocktails, setCocktails] = useState([]);
  const [search, setSearch] = useState("");

  const fetchCocktails = async () => {
    const res = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`
    );
    const data = await res.json();
    setCocktails(data.drinks[0]);
  };

  useEffect(() => {
    fetchCocktails();
  }, []);

  return (
    <div className="bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-gray-900 to-gray-400 w-full px-7 py-4 md:px-24 md:py-10 text-neutral-50 min-h-screen">
      <h1 className="text-6xl font-bold py-6 text-center">
        Search for a drink
      </h1>

      <div className="flex flex-col items-center justify-center">
        <input
          type="text"
          placeholder="Search..."
          className="text-center text-black m-4 p-4 border-2 border-black rounded-lg hover:font-bold"
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              fetchCocktails();
            }
          }}
        />
        <button
          onClick={fetchCocktails}
          className="text-neutral-950 m-4 p-4 border-2 border-black rounded-lg bg-neutral-100 hover:bg-neutral-200 hover:font-bold"
        >
          Search
        </button>
      </div>

      {cocktails && (
        <div className="flex flex-col items-center justify-center">
          <Flashcard cocktail={cocktails} />
        </div>
      )}

      <a
        className="fixed top-52 right-0 bg-green-800 p-5 rounded hover:bg-green-900/40 hover:text-slate-50 hover:font-bold hover:cursor-pointer"
        href="/"
      >
        Go Back
      </a>
    </div>
  );
};

export default searchPage;
