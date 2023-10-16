"use client";

import { useEffect, useState } from "react";
import Flashcard from "@/components/Flashcard";


const randomPage = () => {
    const [cocktails, setCocktails] = useState([]);
    const fetchCocktails = async () => {
        const res = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");
        const data = await res.json();
        setCocktails(data.drinks[0]);
    };

    useEffect(() => {
        fetchCocktails();
    }, []);

    const handleRandom = () => {
        fetchCocktails();
    };


    return (
        <div className="bg-cover bg-no-repeat bg-[url('/images/drinkImage.jpg')] bg-center opacity-90 w-full p-4 md:px-24 md:py-10 text-neutral-100 min-h-screen">
            <h1 className="text-6xl font-bold py-6 text-center">Random Flashcard</h1>
            <div className="flex justify-center">
                <button onClick={handleRandom} className="btn btn-lg btn-accent">Discover</button>
            </div>

            <div className="flex flex-col items-center justify-center">
                <Flashcard cocktail={cocktails} />
            </div>

        </div>
    )
};

export default randomPage;