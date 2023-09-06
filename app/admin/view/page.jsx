"use client";

import { useEffect, useState } from "react";
import Flipcard from "@/components/Flipcard";
import AdminLinks from "@/components/AdminLinks";

const viewAllPage = () => {
  const [cocktails, setCocktails] = useState([]);
  const [selectedCocktail, setSelectedCocktail] = useState(null);

  const getCocktails = async () => {
    const response = await fetch("/api/cocktails");
    const data = await response.json();
    setCocktails(data);
    console.log("data: ", data);
  };

  useEffect(() => {
    getCocktails();
  }, []);

  const handleSelect = (cocktail) => {
    setSelectedCocktail(cocktail);
  };

  return (
    <div className="text-center min-h-screen p-12">
      <h1 className="text-5xl">All cocktails currently in the Database</h1>

      {selectedCocktail && (
        <div className="flex justify-center">
          <Flipcard cocktail={selectedCocktail} />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 my-10">
        {cocktails.map((cocktail) => (
          <button
            key={cocktail._id}
            className="btn btn-outline btn-secondary m-3"
            onClick={() => handleSelect(cocktail)}
          >
            <h2 className="text-3xl">{cocktail.name}</h2>
          </button>
        ))}
      </div>

      <AdminLinks />
    </div>
  );
};

export default viewAllPage;
