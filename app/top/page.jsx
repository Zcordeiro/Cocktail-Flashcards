"use client";

import { useEffect, useState } from "react";
import Flipcard from "@/components/Flipcard";


const TopPage = () => {
  const [cocktails, setCocktails] = useState([]);
  
  const fetchCocktails = async () => {
    const response = await fetch("/api/cocktails");
    const data = await response.json();
    setCocktails(data);
    console.log(data);
  };

  useEffect(() => {
    fetchCocktails();
  }, []);

  return (
    <div className="bg-cover bg-no-repeat bg-[url('/images/heroImage.jpg')] bg-center opacity-90 w-full p-4 md:px-24 md:py-10 text-neutral-50 min-h-fit">
      <h1 className="text-6xl font-bold py-6 text-center">Top Drinks Flashcards</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 mx-5">
        {cocktails &&
          cocktails.map((cocktail) => (
            <div
              key={cocktail._id}
              className="flex flex-col items-center justify-center"
            >
              <h2 className="text-4xl font-bold py-3 text-center">
                {cocktail.strDrink}
              </h2>
              <Flipcard cocktail={cocktail} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default TopPage;
