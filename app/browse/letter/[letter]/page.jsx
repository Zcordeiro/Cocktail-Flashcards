import { connectToDatabase } from "@/utils/database";
import Cocktail from "@/models/Cocktails";
import DisplayCard from "@/components/DisplayCard";

const IndividualLetterList = async ({ params }) => {
  await connectToDatabase();
  const cocktails = await Cocktail.find({
    name: { $regex: `^${params.letter}`, $options: "i" },
  });

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-4">
        {cocktails &&
          cocktails.map((cocktail) => (
            <div
              key={cocktail._id}
              className="flex items-center justify-center lg:justify-start"
            >
              <DisplayCard cocktail={cocktail} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default IndividualLetterList;
