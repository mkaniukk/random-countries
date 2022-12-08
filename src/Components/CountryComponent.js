import { useEffect, useState } from 'react';
import numberWithSpaces from '../Utils';
import { Card, ListGroup } from "react-bootstrap";

function CountryComponent({ address }) {
    const [country, setCountry] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function getCountry() {
            const res = await fetch(`https://restcountries.com/v3.1/name/${address.country}`)
                .catch((err) => {
                    console.log(err);
                    setCountry({})
                });
            let data = {};
            if (res?.ok) {
                data = await res.json();
                data = await data.at(0);
                setCountry({ ...data });
                setLoading(false);
            }
        }
        getCountry();
    }, []);

    const displayData = (country) => {

        return (
            <>
                {loading ?
                    <Card className="city">
                        <Card.Header>Loading...</Card.Header>
                    </Card>
                    :
                    <Card className="city">
                        <Card.Header>{country?.name?.official}</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item>CAPITAL: {country?.capital?.at(0)}</ListGroup.Item>
                            <ListGroup.Item>POPULATION: {numberWithSpaces(country?.population)}</ListGroup.Item>
                            <ListGroup.Item>LANGUAGES: {Object.values(country?.languages).map((value, index) => { return <div key={index}>{value}</div> })}</ListGroup.Item>
                        </ListGroup>
                    </Card>
                }
            </>
        )
    }

    return (
        <div>
            {country
                ?
                displayData(country)
                :
                <Card className="city">
                    <Card.Header>{address.country}</Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item>No information found!</ListGroup.Item>
                    </ListGroup>
                </Card>}
        </div>
    )
}

export default CountryComponent;