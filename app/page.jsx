

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-10 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-gray-900 to-gray-400 w-full">
      <h1 className="text-6xl font-bold py-6">Welcome to Coctail Flashcards</h1>

      <p className="text-xl text-center font-bold py-6">This is a flashcard app for learning coctail recipes. I made it to help myself better memorize drinks. If you have any questions please feel free to contact me <a className="text-green-600" href="mailto:zcordeiro@gmail.com">HERE</a> </p>

      <div className="flex flex-col items-center justify-center">
        What would you like to do?
        <div className="flex flex-row items-center justify-center">
          <a href="/browse" className="text-neutral-50 m-4 p-4 border-2 border-black rounded-lg hover:bg-neutral-200 hover:text-black hover:font-bold">Browse flashcards</a>
          <a href="/random" className="text-neutral-50 m-4 p-4 border-2 border-black rounded-lg hover:bg-neutral-200 hover:text-black hover:font-bold">Random flashcards</a>
          <a href="/search" className="text-neutral-50 m-4 p-4 border-2 border-black rounded-lg hover:bg-neutral-200 hover:text-black hover:font-bold">Search flashcards</a>
        </div>
      </div>
    </main>
  )
}
