import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import CountryList from './CountryList/CountryList';

const Country = () => {
    const [country, setCountry] = useState([]);
    useEffect(() => {
        axios('https://restcountries.eu/rest/v2/all')
            .then(data => setCountry(data.data))
    }, [])

    return (
        <Container>
            <Row>
                {
                    country.map(country => <CountryList country={country} key={country.numericCode} > </CountryList>)
                }
            </Row>
        </Container>
    );
};

export default Country;