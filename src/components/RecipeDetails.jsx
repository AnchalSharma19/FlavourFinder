import { useEffect } from "react";
import { getRecipe } from "../services/api";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Grid, Button, Image, GridColumn, Header, Segment, stackable } from "semantic-ui-react";
import { Link } from 'react-router-dom';
import Recipes from "../pages/Recipes";



const RecipeDetails = () => {
    const [recipe, setRecipe] = useState({});

    const { recipeId } = useParams();

    useEffect(() => {
        const getData = async () => {
            let result = await getRecipe(recipeId)
            if (result && result.recipe) {
                setRecipe(result.recipe);
            }
        }
        getData();
    }, [])

    return (
        Object.keys(recipe).length > 0 ?
            <Grid conatiner stackable columns={2} className="detailsPageContent">
                <GridColumn>
                    <Button
                        as={Link}
                        to={'/recipes'}
                        content="Back to Recipe List"
                        color="brown"
                        style={{ marginBottom: 40 }}
                    />
                    < Image src={recipe.image_url} />
                </GridColumn>
                <GridColumn>
                    <Header size='medium'>{recipe.title}</Header>
                    <p>Provided By {recipe.publisher}</p>
                    <Button
                        as={"a"}
                        href={recipe.publisher_url}
                        target="_blank"
                        content="Publisher Webpage"
                        color="yellow"
                        style={{ marginBottom: 40 }}
                    />
                    <Button
                        as={"a"}
                        href={recipe.source_url}
                        target="_blank"
                        content="Recipe URL"
                        color="orange"
                        style={{ marginBottom: 40 }}
                    />
                    <Header size="large" content="Ingredients" />
                    <Segment.Group>
                        {
                            recipe && recipe.ingredients.map(data => (
                                <Segment>
                                    <h5>{data}</h5>
                                </Segment>
                            ))
                        }
                    </Segment.Group>
                </GridColumn>

            </Grid> : null

    )
}

export default RecipeDetails;