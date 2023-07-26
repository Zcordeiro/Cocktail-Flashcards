"use client";

import { useEffect, useState } from "react";
import Flashcard from "@/components/Flashcard";


const randomPage = () => {
    const [coctails, setCoctails] = useState([]);
    const fetchCoctails = async () => {
        const res = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");
        const data = await res.json();
        console.log(data);
        setCoctails(data.drinks);
    };

    useEffect(() => {
        fetchCoctails();
    }, []);

    const handleRandom = () => {
        fetchCoctails();
    };


    return (
        <div className="bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-gray-900 to-gray-400 w-full px-7 py-4 md:px-24 md:py-10 text-neutral-50 min-h-screen">
            <h1 className="text-6xl font-bold py-6 text-center">Study flashcards</h1>

            <div className="flex flex-col items-center justify-center">
                <Flashcard coctail={coctails} />
            </div>

            <div className="flex flex-row items-center justify-center">
                <button onClick={handleRandom} className="text-neutral-50 m-4 p-4 border-2 border-black rounded-lg hover:bg-neutral-200 hover:text-black hover:font-bold">Randomize</button>
            </div>

            <a className="fixed top-10 right-0 bg-green-800 p-5 rounded hover:bg-green-900/40 hover:text-slate-50 hover:font-bold hover:cursor-pointer" href="/">Go Back</a>
        </div>
    )
};

export default randomPage;