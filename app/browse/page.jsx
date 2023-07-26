"use client";

import { useEffect, useState } from "react";
import Flashcard from "@/components/Flashcard";


const browsePage = () => {
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


    return (
        <div className="bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-gray-900 to-gray-400 w-full px-7 py-4 md:px-24 md:py-10 text-neutral-50 min-h-screen">
            <h1 className="text-center text-6xl font-bold py-6">Browse flashcards</h1>

            

            <a className="fixed top-10 bg-green-800 m-5 p-5 rounded hover:bg-green-900/40 hover:text-slate-50 hover:font-bold hover:cursor-pointer" href="/">Go Back to Home Page</a>
        </div>
    )
};

export default browsePage;