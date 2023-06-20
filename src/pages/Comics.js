import { useState } from "react";
import { Grid, Header } from "semantic-ui-react";
import Container from "../components/Container";
import ListComics from "../components/ListComics";
import useFetch from "../Hooks/useFetch";

export default function Comics() {
    const [renderComics, setRenderComics]= useState(10);
    
    const listComics= useFetch('http://gateway.marvel.com/v1/public/comics?ts=1&apikey=952b42a104ba53bca224cbe292cb0948&hash=13045efc8851c7dcf8beca0aeb852c33&limit=${renderComics}');
    console.log(ListComics);
    return(
        <div className="comics-page">
            <div id="slide-comics-image">
            <Grid>
                <Grid.Column>
                    <Container bg="light">
                        <Header as="h2">Los mejores Comics</Header>
                        <ListComics 
                            listComics={listComics}
                            renderComics={renderComics}
                            setRenderComics={setRenderComics}
                        />
                    </Container>
                </Grid.Column>
            </Grid>
            </div>
        </div>
    );
}