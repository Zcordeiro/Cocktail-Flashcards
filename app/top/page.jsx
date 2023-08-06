"use client";

import { useEffect, useState } from "react";
import Flashcard from "@/components/Flashcard";

const topCocktails = [
  "Margarita",
  "Daiquiri",
  "Mojito",
  "Old Fashioned",
  "Whiskey Sour",
  "Martini",
  "Moscow Mule",
  "Mai Tai",
  "Pina Colada",
  "Manhattan",
  "Bloody Mary",
  "Cosmopolitan",
  "Paloma",
  "Tom Collins",
  "Negroni",
  "Mint Julep",
  "White Russian",
  "Sazerac",
  "Gin and Tonic",
  "Long Island Iced Tea",
  "Screwdriver",
  "Dark and Stormy",
  "Irish Coffee",
  "Gimlet",
  "French 75",
  "Bellini",
  "Sea Breeze",
  "Singapore Sling",
  "Pisco Sour",
  "Penicillin",
  "Boulevardier",
  "Gin Fizz",
  "Vesper",
  "Last Word",
  "French Connection",
  "Bee's Knees",
  "Mimosa",
  "Corpse Reviver",
  "Aviation",
  "Bramble",
  "Caipirinha",
  "Clover Club",
  "Espresso Martini",
  "Grasshopper",
  "Harvey Wallbanger",
];

const TopPage = () => {
  const [cocktails, setCocktails] = useState([]);
  const [selectedCocktail, setSelectedCocktail] = useState(null);

  const fetchCocktails = async (cocktailName) => {
    const res = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`
    );
    const data = await res.json();
    setCocktails(data.drinks);
  };

  useEffect(() => {
    fetchCocktails(topCocktails[Math.floor(Math.random() * topCocktails.length)]);
  }, []);

  const handleNext = () => {
    fetchCocktails(topCocktails[Math.floor(Math.random() * topCocktails.length)]);
    setSelectedCocktail(null);
  };

  const handleSelect = async (e) => {
    const cocktailName = e.target.textContent;
    const res = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`
    );
    const data = await res.json();
    setSelectedCocktail(data.drinks[0]);
  };

  return (
    <div className="bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-emerald-600 via-indigo-800 to-emerald-800 w-full py-4 md:px-24 md:py-10 text-neutral-50 min-h-screen">
      <h1 className="text-6xl font-bold py-6 text-center">Top 50 Flashcards</h1>

      <div className="flex flex-col justify-center">
        <h1 className="text-4xl font-bold py-6 text-center">
          List of the top 50 cocktails
        </h1>
        {selectedCocktail && (
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold py-6 text-center">
            {selectedCocktail.strDrink}
          </h2>
          <Flashcard cocktail={selectedCocktail} />
        </div>
      )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto text-center">
          {topCocktails.map((cocktail) => (
            <div key={cocktail}>
              <button
                className="btn btn-outline btn-accent btn-lg m-2"
                onClick={handleSelect}
              >
                <span className="text-2xl font-bold">{cocktail}</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <button
          onClick={handleNext}
          className="btn btn-outline btn-lg btn-accent"
        >
          Next
        </button>
      </div>

    

      {cocktails &&
        !selectedCocktail &&
        cocktails.map((cocktail) => (
          <div
            key={cocktail.idDrink}
            className="flex flex-col items-center justify-center"
          >
            <h2 className="text-4xl font-bold py-6 text-center">
              {cocktail.strDrink}
            </h2>
            <Flashcard cocktail={cocktail} />
          </div>
        ))}
    </div>
  );
};

export default TopPage;