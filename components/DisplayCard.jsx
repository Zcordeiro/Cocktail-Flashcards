const DisplayCard = ({ cocktail }) => {
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

  return (
    <div className="mt-4">
      <div className="flex flex-col bg-gradient-to-tr from-primary/90 to-base-200 shadow-xl rounded-xl">
        <h2 className="text-center mt-8 text-5xl text-base-content font-bold underline italic">
          {strDrink}
        </h2>

        <div className="flex flex-col-reverse lg:flex-row items-center">
          <figure>
            <img
              className="rounded-xl mx-auto lg:w-80 h-56 mb-8 lg:ml-2 mt-2 border-2 border-base-content"
              src={strDrinkThumb}
              alt={`${strDrink} Image`}
            />
          </figure>
          <div className="card-body">
            <>
              <div className="text-xl text-neutral-100 font-bold mb-5 underline">
                Ingredients Used
              </div>
              {ingredientsWithMeasures.map((ingredient, index) => {
                if (ingredient.ingredient) {
                  return (
                    <div
                      key={index}
                      className="text-base text-neutral-100 mb-3"
                    >
                      {ingredient.ingredient} - {ingredient.measure}
                    </div>
                  );
                }
              })}
              <div className="text-sm text-neutral-100">
                <div className="text-lg underline italic mr-3">
                  Instructions:
                </div>
                {strInstructions}
              </div>
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayCard;
