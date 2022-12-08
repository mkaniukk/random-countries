import { Card, ListGroup } from "react-bootstrap";

function AddressesComponent({ address }) {
    return (
        <Card id={address.id} className="city">
            <Card.Header>{address.city}</Card.Header>
            <ListGroup variant="flush">
                {Object.keys(address).map((key, index) => {
                    return <ListGroup.Item key={index}>{key}: {address[key]} </ListGroup.Item>
                })}
            </ListGroup>
        </Card>
    )
}

export default AddressesComponent;