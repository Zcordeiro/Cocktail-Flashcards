export default function Home() {
  return (
    <div className="hero min-h-screen bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-emerald-600 via-indigo-800 to-emerald-900">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6">
            This is a cocktail flashcard app built to help you learn the
            ingredients of your favorite cocktails. You can search for a drink,
            browse through top drinks, or get a random flashcard. Enjoy!
          </p>
          <a href="/random" className="btn btn-accent">Get Started with a random cocktal</a>
        </div>
      </div>
    </div>
  );
}
