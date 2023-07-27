
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
    subsets: ['latin-ext'],
    weight: '500',
});

const Flashcard = async ({ cocktail }) => {
    const display = await cocktail;
    console.log(display);

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
        <>
            <div className="flip-card my-7">
                <div className="flip-card-inner">
                    <div className="flip-card-front flex justify-center items-center">
                        <div className="profile-image my-auto">
                            <img src={strDrinkThumb} alt="cocktail Pic" width={200} height={150} className="rounded-3xl mx-auto" />

                            <div className={`my-5 text-neutral-950 text-4xl underline font-bold ${source_code_pro.className}`}>
                                {strDrink}
                            </div>

                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center m-3 flip-card-back">
                        <div className="">
                            <div className={`my-8 text-blue-500 text-4xl underline font-extrabold ${source_code_pro.className}`}>
                                {strDrink}
                            </div>
                            <div className="text-xl text-neutral-950 font-bold mb-5 underline">
                                Ingrediants Used
                            </div>
                            {ingredientsWithMeasures.map((ingrediant, index) => {
                                if (ingrediant.ingredient) {
                                    return (
                                        <div key={index} className="text-base text-neutral-950 mb-3">
                                            {ingrediant.ingredient} - {ingrediant.measure}
                                        </div>
                                    )
                                }
                            }
                            )}
                            <div className="text-sm text-neutral-950">
                                <div className="text-lg underline italic mr-3">Instructions:</div>
                                {strInstructions}
                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Flashcard;