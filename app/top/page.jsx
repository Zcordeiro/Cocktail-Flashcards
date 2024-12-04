import { connectToDatabase } from "@/utils/database";
import Cocktail from "@/models/Cocktails";
import Flipcard from "@/components/Flipcard";

const TopPage = async () => {
  await connectToDatabase();
  const cocktails = await Cocktail.find({});

  return (
    <div className="bg-base-300 bg-center opacity-90 w-full p-4 md:px-24 md:py-10 text-neutral-50 min-h-fit">
      <h1 className="text-6xl font-bold py-6 text-center">
        Top Cocktails 
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 mx-5">
        {cocktails &&
          cocktails.map((cocktail) => (
            <div
              key={cocktail._id}
              className="flex flex-col items-center justify-center"
            >
              <h2 className="text-4xl font-bold py-3 text-center">
                {cocktail.strDrink}
              </h2>
              <Flipcard cocktail={cocktail} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default TopPage;
