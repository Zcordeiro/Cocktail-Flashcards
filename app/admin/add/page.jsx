"use client";

import { useState } from "react";
import AdminLinks from "@/components/AdminLinks";

const addPage = () => {
  const [newCocktail, setNewCocktail] = useState({
    name: "",
    alternateName: "",
    mainLiquor: "",
    ingredient1: "",
    ingredient2: "",
    ingredient3: "",
    ingredient4: "",
    ingredient5: "",
    ingredient6: "",
    ingredient7: "",
    ingredient8: "",
    ingredient9: "",
    ingredient10: "",
    ingredientAmount1: "",
    ingredientAmount2: "",
    ingredientAmount3: "",
    ingredientAmount4: "",
    ingredientAmount5: "",
    ingredientAmount6: "",
    ingredientAmount7: "",
    ingredientAmount8: "",
    ingredientAmount9: "",
    ingredientAmount10: "",
    instructions: "",
    flavorTags: [],
    image: "",
    top: false,
    approved: true,
    creator: "64f6193f3c69e3e6a4ff9472",
  });
  const [flavorTags, setFlavorTags] = useState([]);

  const handleFlavorTags = (e) => {
    const { name, value } = e.target;
    if (flavorTags.includes(value)) {
      setFlavorTags((prevState) => prevState.filter((tag) => tag !== value));
    }
    if (!flavorTags.includes(value)) {
      setFlavorTags((prevState) => [...prevState, value]);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCocktail((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    newCocktail.flavorTags = flavorTags;
    console.log("newCocktail: ", newCocktail);
    const response = await fetch("/api/cocktails/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCocktail),
    });
    const data = await response.json();
    alert("Cocktail Added!");
    setNewCocktail({
      name: "",
      alternateName: "",
      mainLiquor: "",
      ingredient1: "",
      ingredient2: "",
      ingredient3: "",
      ingredient4: "",
      ingredient5: "",
      ingredient6: "",
      ingredient7: "",
      ingredient8: "",
      ingredient9: "",
      ingredient10: "",
      ingredientAmount1: "",
      ingredientAmount2: "",
      ingredientAmount3: "",
      ingredientAmount4: "",
      ingredientAmount5: "",
      ingredientAmount6: "",
      ingredientAmount7: "",
      ingredientAmount8: "",
      ingredientAmount9: "",
      ingredientAmount10: "",
      instructions: "",
      flavorTags: [],
      image: "",
      top: false,
      approved: false,
      creator: "",
    });
  };

  return (
    <div className="text-center min-h-screen p-12">
      <h1 className="text-5xl mb-10">Add a new cocktails to the Database</h1>

      <form onSubmit={handleSubmit}>
        <div className="">
          <div className="flex flex-col">
            <label htmlFor="name">Name</label>
            <input
              className="input input-bordered input-lg input-success"
              type="text"
              name="name"
              value={newCocktail.name}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="alternateName">Alternate Name</label>
            <input
              className="input input-bordered input-lg input-success"
              type="text"
              name="alternateName"
              value={newCocktail.alternateName}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="mainLiquor">Main Liquor</label>
            <input
              className="input input-bordered input-lg input-success"
              type="text"
              name="mainLiquor"
              value={newCocktail.mainLiquor}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="instructions">Instructions</label>
            <input
              className="textarea textarea-bordered textarea-lg textarea-success"
              type="textarea"
              name="instructions"
              value={newCocktail.instructions}
              onChange={handleChange}
            />
          </div>

          <div className="text-center text-3xl mt-10">Ingredients</div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 ">
            <div className="flex flex-col ">
              <label htmlFor="ingredient1">Ingredient 1</label>
              <input
                className="input input-bordered input-lg input-success"
                type="text"
                name="ingredient1"
                value={newCocktail.ingredient1}
                onChange={handleChange}
              />

              <div className="my-3">
                <label htmlFor="ingredientAmount1">Amount</label>
                <input
                  className="input input-bordered input-lg input-info mx-2 w-1/2"
                  type="text"
                  name="ingredientAmount1"
                  value={newCocktail.ingredientAmount1}
                  onChange={handleChange}
                />
              </div>
              <hr className="my-5" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="ingredient2">Ingredient 2</label>
              <input
                className="input input-bordered input-lg input-success"
                type="text"
                name="ingredient2"
                value={newCocktail.ingredient2}
                onChange={handleChange}
              />

              <div className="my-3">
                <label htmlFor="ingredientAmount2">Amount</label>
                <input
                  className="input input-bordered input-lg input-info mx-2 w-1/2"
                  type="text"
                  name="ingredientAmount2"
                  value={newCocktail.ingredientAmount2}
                  onChange={handleChange}
                />
              </div>
              <hr className="my-5" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="ingredient3">Ingredient 3</label>
              <input
                className="input input-bordered input-lg input-success"
                type="text"
                name="ingredient3"
                value={newCocktail.ingredient3}
                onChange={handleChange}
              />

              <div className="my-3">
                <label htmlFor="ingredientAmount3">Amount</label>
                <input
                  className="input input-bordered input-lg input-info mx-2 w-1/2"
                  type="text"
                  name="ingredientAmount3"
                  value={newCocktail.ingredientAmount3}
                  onChange={handleChange}
                />
              </div>
              <hr className="my-5" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="ingredient4">Ingredient 4</label>
              <input
                className="input input-bordered input-lg input-success"
                type="text"
                name="ingredient4"
                value={newCocktail.ingredient4}
                onChange={handleChange}
              />

              <div className="my-3">
                <label htmlFor="ingredientAmount4">Amount</label>
                <input
                  className="input input-bordered input-lg input-info mx-2 w-1/2"
                  type="text"
                  name="ingredientAmount4"
                  value={newCocktail.ingredientAmount4}
                  onChange={handleChange}
                />
              </div>
              <hr className="my-5" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="ingredient5">Ingredient 5</label>
              <input
                className="input input-bordered input-lg input-success"
                type="text"
                name="ingredient5"
                value={newCocktail.ingredient5}
                onChange={handleChange}
              />

              <div className="my-3">
                <label htmlFor="ingredientAmount5">Amount</label>
                <input
                  className="input input-bordered input-lg input-info mx-2 w-1/2"
                  type="text"
                  name="ingredientAmount5"
                  value={newCocktail.ingredientAmount5}
                  onChange={handleChange}
                />
              </div>
              <hr className="my-5" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="ingredient6">Ingredient 6</label>
              <input
                className="input input-bordered input-lg input-success"
                type="text"
                name="ingredient6"
                value={newCocktail.ingredient6}
                onChange={handleChange}
              />

              <div className="my-3">
                <label htmlFor="ingredientAmount6">Amount</label>
                <input
                  className="input input-bordered input-lg input-info mx-2 w-1/2"
                  type="text"
                  name="ingredientAmount6"
                  value={newCocktail.ingredientAmount6}
                  onChange={handleChange}
                />
              </div>
              <hr className="my-5" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="ingredient7">Ingredient 7</label>
              <input
                className="input input-bordered input-lg input-success"
                type="text"
                name="ingredient7"
                value={newCocktail.ingredient7}
                onChange={handleChange}
              />

              <div className="my-3">
                <label htmlFor="ingredientAmount7">Amount</label>
                <input
                  className="input input-bordered input-lg input-info mx-2 w-1/2"
                  type="text"
                  name="ingredientAmount7"
                  value={newCocktail.ingredientAmount7}
                  onChange={handleChange}
                />
              </div>
              <hr className="my-5" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="ingredient8">Ingredient 8</label>
              <input
                className="input input-bordered input-lg input-success"
                type="text"
                name="ingredient8"
                value={newCocktail.ingredient8}
                onChange={handleChange}
              />

              <div className="my-3">
                <label htmlFor="ingredientAmount8">Amount</label>
                <input
                  className="input input-bordered input-lg input-info mx-2 w-1/2"
                  type="text"
                  name="ingredientAmount8"
                  value={newCocktail.ingredientAmount8}
                  onChange={handleChange}
                />
              </div>
              <hr className="my-5" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="ingredient9">Ingredient 9</label>
              <input
                className="input input-bordered input-lg input-success"
                type="text"
                name="ingredient9"
                value={newCocktail.ingredient9}
                onChange={handleChange}
              />

              <div className="my-3">
                <label htmlFor="ingredientAmount9">Amount</label>
                <input
                  className="input input-bordered input-lg input-info mx-2 w-1/2"
                  type="text"
                  name="ingredientAmount9"
                  value={newCocktail.ingredientAmount9}
                  onChange={handleChange}
                />
              </div>
              <hr className="my-5" />
            </div>

            <div className="flex flex-col mb-10">
              <label htmlFor="ingredient10">Ingredient 10</label>
              <input
                className="input input-bordered input-lg input-success"
                type="text"
                name="ingredient10"
                value={newCocktail.ingredient10}
                onChange={handleChange}
              />

              <div className="my-3">
                <label htmlFor="ingredientAmount10">Amount</label>
                <input
                  className="input input-bordered input-lg input-info mx-2 w-1/2"
                  type="text"
                  name="ingredientAmount10"
                  value={newCocktail.ingredientAmount10}
                  onChange={handleChange}
                />
              </div>
              <hr className="my-5" />
            </div>
          </div>

          <div className="flavorTags mb-10">
            <label className="block text-2xl">Flavor Tags:</label>
            <div className="flex flex-wrap justify-evenly my-5">
              <div className="bitter">
                <label>
                  <input
                    type="checkbox"
                    name="flavorTags"
                    value="Bitter"
                    onChange={handleFlavorTags}
                    checked={flavorTags.includes("Bitter")}
                  />
                  Bitter
                </label>
              </div>

              <div className="bubbly">
                <label>
                  <input
                    className="mr-2"
                    type="checkbox"
                    name="flavorTags"
                    value="Bubbly"
                    onChange={handleFlavorTags}
                    checked={flavorTags.includes("Bubbly")}
                  />
                  Bubbly
                </label>
              </div>

              <div className="citrusy">
                <label>
                  <input
                    className="mr-2"
                    type="checkbox"
                    name="flavorTags"
                    value="Citrusy"
                    onChange={handleFlavorTags}
                    checked={flavorTags.includes("Citrusy")}
                  />
                  Citrusy
                </label>
              </div>

              <div className="fruity">
                <label>
                  <input
                    className="mr-2"
                    type="checkbox"
                    name="flavorTags"
                    value="Fruity"
                    onChange={handleFlavorTags}
                    checked={flavorTags.includes("Fruity")}
                  />
                  Fruity
                </label>
              </div>

              <div className="refreshing">
                <label>
                  <input
                    className="mr-2"
                    type="checkbox"
                    name="flavorTags"
                    value="Refreshing"
                    onChange={handleFlavorTags}
                    checked={flavorTags.includes("Refreshing")}
                  />
                  Refreshing
                </label>
              </div>

              <div className="sour">
                <label>
                  <input
                    className="mr-2"
                    type="checkbox"
                    name="flavorTags"
                    value="Sour"
                    onChange={handleFlavorTags}
                    checked={flavorTags.includes("Sour")}
                  />
                  Sour
                </label>
              </div>

              <div className="spicy">
                <label>
                  <input
                    className="mr-2"
                    type="checkbox"
                    name="flavorTags"
                    value="Spicy"
                    onChange={handleFlavorTags}
                    checked={flavorTags.includes("Spicy")}
                  />
                  Spicy
                </label>
              </div>

              <div className="strong">
                <label>
                  <input
                    className="mr-2"
                    type="checkbox"
                    name="flavorTags"
                    value="Strong"
                    onChange={handleFlavorTags}
                    checked={flavorTags.includes("Strong")}
                  />
                  Strong
                </label>
              </div>

              <div className="sweet">
                <label>
                  <input
                    className="mr-2"
                    type="checkbox"
                    name="flavorTags"
                    value="Sweet"
                    onChange={handleFlavorTags}
                    checked={flavorTags.includes("Sweet")}
                  />
                  Sweet
                </label>
              </div>

              <div className="tangy">
                <label>
                  <input
                    className="mr-2"
                    type="checkbox"
                    name="flavorTags"
                    value="Tangy"
                    onChange={handleFlavorTags}
                    checked={flavorTags.includes("Tangy")}
                  />
                  Tangy
                </label>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="image">Image URL</label>
            <input
              className="input input-bordered input-lg input-success"
              type="text"
              name="image"
              value={newCocktail.image}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col mt-5">
            <label htmlFor="top">Top Cocktail?</label>
            <select
              className="select select-bordered select-lg select-primary"
              name="top"
              value={newCocktail.top.toString()}
              onChange={(e) =>
                setNewCocktail({
                  ...newCocktail,
                  top: JSON.parse(e.target.value),
                })
              }
            >
              <option value={true.toString()}>Yes</option>
              <option value={false.toString()}>No</option>
            </select>
          </div>

          <button className="btn btn-outline btn-success mt-10" type="submit">
            Add Cocktail
          </button>
        </div>
      </form>

      <AdminLinks />
    </div>
  );
};

export default addPage;
