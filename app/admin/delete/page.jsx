"use client";

import { useEffect, useState } from "react";
import AdminLinks from "@/components/AdminLinks";

const deletePage = () => {
  const [cocktails, setCocktails] = useState([]);
  const [selectedCocktail, setSelectedCocktail] = useState(null);

  const getCocktails = async () => {
    const response = await fetch("/api/cocktails");
    const data = await response.json();
    setCocktails(data);
  };

  useEffect(() => {
    getCocktails();
  }, []);

  const handleSelect = (cocktail) => {
    setSelectedCocktail(cocktail);
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this cocktail?"
    );
    if (confirm) {
      const response = await fetch(`/api/cocktails/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      alert("Cocktail Deleted!");
      window.location.reload();
    }
  };

  return (
    <div className="text-center min-h-screen p-12">
      <h1 className="text-5xl">Delete a cocktail currently in the Database</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 my-10">
        {cocktails.map((cocktail) => (
          <button
            key={cocktail._id}
            className="btn btn-outline btn-error m-3"
            onClick={() => handleSelect(cocktail)}
          >
            <h2 className="text-3xl">{cocktail.name}</h2>
          </button>
        ))}
      </div>

      {selectedCocktail && (
        <div className="flex justify-center">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-3xl">{selectedCocktail.name}</h2>
            <button
              className="btn btn-outline btn-error m-3"
              onClick={() => handleDelete(selectedCocktail._id)}
            >
              Delete?
            </button>
          </div>
        </div>
      )}

      <AdminLinks />
    </div>
  );
};

export default deletePage;
