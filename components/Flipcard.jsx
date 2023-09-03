import { Shadows_Into_Light, Kalam } from "next/font/google";

export const shadows_into_light = Shadows_Into_Light({
    subsets: ["latin"],
    display: "swap",
    weight: "400",
});

export const kalam = Kalam({
    subsets: ["latin"],
    display: "swap",
    weight: "400",
});



const Flipcard = ({ cocktail }) => {
  const {
    name,
    image,
    instructions,
    flavorTags,
    ingredient1,
    ingredient2,
    ingredient3,
    ingredient4,
    ingredient5,
    ingredient6,
    ingredient7,
    ingredient8,
    ingredient9,
    ingredient10,
    ingredientAmount1,
    ingredientAmount2,
    ingredientAmount3,
    ingredientAmount4,
    ingredientAmount5,
    ingredientAmount6,
    ingredientAmount7,
    ingredientAmount8,
    ingredientAmount9,
    ingredientAmount10,
  } = cocktail;

  const ingredientsWithMeasures = [
    { ingredient: ingredient1, measure: ingredientAmount1 },
    { ingredient: ingredient2, measure: ingredientAmount2 },
    { ingredient: ingredient3, measure: ingredientAmount3 },
    { ingredient: ingredient4, measure: ingredientAmount4 },
    { ingredient: ingredient5, measure: ingredientAmount5 },
    { ingredient: ingredient6, measure: ingredientAmount6 },
    { ingredient: ingredient7, measure: ingredientAmount7 },
    { ingredient: ingredient8, measure: ingredientAmount8 },
    { ingredient: ingredient9, measure: ingredientAmount9 },
    { ingredient: ingredient10, measure: ingredientAmount10 },
  ];

  return (
    <div className="flip-card my-7">
      <div className="flip-card-inner">
        <div className="flip-card-front flex justify-center items-center">
          <div className="profile-image my-auto">
            {image ? <img src={image} className="rounded-xl" width={150} height={150} alt="Cocktail Pic" /> : <div></div>}

            <div className="name">{name}</div>

            <div className={`tags ${kalam}`}>
              {flavorTags.map((tag, index) => {
                return (
                  <div key={index} className="tag">
                    {tag}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex items-center flip-card-back">
          <div className={`${kalam} text-lg`}>
            <p className="text-sm ">{instructions}</p>
            <div className="ingredients">
              {ingredientsWithMeasures.map((ingrediant, index) => {
                if (ingrediant.ingredient) {
                  return (
                    <div key={index} className="text-base mb-3">
                      {ingrediant.ingredient} - {ingrediant.measure}
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flipcard;
