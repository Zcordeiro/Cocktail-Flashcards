"use client";

import { useEffect, useState } from "react";
import Flashcard from "@/components/Flashcard";


const randomPage = () => {
    const [cocktails, setCocktails] = useState([]);
    const fetchCocktails = async () => {
        const res = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");
        const data = await res.json();
        console.log(data);
        setCocktails(data.drinks);
    };

    useEffect(() => {
        fetchCocktails();
    }, []);

    const handleRandom = () => {
        fetchCocktails();
    };


    return (
        <div className="bg-gradient-to-bl from-slate-500 to-gray-100 w-full px-7 py-4 md:px-24 md:py-10 text-neutral-100 min-h-screen">
            <h1 className="text-6xl font-bold py-6 text-center">Random Flashcard</h1>
            <div className="">
                <button onClick={handleRandom} className="text-neutral-950 m-4 p-4 border-2 border-black rounded-lg bg-neutral-100 hover:bg-neutral-200 hover:font-bold">Randomize</button>
            </div>

            <div className="flex flex-col items-center justify-center">
                <Flashcard cocktail={cocktails} />
            </div>

            <a className="fixed top-52 right-0 bg-green-800 p-5 rounded hover:bg-green-900/40 hover:text-slate-50 hover:font-bold hover:cursor-pointer" href="/">Go Back</a>
        </div>
    )
};

export default randomPage;