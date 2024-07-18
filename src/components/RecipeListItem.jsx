
import { Button, Card, CardContent } from "semantic-ui-react";
import { Link } from 'react-router-dom';



const RecipeListItem = ({ recipe }) => {
    
    return (
        <Card>
            <img src={recipe.image_url} alt="thumbnail" style={{ height:200 }} />
            <CardContent>
                <Card.Header content={recipe.title} />
                <Card.Description>
                    <h4>{recipe.publisher}</h4>
                </Card.Description>
            </CardContent>

            <CardContent>
                <Button 
                as={ Link }
                to={`/recipes/${recipe.recipe_id}`}
                content="Details"
                color="yellow"
                size="tiny"
                />

                <Button 
                href={ recipe.source_url }
                target="_blank"
                content="Read Recipe"
                color="orange"
                size="tiny"
                />
            </CardContent>

        </Card>
    )
}

export default RecipeListItem;