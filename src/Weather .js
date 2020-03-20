import React from "react"
import ReactWeather from 'react-open-weather';
require("dotenv").config()


export default class Weather  extends React.Component {



    
    render() {
        return (
            <div>
                <ReactWeather
                 forecast="today"
                 apikey="API_KEY"
                 type="city"
                 city="Dallas"
                ></ReactWeather>
            </div>
        )
    }
}
