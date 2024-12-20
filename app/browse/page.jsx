import { connectToDatabase } from "@/utils/database";
import Cocktail from "@/models/Cocktails";

const browsePage = async () => {
  await connectToDatabase();
  const cocktails = await Cocktail.find({});
  let choices = [];

  const displayChoices = () => {
    for (let i = 0; i < cocktails.length; i++) {
      if (!choices.includes(cocktails[i].mainLiquor)) {
        choices.push(cocktails[i].mainLiquor);
      }
    }
  };

  displayChoices();

  return (
    <div className="p-4 md:px-24 md:py-10 text-neutral-50 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-4">
        {choices &&
          choices.map((choice) => (
            <div
              key={choice}
              className="flex items-center justify-center lg:justify-start"
            >
              <a className="btn btn-lg btn-success m-2" href={`/browse/liquors/${choice}`}>{choice} Drinks</a>
            </div>
          ))}
      </div>
    </div>
  );
};

export default browsePage;
