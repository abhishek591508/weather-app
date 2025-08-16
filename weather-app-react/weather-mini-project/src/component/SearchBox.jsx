import "./SearchBox.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";
import InfoBoxCard from "./InfoBoxCard";



export default function SearchBox({UpdateInfo}){
    let [city, setCity]=useState("");

    const api_url = "https://api.openweathermap.org/data/2.5/weather"
    const api_key = "f5b9a068e00f2a6dda80673e41e047ff"

    let result;
    let getWeatherInfo=async()=>{
        let response = await fetch(`${api_url}?q=${city}&appid=${api_key}&units=metric`);
        let jsonResponse = await response.json();

        result = {
            city : jsonResponse.name,
            temp : jsonResponse.main.temp,
            t_min : jsonResponse.main.temp_min,
            t_max : jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feels : jsonResponse.main.feels_like,
        }
        console.log(result);
        return result;
    }
    

    let handleChange = (evt) => {
        setCity(evt.target.value);
    };
    
    let handleSubmit = async (evt) => {
        evt.preventDefault();
        console.log("You entered : ",city);
        setCity("");
        let newInfo = await getWeatherInfo();
        UpdateInfo(newInfo);
    } ;
 
    return(
        <div className="SearchB">

            <form onSubmit={handleSubmit} >
            <TextField 
                id="city" 
                label="Enter city" 
                variant="filled" 
                required value={city} 
                onChange={handleChange}/>

            <br /><br />
            <Button variant="contained" type="submit" style={{backgroundColor:'purple'}}>
                Search
            </Button>
            </form>


        </div>
    )
}
