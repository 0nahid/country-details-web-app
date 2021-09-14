import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';

const CountryList = (props) => {
    const country = props.country;
    const { name, flag, capital, region } = country;
    // console.log(name);
    return (
        <>
            <Col md={4} lg={3} className="p-3" >
                <div className="bg-dark text-white rounded shadow-sm p-2">
                    <div><img style={{ height: '180px', width: '100%' }} src={flag} alt="" /></div>
                    <h6><small>{name}</small></h6>
                    <p>Capital: {capital}</p>
                    <p>Region: {region}</p>
                    <Button variant="info">Show  Details</Button>
                </div>
            </Col>
        </>
    );
};

export default CountryList;