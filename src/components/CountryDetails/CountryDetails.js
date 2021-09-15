import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { useParams } from 'react-router';

const CountryDetails = () => {
    const { country } = useParams();
    const [countryDetails, setCountryDetails] = useState([])
    useEffect(() => {
        axios(`https://restcountries.eu/rest/v2/name/${country}`)
            .then(data => setCountryDetails(data.data));
        console.log(countryDetails)
    }, [])
    return (
        <Container style={{ color: 'white' }}>
            <div className="text-center">
                <h1>This is country details of {country}</h1>
            </div>
            {
                countryDetails.map(country =>
                    <Row className="mt-5">
                        <Col md={7}>
                            <img className="img-fluid rounded" src={country.flag} alt="" />
                        </Col>
                        <Col md={5}>
                            <h2>Name: {country.name}</h2>
                            <h4>Capital : {country.capital}</h4>
                            <p>Region : {country.region}</p>
                            <p>Sub-Region : {country.subregion}</p>
                            <p>Populations : {country.population}</p>
                            <p>Currency : {`${country.currencies[0].symbol} ${country.currencies[0].code}`}</p>
                        </Col>
                    </Row>)
            }
        </Container>
    );
};

export default CountryDetails;