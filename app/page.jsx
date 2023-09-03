import Flipcard from "@/components/Flipcard";

// const mockCocktail = {
//   name: "Margarita",
//   image:
//     "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
//     alternateName: "Margarita",
//     ingredient1: "Tequila",
//     ingredient2: "Triple sec",
//     ingredient3: "Lime juice",
//     ingredient4: "Salt",
//     ingredientAmount1: "1 1/2 oz ",
//     ingredientAmount2: "1/2 oz ",
//     ingredientAmount3: "1 oz ",
//     ingredientAmount4: "",
//     instructions: "Rub rim of cocktail glass with lime juice. Dip rim in salt. Shake ingredients with ice, strain into the glass, and serve.",
//     flavorTags: ["Sour", "Strong"],
// };



export default function Home() {
  return (
    <div className="hero min-h-screen bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-emerald-600 via-indigo-800 to-emerald-900">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6">
            This is a cocktail flashcard app built to help you learn the
            ingredients of your favorite cocktails. You can search for a drink,
            browse through top drinks, or get a random flashcard. Enjoy!
          </p>
          <a href="/random" className="btn btn-accent">Get Started with a random cocktal</a>
{/* 
          <Flipcard cocktail={mockCocktail} /> */}
        </div>
      </div>
    </div>
  );
}
