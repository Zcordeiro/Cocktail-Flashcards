"use client";

import { useEffect, useState } from "react";
import Flashcard from "@/components/Flashcard";


const browsePage = () => {
    const [cocktails, setCocktails] = useState([]);
    const [filteredCocktails, setFilteredCocktails] = useState([]);

    // const fetchCocktails = async () => {
    //     const res = await fetch(
    //         "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
    //     );
    //     const data = await res.json();
    //     setCocktails(data.drinks);
    //     setFilteredCocktails(data.drinks);
    // };

    // useEffect(() => {
    //     fetchCocktails();
    // }, []);

    const fetchCocktailByLetter = async (letter) => {
        const res = await fetch(
            `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`
        );
        const data = await res.json();
        const filteredData = data.drinks.filter((cocktail) =>
            cocktail.strDrink.toLowerCase().startsWith(letter.toLowerCase())
        );
        setFilteredCocktails(filteredData);
    };

    // const fetchCocktailByLiquor = async (liquor) => {
    //     const res = await fetch(
    //         `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${liquor}`
    //     );
    //     const data = await res.json();
    //     console.log(data);
    //     setCocktails(data.drinks);
    // };


    return (
        <div className="bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-emerald-600 via-indigo-800 to-emerald-800  w-full px-7 py-4 md:px-24 md:py-10 text-neutral-50 min-h-screen">
            <h1 className="text-center text-6xl font-bold py-6">Browse flashcards</h1>

            {/* <div className="">
                Liquor:
                <ul className="grid grid-cols-3 md:grid-cols-5 m-5">
                    {["Gin", "Rum", "Tequila", "Vodka", "Whiskey"].map((liquor) => {
                        return (
                            <li
                                key={liquor}
                                className="bg-green-800 text-center p-3 rounded hover:bg-green-900/40 hover:text-slate-50 hover:font-bold hover:cursor-pointer m-5"
                                onClick={() => fetchCocktailByLiquor(liquor)}
                            >
                                {liquor}
                            </li>
                        );
                    })}
                </ul>
            </div> */}



            <div className="">
                Alphabetical:
                <ul className="grid grid-cols-3 md:grid-cols-7 m-5">
                    {Array.from(Array(26)).map((_, index) => {
                        const letter = String.fromCharCode(97 + index);
                        return (
                            <li
                                key={letter}
                                className="btn btn-outline m-2"
                                onClick={() => fetchCocktailByLetter(letter)}
                            >
                                {letter.toUpperCase()}
                            </li>
                        );
                    })}
                </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-2 mt-8 place-items-center">
                {filteredCocktails && filteredCocktails.map((cocktail) => (
                    <Flashcard key={cocktail.idDrink} cocktail={cocktail} />
                ))}
            </div>

        </div>
    )
};

export default browsePage;