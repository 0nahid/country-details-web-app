import React from 'react';
import { Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CountryList = (props) => {
    const country = props.country;
    const { name, flag, region } = country;
    return (
        <>
            <Col md={4} lg={3} className="p-3" >
                <div className="bg-dark text-white rounded shadow-sm p-2">
                    <div><img style={{ height: '180px', width: '100%' }} src={flag} alt="" /></div>
                    <h6><small>{name}</small></h6>
                    <p>Region: {region}</p>
                    <Link to={`/country/${name}`}><Button className="w-100" variant="light">Show Details </Button></Link>
                </div>
            </Col>
        </>
    );
};

export default CountryList;