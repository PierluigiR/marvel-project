import { Card, Icon, Image, Dimmer, Loader, Button } from "semantic-ui-react";
import "./LastEvents.scss";

export default function LastEvents({lastEventsFetch}) {
    const {loading, result} = lastEventsFetch;
    if (loading || !result) 
        return(
            <Dimmer active inverted>
                <Loader inverted>Loading...</Loader>
            </Dimmer>
        );
    const {results}= result.data;
    console.log(results);
    return(
            <div>DesdeLastEvents</div>
    );
}