
import { CardContent, FormControl, MenuItem, Card,  Select} from '@mui/material';
import './App.css';

import InfoBox from './infoBox';
import Map from './map.js'
import React, { useEffect, useState } from 'react';


function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');

  // use effect to get call to API

  useEffect ( () =>{
      const getCountriesData = async () =>{
        await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response)=> response.json())
        .then((data)=>{
          const countries = data.map((country)=>(
            {
              name: country.country,
              value: country.countryInfo.iso2,
            }));
            setCountries(countries);
        });
      }
      getCountriesData();
  },[]);

  const onCountryChange = (event) =>{
     const countryCode = event.target.value;
     setCountry(countryCode);
  }


  return (
    <div className="app">
      <div className="app__right"> 
      <div className ="app__header">
        <h1>Covid-19 Tracker</h1>
        <FormControl clasName="app__dropdown">
         <Select variant = "outlined"  onChange={onCountryChange} value = {country}>
          <MenuItem value='worldwide'>Worldwide</MenuItem>
           {countries.map(country =>(
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}
         </Select>
        </FormControl>
       </div>
      
      <div className ="app__stats">
        <InfoBox  title="coronavirus Cases" cases= {123} total={2000}/>
        
        <InfoBox title="Recoverd" cases= {123} total={4000}/>
        <InfoBox title= "Deaths"  cases= {123} total= {44055}/>
        

      </div>
      <Map />
      </div>
      <Card className="app__right">
        <CardContent>
         <h3> Live Cases By Country</h3>
         <h3>Worldwide New Cases</h3>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
