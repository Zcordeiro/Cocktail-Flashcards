"use client";

import { useEffect, useState } from "react";
import Flashcard from "@/components/Flashcard";

const browsePage = () => {
  const [cocktails, setCocktails] = useState([]);
  const [filteredCocktails, setFilteredCocktails] = useState([]);

  const fetchCocktailByLetter = async (letter) => {
    const res = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`
    );
    const data = await res.json();
    const filteredData = data.drinks.filter((cocktail) =>
      cocktail.strDrink.toLowerCase().startsWith(letter.toLowerCase())
    );
    setFilteredCocktails(filteredData);
  };

  return (
    <div className="bg-cover bg-no-repeat bg-[url('/images/heroImage.jpg')] bg-center opacity-90 w-full p-4 md:px-24 md:py-10 text-neutral-50 min-h-screen">
      <h1 className="text-center text-6xl font-bold py-6">Browse flashcards</h1>

      <div className="">
        Alphabetical:
        <ul className="grid grid-cols-3 md:grid-cols-7 m-5">
          {Array.from(Array(26)).map((_, index) => {
            const letter = String.fromCharCode(97 + index);
            return (
              <li
                key={letter}
                className="btn btn-info m-2"
                onClick={() => fetchCocktailByLetter(letter)}
              >
                {letter.toUpperCase()}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-2 mt-8 place-items-center">
        {filteredCocktails &&
          filteredCocktails.map((cocktail) => (
            <Flashcard key={cocktail.idDrink} cocktail={cocktail} />
          ))}
      </div>
    </div>
  );
};

export default browsePage;
