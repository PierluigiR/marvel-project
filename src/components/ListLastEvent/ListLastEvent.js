import { Card, Header } from "semantic-ui-react";
import Container from "../Container/Container";
import "./ListLastEvent.scss";
import useFetch from "../Hooks/useFetch";
import LastEvents from "../LastEvents/LastEvents";

    //const lastEventFetch= useFetch(`${process.env.REACT_APP_URL_BASE}`)
    //console.log(process.env.REACT_APP_URL_BASE);
export default function ListLastEvent() {
    const lastEventsFetch = useFetch('http://gateway.marvel.com/v1/public/comics?ts=1&apikey=952b42a104ba53bca224cbe292cb0948&hash=13045efc8851c7dcf8beca0aeb852c33');
    console.log(lastEventsFetch);
    return (
        <div className="container-list-last-events">
            <Header size="large">Ultimos eventos</Header>
            <Container>
                <Card.Group itemsPerRow={5}>
                    <LastEvents lastEventsFetch={lastEventsFetch} />
                </Card.Group>
            </Container>
        </div>
    );
}
