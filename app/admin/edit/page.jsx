

import AdminLinks from "@/components/AdminLinks";
import { connectToDatabase } from "@/utils/database";
import Cocktail from "@/models/Cocktails";


const EditPage = () => {
  const fetchCocktails = async () => {
    await connectToDatabase();
    const cocktails = await Cocktail.find({});
    console.log(cocktails);
  }

  fetchCocktails();

  const handleSelect = (cocktail) => {
    console.log("Selected cocktail", cocktail);
  }
 

  return (
    <div className="text-center min-h-screen p-12">
      <h1 className="text-5xl">Edit cocktails currently in the Database</h1>


      <AdminLinks />
    </div>
  );
};

export default EditPage;
