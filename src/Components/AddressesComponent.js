import { useEffect, useState } from 'react';
import AddressComponent from './AddressComponent'
import CountryComponent from './CountryComponent';
import waitingKid from '../Media/waiting-kid.jpg'
import { Container, Col, Row } from 'react-bootstrap';

function AddressesComponent({ number }) {
    const [addresses, setAddresses] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function getAddresses() {
            const addresses = [];
            for (let i = 0; i < number; i++) {
                const address = await fetch(`https://random-data-api.com/api/v2/addresses`).then((res) => res.json());
                addresses.push(address)
            }
            setAddresses(addresses);
            setLoading(false);
        }
        getAddresses();
    }, []);

    return (
        <Container>
            {loading ?
                <div>
                    <img src={waitingKid} alt='' />
                </div>
                :
                <>
                    <Row>
                        Countries
                    </Row>
                    <Row>
                        {addresses.map((address, index) => (
                            <Col key={index}>
                                <CountryComponent address={address} />
                            </Col>
                        ))}
                    </Row>
                    <Row>
                        Addresses
                    </Row>
                    <Row>
                        {addresses.map((address, index) => (
                            <Col key={index}>
                                <AddressComponent address={address} />
                            </Col>
                        ))}
                    </Row>
                </>
            }
        </Container>
    )
}

export default AddressesComponent;