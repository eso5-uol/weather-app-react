import React from 'react';
import PropTypes from 'prop-types';


import { Container, Row, Col, Card } from 'react-bootstrap';

import './Forecast.css'

const Forecast = ({ weather }) => (
    <Card>
        <Card.Body>
            <Card.Title>
                
                


            </Card.Title>
        </Card.Body>
    </Card>
);

Forecast.propTypes = {
    forecast: PropTypes.shape({
        currentDay: PropTypes.object,
        currentDayDetails: PropTypes.array,
    }),
};

export default Forecast;