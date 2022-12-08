import React from 'react';
import AddressesComponent from './AddressesComponent.js'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

function MainComponent() {
    const [number, setNumber] = React.useState(5)
    const [clicked, setClicked] = React.useState(false)

    const handleChange = (event) => {
        setNumber(event.target.value)
    }

    const handleClick = () => {
        if (number >= 5 && number <= 20)
            setClicked(!clicked);
        else {
            alert("Hey, its not in the range! Choose between 5 and 20")
        }
    }

    return (
        <div>
            <div id="selection">
                <Container >
                    <Col id="input-box">
                        <Form.Label>Range</Form.Label>
                        <Form.Range min="5" max="20" value={number} onChange={handleChange} />
                    </Col>
                    <Col id="text-field">
                        <label className="form-label">Number of cities</label>
                        <div>
                            <input className="form-control" id="number " type="number" name="number" min="5" max="20" value={number} onChange={handleChange} />
                        </div>
                    </Col>
                </Container>
                <div>
                    <Button variant="primary" type="submit" onClick={handleClick}>
                        {clicked ? 'I want new cities!' : 'Go!'}
                    </Button>
                </div>
            </div>
            <div>
                {clicked && <AddressesComponent id="country" number={number} />}
            </div>
        </div>
    )
}

export default MainComponent;