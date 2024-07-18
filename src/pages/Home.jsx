import { Button } from "semantic-ui-react";
import Header from "../components/common/Header";
import { Link } from 'react-router-dom';



const Home = () => {

    return (
        <Header title="Flavour Finder" bgClass="bg-image">
            <Button
                content="Search Recipes"
                color="yellow"
                as={Link}
                to="/recipes"
                size="big"
            />
        </Header>
    )
}

export default Home;