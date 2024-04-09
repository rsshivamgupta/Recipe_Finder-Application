import { useState } from "react";
import { Grid, Form, Input } from "semantic-ui-react";

const Search = (setsearchedQuery) => {
    const [value , setValue]=useState("");
    const onFormSubmit = () =>{
           setsearchedQuery(value)
    }
    return (
        <Grid columns={2} textAlign="center" className="search-box">
            <Grid.Column>
                <h2 className="search-heading">Search Recipes With <span style={{ color: "#2185D0" }}>Our Recipes</span> </h2>
                <h4>Input Recipes Separated by Comma</h4>
                <Form onSubmit={onFormSubmit}>
                    <Form.Field>
                        <Input
                            placeholder="Pizza , Onion , Potato"
                            action={{ icon: "search", color: "blue" }}
                            onChange={(e)=>setValue(e.target.value)}
                            value={value}
                        />
                    </Form.Field>
                </Form>
            </Grid.Column>
        </Grid>
    );
}

export default Search;



























