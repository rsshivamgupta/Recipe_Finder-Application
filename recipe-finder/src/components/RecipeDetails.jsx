
import { useEffect, useState } from "react";
import { getRecipe } from "../services/api";
import { useParams, Link } from "react-router-dom";
import { Grid, GridColumn, Button, Image, Header, Segment } from "semantic-ui-react";

const RecipeDetails = () => {
  const [recipe, setRecipe] = useState({});
  const { recipeId } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await getRecipe(recipeId);
        if (result && result.recipe) {
          setRecipe(result.recipe);
        }
      } catch (error) {
        console.error("Error fetching recipe:", error);
      }
    };
    getData();
  }, [recipeId]);

  return Object.keys(recipe).length > 0 ? (
    <Grid container stackable columns={2} className="detailsPageContent">
      <GridColumn>
        <Button
          as={Link}
          to={"/recipes"}
          content="Back To Recipe List"
          color="yellow"
          style={{ marginBottom: 40 }}
        />
        <Image src={recipe.image_url} />
      </GridColumn>

      <Grid.Column>
        <Header size="medium">{recipe.title}</Header>
        <p>Provided by: {recipe.publisher}</p>
        <Button
          as="a"
          href={recipe.publisher_url}
          target="_blank"
          content="Publisher Webpage"
          color="blue"
        />
        <Button
          as="a"
          href={recipe.source_url}
          target="_blank"
          content="Recipe URL"
          color="green"
        />
        <Header size="large" content="Ingredients" />
        <Segment.Group>
          {recipe?.ingredients?.map((data, index) => (  // Use optional chaining
            <Segment key={index}>
              <h5>{data}</h5>
            </Segment>
          ))}
        </Segment.Group>
      </Grid.Column>
    </Grid>
  ) : null;
};

export default RecipeDetails;
