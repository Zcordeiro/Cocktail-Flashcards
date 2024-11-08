import { Shadows_Into_Light, Kalam } from "next/font/google";

export const shadows_into_light = Shadows_Into_Light({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const kalam = Kalam({
  subsets: ["devanagari"],
  display: "swap",
  weight: "400",
});

const Flipcard = ({ cocktail }) => {
  const {
    name,
    mainLiquor,
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

  const getTagColor = (tag) => {
    if (tag === "Sour") {
      return "badge badge-success";
    } else if (tag === "Sweet") {
      return "badge badge-error";
    } else if (tag === "Strong") {
      return "badge badge-warning";
    } else if (tag === "Bitter") {
      return "badge badge-accent";
    } else if (tag === "Citrusy") {
      return "badge badge-primary-content";
    } else if (tag === "Fruity") {
      return "badge badge-info";
    } else if (tag === "Bubbly") {
      return "badge badge-outline badge-secondary";
    } else if (tag === "Tangy") {
      return "badge badge-secondary";
    } else if (tag === "Refreshing") {
      return "badge badge-warning";
    } else if (tag === "Spicy") {
      return "badge badge-error";
    }
  };

  const getLiquorColor = (liquor) => {
    if (liquor === "Vodka") {
      return "badge badge-info text-info-content badge-lg";
    } else if (liquor === "Gin") {
      return "badge badge-neutral text-neutral-content badge-lg";
    } else if (liquor === "Rum") {
      return "badge badge-accent text-accent-content badge-lg";
    } else if (liquor === "Tequila") {
      return "badge badge-secondary text-secondary-content badge-lg";
    } else if (liquor === "Whiskey") {
      return "badge badge-warning  text-warning-content badge-lg";
    } else {
      return "badge badge-outline text-outline-content badge-lg";
    }
  };

  return (
    <div className="flip-card my-7 rounded-xl">
      <div className="flip-card-inner">
        <div className="flip-card-front flex flex-col justify-center items-center bg-gradient-to-tr from-base-content to-primary/80">
          {mainLiquor ? (
            <div className={`${getLiquorColor(mainLiquor)}`}>{mainLiquor}</div>
          ) : (
            <div></div>
          )}
          <div className="profile-image my-auto">
            {image ? (
              <img
                src={image}
                className="rounded-xl mx-auto"
                width={150}
                height={150}
                alt="Cocktail Pic"
              />
            ) : (
              <div></div>
            )}

            <div className="name text-primary-content">{name}</div>

            <div className={`tags ${shadows_into_light.className}`}>
              {flavorTags.map((tag, index) => {
                const tagColor = getTagColor(tag);
                return (
                  <div key={index} className={`tag ${tagColor} mx-4`}>
                    {tag}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex items-center flip-card-back bg-gradient-to-tr from-primary/80 to-base-200">
          <div className={`${kalam.className}`}>
            <h2 className="text-3xl text-primary underline mb-4">{name}</h2>
            <div className="ingredients grid grid-cols-2">
              {ingredientsWithMeasures.map((ingrediant, index) => {
                if (ingrediant.ingredient) {
                  return (
                    <div
                      key={index}
                      className="text-lg mb-3 text-base-content underline"
                    >
                      {ingrediant.ingredient} - {ingrediant.measure}
                    </div>
                  );
                }
              })}
            </div>
            <hr className="my-3" />

            <p className="text-base mb-5 text-base-content underline">
              {instructions}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flipcard;
