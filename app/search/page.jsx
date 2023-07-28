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
    <div className="bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-emerald-700 via-indigo-900 to-emerald-800  w-full px-7 py-4 md:px-24 md:py-10 text-neutral-50 min-h-screen">
      <h1 className="text-6xl font-bold py-6 text-center">
        Search for a drink
      </h1>

      <div className="flex flex-col items-center justify-center">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-accent w-full max-w-xs"
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              fetchCocktails();
            }
          }}
        />
        <button
          onClick={fetchCocktails}
          className="btn btn-outline btn-lg btn-accent mt-2"
        >
          Search
        </button>
      </div>

      {cocktails && (
        <div className="flex flex-col items-center justify-center">
          <Flashcard cocktail={cocktails} />
        </div>
      )}
    </div>
  );
};

export default searchPage;
