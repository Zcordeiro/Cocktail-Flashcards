import { connectToDatabase } from "@/utils/database";
import Cocktail from "@/models/Cocktails";

const browsePage = async () => {
  await connectToDatabase();
  const cocktails = await Cocktail.find({});
  let liquorChoices = [];
  let letterChoices = [];

  const displayLiquorChoices = () => {
    for (let i = 0; i < cocktails.length; i++) {
      if (!liquorChoices.includes(cocktails[i].mainLiquor)) {
        liquorChoices.push(cocktails[i].mainLiquor);
      }
    }
  };

  const displayletterChoices = () => {
    for (let i = 0; i < cocktails.length; i++) {
      if (!letterChoices.includes(cocktails[i].name[0])) {
        letterChoices.push(cocktails[i].name[0]);
      }
    }
    letterChoices.sort();
  };

  displayletterChoices();
  displayLiquorChoices();

  return (
    <div className="p-4 md:px-24 md:py-10 text-neutral-50 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-4">
        {liquorChoices &&
          liquorChoices.map((choice) => (
            <div
              key={choice}
              className="flex items-center justify-center lg:justify-start"
            >
              <a
                className="btn btn-lg btn-success m-2"
                href={`/browse/liquors/${choice}`}
              >
                {choice} Drinks
              </a>
            </div>
          ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 m-4">
        {letterChoices &&
          letterChoices.map((choice) => (
            <div
              key={choice}
              className="flex items-center justify-center lg:justify-start"
            >
              <a
                className="btn btn-lg btn-accent m-2"
                href={`/browse/letter/${choice}`}
              >
                {choice} 
              </a>
            </div>
          ))}
      </div>
    </div>
  );
};

export default browsePage;
