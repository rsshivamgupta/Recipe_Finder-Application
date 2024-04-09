import { useEffect, useState } from "react";
import Search from "../components/Search";
import RecipeList from "../components/RecipeList";
import { getRecipes } from "../services/api";

const Recipes = () => {
  const [searchedQuery, setsearchedQuery] = useState("pizza");
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getSearchedResult();
  }, [searchedQuery]);

  const getSearchedResult = async () => {
    let result = await getRecipes(searchedQuery);    //setsearchedquery  tha phle
    if (result && result.recipes) {
      setRecipes(result.recipes);
    }
  };
  return (
    <>
      <Search setsearchedQuery={setsearchedQuery} />
      <RecipeList recipes={recipes} searchedQuery={searchedQuery} />
    </>
  );
};

export default Recipes;




