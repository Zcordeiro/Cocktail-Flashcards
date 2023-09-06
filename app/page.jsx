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
