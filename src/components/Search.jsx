import { useState } from 'react';
import { Grid, Form, Input } from 'semantic-ui-react';


const Search = ({ setSearchedQuery }) => {
    const [value, setValue] = useState("");

    const onFormSubmit = () => {
        setSearchedQuery(value);
    }

    return (
        <Grid columns={2} textAlign="center" className='search-box'>
            <Grid.Column>
                <h2 className='search-heading'>Find Recipes using our <span style={{ color: 'orange' }}>Flavour Finder </span></h2>
                <h4 className='input-recipe'>Search Here</h4>
                <Form onSubmit={onFormSubmit}>
                    <Input className='input-field'
                        placeholder="Enter Here"
                        action={{ icon: 'search', color: 'yellow' }}
                        onChange={(e) => setValue(e.target.value)}
                        value={value}
                    />
                </Form>
            </Grid.Column>
        </Grid>
    )
}

export default Search;