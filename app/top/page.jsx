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
    <div className="bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-gray-900 to-gray-400 w-full px-7 py-4 md:px-24 md:py-10 text-neutral-50 min-h-screen">
      <h1 className="text-6xl font-bold py-6 text-center">Top 50 Flashcards</h1>

      {cocktails &&
        cocktails.map((cocktail) => (
          <div
            key={cocktail}
            className="flex flex-col items-center justify-center"
          >
            <Flashcard cocktail={cocktail} />
          </div>
        ))}

      <div className="flex flex-wrap justify-between">
       

        <a
          className="md:fixed top-52 left-0 bg-green-800 m-4 p-4 rounded hover:bg-green-900/40 hover:text-slate-50 hover:font-bold hover:cursor-pointer"
          href="/"
        >
          Go Back
        </a>

        <button
          onClick={handleNext}
          className="md:fixed top-52 right-0 text-neutral-950 m-4 p-4 border-2 border-black rounded-lg bg-neutral-100 hover:bg-neutral-200 hover:font-bold"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default topPage;
