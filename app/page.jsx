

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-10 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-gray-900 to-gray-400 w-full">
      <h1 className="text-6xl font-bold py-6">Welcome to my Cocktail Flashcards</h1>

      <p className="text-xl text-center font-bold py-6">This is a flashcard app for learning cocktail recipes. I made it to help myself better memorize drinks.</p>

      <span className="italic text-lg mt-8 font-extrabold">If you have any questions please feel free to contact me</span> <a className="text-blue-500 font-extrabold text-lg" href="https://www.zeuscordeiro.com/about" target="_blank">HERE</a>
    </main>
  )
}
