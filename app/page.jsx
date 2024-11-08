export default function Home() {
  return (
    <>
      <div className="backgroundImage min-h-screen min-w-full">
        <div className="bg-slate-950/40 min-h-screen flex items-center px-4">
          <div className=" text-center mx-auto">
            <div className=" max-w-md mt-8 md:mt-20 bg-gradient-to-r from-success via-success/80 to-base-content bg-clip-text text-transparent">
              <h1 className="text-5xl font-extrabold">WELCOME!</h1>

              <a href="/random" className="btn btn-info btn-lg text-info-content md:hidden">
                Click here to get started with a random cocktal
              </a>

              <p className="my-5 font-bold text-2xl">
                This simple cocktail app built to help you learn the ingredients
                of your favorite cocktails. You can search for a drink, browse
                through top drinks, or get a random flashcard. Enjoy!
              </p>

              <a
                href="/random"
                className="hidden md:btn md:btn-info md:btn-lg mt-3"
              >
                Click here to get started with a random cocktal
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
