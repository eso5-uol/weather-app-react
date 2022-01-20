import React from "react";
import { Card } from "react-bootstrap";
import WeatherCardDetails from "./WeatherCardDetails";

const refresh = () =>{
    window.location.reload();
}

const WeatherCard= ({weather})=>(
    <div>
       <Card>
           <Card.Body>
               <WeatherCardDetails {...weather.currentDay}/>
               <button onClick={refresh}>refresh</button>
           </Card.Body>
       </Card>
    </div>

);

export default WeatherCard;