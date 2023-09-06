"use client";

import { useState, useEffect } from "react";
import AdminLinks from "@/components/AdminLinks";

const editPage = () => {
  const [cocktails, setCocktails] = useState([]);
  const [cocktailToEdit, setCocktailToEdit] = useState(null);

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
    setCocktailToEdit(cocktail);
  };

  const editCocktail = async (cocktail) => {
    const response = await fetch(`/api/cocktails/${cocktail._id}`, {
      method: "PUT",
      body: JSON.stringify(cocktail),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log("data: ", data);
    getCocktails();
    setCocktailToEdit(null);
  };

  return (
    <div className="text-center min-h-screen p-12">
      <h1 className="text-5xl">All cocktails currently in the Database</h1>

      {cocktailToEdit && (
        <div className="flex flex-col justify-center">
          <label className="block text-2xl mt-4">Name</label>
          <input
            className="input input-bordered input-lg input-info"
            type="text"
            name="name"
            value={cocktailToEdit.name}
            onChange={(e) =>
              setCocktailToEdit({ ...cocktailToEdit, name: e.target.value })
            }
          />

          <label className="block text-2xl mt-4">Approved?</label>
          <select
            className="input input-bordered input-lg input-info"
            name="approved"
            value={cocktailToEdit.approved}
            onChange={(e) =>
              setCocktailToEdit({ ...cocktailToEdit, approved: e.target.value })
            }
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>

          <label className="block text-2xl mt-4">Top?</label>
          <select
            className="input input-bordered input-lg input-info"
            name="top"
            value={cocktailToEdit.top}
            onChange={(e) =>
              setCocktailToEdit({ ...cocktailToEdit, top: e.target.value })
            }
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>

          <label className="block text-2xl mt-4">Instructions</label>
          <textarea
            className="form-textarea textarea textarea-bordered textarea-lg textarea-info"
            name="instructions"
            value={cocktailToEdit.instructions}
            onChange={(e) =>
              setCocktailToEdit({
                ...cocktailToEdit,
                instructions: e.target.value,
              })
            }
          />

          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="ingredientOne p-5 my-6 ">
              <label className="block text-2xl">Ingredient 1:</label>
              <input
                className="input input-bordered input-lg input-info"
                type="text"
                name="ingredient1"
                value={cocktailToEdit.ingredient1}
                onChange={(e) =>
                  setCocktailToEdit({
                    ...cocktailToEdit,
                    ingredient1: e.target.value,
                  })
                }
              />

              <label className="block text-xl">Amount (in ounces):</label>
              <input
                className="input input-bordered input-lg input-info"
                type="text"
                name="ingredientAmount1"
                value={cocktailToEdit.ingredientAmount1}
                onChange={(e) =>
                  setCocktailToEdit({
                    ...cocktailToEdit,
                    ingredientAmount1: e.target.value,
                  })
                }
              />
            </div>

            <div className="ingredientTwo p-5 my-6 ">
              <label className="block text-2xl">Ingredient 2:</label>
              <input
                className="input input-bordered input-lg input-info"
                type="text"
                name="ingredient2"
                value={cocktailToEdit.ingredient2}
                onChange={(e) =>
                  setCocktailToEdit({
                    ...cocktailToEdit,
                    ingredient2: e.target.value,
                  })
                }
              />

              <label className="block text-xl">Amount (in ounces):</label>
              <input
                className="input input-bordered input-lg input-info"
                type="text"
                name="ingredientAmount2"
                value={cocktailToEdit.ingredientAmount2}
                onChange={(e) =>
                  setCocktailToEdit({
                    ...cocktailToEdit,
                    ingredientAmount2: e.target.value,
                  })
                }
              />
            </div>

            <div className="ingredientThree p-5 my-6 ">
              <label className="block text-2xl">Ingredient 3:</label>
              <input
                className="input input-bordered input-lg input-info"
                type="text"
                name="ingredient3"
                value={cocktailToEdit.ingredient3}
                onChange={(e) =>
                  setCocktailToEdit({
                    ...cocktailToEdit,
                    ingredient3: e.target.value,
                  })
                }
              />

              <label className="block text-xl">Amount (in ounces):</label>
              <input
                className="input input-bordered input-lg input-info"
                type="text"
                name="ingredientAmount3"
                value={cocktailToEdit.ingredientAmount3}
                onChange={(e) =>
                  setCocktailToEdit({
                    ...cocktailToEdit,
                    ingredientAmount3: e.target.value,
                  })
                }
              />
            </div>

            <div className="ingredientFour p-5 my-6 ">
              <label className="block text-2xl">Ingredient 4:</label>
              <input
                className="input input-bordered input-lg input-info"
                type="text"
                name="ingredient4"
                value={cocktailToEdit.ingredient4}
                onChange={(e) =>
                  setCocktailToEdit({
                    ...cocktailToEdit,
                    ingredient4: e.target.value,
                  })
                }
              />

              <label className="block text-xl">Amount (in ounces):</label>
              <input
                className="input input-bordered input-lg input-info"
                type="text"
                name="ingredientAmount4"
                value={cocktailToEdit.ingredientAmount4}
                onChange={(e) =>
                  setCocktailToEdit({
                    ...cocktailToEdit,
                    ingredientAmount4: e.target.value,
                  })
                }
              />
            </div>

            <div className="ingredientFive p-5 my-6 ">
              <label className="block text-2xl">Ingredient 5:</label>
              <input
                className="input input-bordered input-lg input-info"
                type="text"
                name="ingredient5"
                value={cocktailToEdit.ingredient5}
                onChange={(e) =>
                  setCocktailToEdit({
                    ...cocktailToEdit,
                    ingredient5: e.target.value,
                  })
                }
              />

              <label className="block text-xl">Amount (in ounces):</label>
              <input
                className="input input-bordered input-lg input-info"
                type="text"
                name="ingredientAmount5"
                value={cocktailToEdit.ingredientAmount5}
                onChange={(e) =>
                  setCocktailToEdit({
                    ...cocktailToEdit,
                    ingredientAmount5: e.target.value,
                  })
                }
              />
            </div>

            <div className="ingredientSix p-5 my-6 ">
              <label className="block text-2xl">Ingredient 6:</label>
              <input
                className="input input-bordered input-lg input-info"
                type="text"
                name="ingredient6"
                value={cocktailToEdit.ingredient6}
                onChange={(e) =>
                  setCocktailToEdit({
                    ...cocktailToEdit,
                    ingredient6: e.target.value,
                  })
                }
              />

              <label className="block text-xl">Amount (in ounces):</label>
              <input
                className="input input-bordered input-lg input-info"
                type="text"
                name="ingredientAmount6"
                value={cocktailToEdit.ingredientAmount6}
                onChange={(e) =>
                  setCocktailToEdit({
                    ...cocktailToEdit,
                    ingredientAmount6: e.target.value,
                  })
                }
              />
            </div>

            <div className="ingredientSeven p-5 my-6 ">
              <label className="block text-2xl">Ingredient 7:</label>
              <input
                className="input input-bordered input-lg input-info"
                type="text"
                name="ingredient7"
                value={cocktailToEdit.ingredient7}
                onChange={(e) =>
                  setCocktailToEdit({
                    ...cocktailToEdit,
                    ingredient7: e.target.value,
                  })
                }
              />

              <label className="block text-xl">Amount (in ounces):</label>
              <input
                className="input input-bordered input-lg input-info"
                type="text"
                name="ingredientAmount7"
                value={cocktailToEdit.ingredientAmount7}
                onChange={(e) =>
                  setCocktailToEdit({
                    ...cocktailToEdit,
                    ingredientAmount7: e.target.value,
                  })
                }
              />
            </div>

            <div className="ingredientEight p-5 my-6 ">
              <label className="block text-2xl">Ingredient 8:</label>
              <input
                className="input input-bordered input-lg input-info"
                type="text"
                name="ingredient8"
                value={cocktailToEdit.ingredient8}
                onChange={(e) =>
                  setCocktailToEdit({
                    ...cocktailToEdit,
                    ingredient8: e.target.value,
                  })
                }
              />

              <label className="block text-xl">Amount (in ounces):</label>
              <input
                className="input input-bordered input-lg input-info"
                type="text"
                name="ingredientAmount8"
                value={cocktailToEdit.ingredientAmount8}
                onChange={(e) =>
                  setCocktailToEdit({
                    ...cocktailToEdit,
                    ingredientAmount8: e.target.value,
                  })
                }
              />
            </div>

            <div className="ingredientNine p-5 my-6 ">
              <label className="block text-2xl">Ingredient 9:</label>
              <input
                className="input input-bordered input-lg input-info"
                type="text"
                name="ingredient9"
                value={cocktailToEdit.ingredient9}
                onChange={(e) =>
                  setCocktailToEdit({
                    ...cocktailToEdit,
                    ingredient9: e.target.value,
                  })
                }
              />

              <label className="block text-xl">Amount (in ounces):</label>
              <input
                className="input input-bordered input-lg input-info"
                type="text"
                name="ingredientAmount9"
                value={cocktailToEdit.ingredientAmount9}
                onChange={(e) =>
                  setCocktailToEdit({
                    ...cocktailToEdit,
                    ingredientAmount9: e.target.value,
                  })
                }
              />
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 my-10">
        {cocktails.map((cocktail) => (
          <button
            key={cocktail._id}
            className="btn btn-outline btn-warning m-3"
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

export default editPage;
