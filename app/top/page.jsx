

const topPage = () => {
    return (
        <div className="bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-gray-900 to-gray-400 w-full px-7 py-4 md:px-24 md:py-10 text-neutral-50 min-h-screen">
            <h1 className="text-6xl font-bold py-6 text-center">Top 50 Flashcards</h1>

            <a className="fixed top-52 right-0 bg-green-800 p-5 rounded hover:bg-green-900/40 hover:text-slate-50 hover:font-bold hover:cursor-pointer" href="/">Go Back</a>
        </div>
    )
};

export default topPage;