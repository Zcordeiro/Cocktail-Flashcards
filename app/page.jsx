// import Flipcard from "@/components/Flipcard";

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
//     ingredientAmount4: "rim",
//     instructions: "Rub rim of cocktail glass with lime juice. Dip rim in salt. Shake ingredients with ice, strain into the glass, and serve.",
//     flavorTags: ["Sour", "Strong", "Bitter", "Fruity", "Sweet", "Sour", "Strong", "Bitter", "Fruity", "Sweet"],
// };

export default function Home() {
  return (
    <>
      <div className="backgroundImage ">
        <div className="bg-slate-950/40">
          <div className="hero-content text-center mx-auto">
            <div className="max-w-md mt-8 md:mt-20 bg-gradient-to-r from-green-400 via-green-200 to-yellow-300 bg-clip-text text-transparent">
              <h1 className="text-5xl font-extrabold">WELCOME!</h1>

              <a href="/random" className="btn btn-info btn-lg md:hidden">
                Click here to get started with a random cocktal
              </a>
             
              <p className="my-5 font-bold text-2xl">
                This simple cocktail app built to help you learn the
                ingredients of your favorite cocktails. You can search for a
                drink, browse through top drinks, or get a random flashcard.
                Enjoy!
              </p>

              <a href="/random" className="hidden md:btn md:btn-info md:btn-lg mt-3">
                Click here to get started with a random cocktal
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
