import { Card, Header } from "semantic-ui-react";
import Container from "../Container/Container";
import "./ListLastEvent.scss";
import useFetch from "../Hooks/useFetch";
export default function ListLastEvent() {
    //const lastEventFetch= useFetch(`${process.env.REACT_APP_URL_BASE}`)
    console.log(process.env.REACT_APP_URL_BASE);
    return (
        <div className="container-list-last-event">
            <Header size="large">Ultimos eventos</Header>
            <Container bg="light">
                <Card.Group itemsPerRow={5}>
                    <p>Los eventos...</p>
                    <p>Los eventos...</p>
                    <p>Los eventos...</p>
                    <p>Los eventos...</p>
                    <p>Los eventos...</p>
                </Card.Group>
            </Container>
        </div>
    );
}
