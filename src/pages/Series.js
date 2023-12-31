import { Grid, Header } from "semantic-ui-react";
import Container from "../components/Container";
import ListSeries from "../components/ListSeries";
import useFetch from "../Hooks/useFetch";
export default function Series() {
    const listSeries = useFetch('http://gateway.marvel.com/v1/public/series?ts=1&apikey=952b42a104ba53bca224cbe292cb0948&hash=13045efc8851c7dcf8beca0aeb852c33&limit=20');
    console.log(listSeries);
    return(
        <div>
            <div className="series-page">
                <div id="slide-series-image" />
                <Grid>
                    <Grid.Column>
                        <Container bg="light">
                            <Header as="h2">Las últimas series de Marvel</Header>
                            <ListSeries listSeries={listSeries}/>
                        </Container>
                    </Grid.Column>
                </Grid>
            </div>
        </div>
    );
}