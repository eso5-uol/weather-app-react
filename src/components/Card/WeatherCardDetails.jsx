import React from "react";

const WeatherCardDetails = ({weekday, date, location, temperature }) => (
    <div>
        <p>{location}</p>
        <p>{weekday}</p>
        <p>{date}</p>
        <p>{temperature} &deg;C</p>
    </div>

);
export default WeatherCardDetails;