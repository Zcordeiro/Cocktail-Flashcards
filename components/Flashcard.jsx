"use client";

import { useState } from "react";
import { Roboto_Mono, Lato, Source_Code_Pro } from "next/font/google";

export const roboto_mono = Roboto_Mono({
  subsets: ["latin-ext"],
  display: "swap",
  style: "italic",
});

export const lato = Lato({
  subsets: ["latin-ext"],
  display: "swap",
  weight: "400",
});

export const source_code_pro = Source_Code_Pro({
  subsets: ["latin-ext"],
  weight: "500",
});

const Flashcard = ({ cocktail }) => {
  const display = cocktail;

  const strDrink = display?.strDrink;
  const strDrinkThumb = display?.strDrinkThumb;
  const strInstructions = display?.strInstructions;

  const ingredientsWithMeasures = [
    { ingredient: display?.strIngredient1, measure: display?.strMeasure1 },
    { ingredient: display?.strIngredient2, measure: display?.strMeasure2 },
    { ingredient: display?.strIngredient3, measure: display?.strMeasure3 },
    { ingredient: display?.strIngredient4, measure: display?.strMeasure4 },
    { ingredient: display?.strIngredient5, measure: display?.strMeasure5 },
    { ingredient: display?.strIngredient6, measure: display?.strMeasure6 },
    { ingredient: display?.strIngredient7, measure: display?.strMeasure7 },
    { ingredient: display?.strIngredient8, measure: display?.strMeasure8 },
  ];

  const [showIngredients, setShowIngredients] = useState(false);

  return (
    <>
  <div className="">
      <div className="card w-80 bg-base-100 shadow-xl my-5 mx-auto">
        <figure>
          <img src={strDrinkThumb} alt="Cocktail Pic" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{strDrink}</h2>
          <div className="card-actions justify-end">
            <label>Hide</label>
            <input
              type="checkbox"
              className="toggle toggle-success"
              checked={showIngredients}
              onChange={(e) => setShowIngredients(e.target.checked)}
            />
            <label>See Recipe</label>
          </div>

          {showIngredients && (
            <>
              <div className="text-xl text-neutral-950 font-bold mb-5 underline">
                Ingredients Used
              </div>
              {ingredientsWithMeasures.map((ingredient, index) => {
                if (ingredient.ingredient) {
                  return (
                    <div
                      key={index}
                      className="text-base text-neutral-950 mb-3"
                    >
                      {ingredient.ingredient} - {ingredient.measure}
                    </div>
                  );
                }
              })}
              <div className="text-sm text-neutral-950">
            <div className="text-lg underline italic mr-3">Instructions:</div>
            {strInstructions}
          </div>
            </>
          )}

          
        </div>
      </div>
      </div>
    </>
  );
};

export default Flashcard;
