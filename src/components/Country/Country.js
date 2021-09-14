import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col ,Button } from 'react-bootstrap';
import CountryList from '../CountryList/CountryList';

const Country = () => {
    const [country, setCountry] = useState([]);
    useEffect(() => {
        axios('https://restcountries.eu/rest/v2/all')
            .then(data => setCountry(data.data))
    }, [])

    return (
        <Container>
            <Row className="mt-2">
                <Col md={10} >
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search for specific Country" />
                        <Button variant="info">Search</Button>
                    </div>
                </Col>
                <Col md={2} >
                    <Button variant="dark">Dark Mode</Button>
                </Col>
                {
                    country.map(country => <CountryList country={country} key={country.numericCode} > </CountryList>)
                }
            </Row>
        </Container>
    );
};

export default Country;