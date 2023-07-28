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
  "Drambuie Sour",
  "Espresso Martini",
  "Gibson",
  "Grasshopper",
  "Harvey Wallbanger",
  "Hemingway Daiquiri",
  "Jungle Bird",
];

const topPage = () => {
  const [cocktails, setCocktails] = useState([]);

  const fetchCocktails = async () => {
    const res = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${
        topCocktails[Math.floor(Math.random() * topCocktails.length)]
      }`
    );
    const data = await res.json();
    setCocktails(data.drinks);
  };

  useEffect(() => {
    fetchCocktails();
  }, []);

  const handleNext = () => {
    fetchCocktails();
  };

  return (
    <div className="bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-emerald-600 via-indigo-800 to-emerald-800 w-full py-4 md:px-24 md:py-10 text-neutral-50 min-h-screen">
      <h1 className="text-6xl font-bold py-6 text-center">Top 50 Flashcards</h1>

      <div className="flex justify-center">
        <button
          onClick={handleNext}
          className="btn btn-outline btn-lg btn-accent"
        >
          Next
        </button>
      </div>

      {cocktails &&
        cocktails.map((cocktail) => (
          <div
            key={cocktail}
            className="flex flex-col items-center justify-center"
          >
            <Flashcard cocktail={cocktail} />
          </div>
        ))}
    </div>
  );
};

export default topPage;
