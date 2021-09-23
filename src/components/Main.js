import React , {useState,useEffect} from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import "../App.css"
import CountryTile from './CountryTile'

const Main = () => {
    const [result, setResult] = useState([]);
    const borders = []
    const lang = []
    const url = `https://restcountries.com/v2/continent/asia`;
    useEffect(() => {
        getData();
    }, [url]);
    const getData = async ()=> {
         await axios.get(url)
        .then(
            (res)=> {
                setResult(res.data);
            }
        )
        
       
        
    }
    result.map((country, key) => {
        return (
            borders[key]= country.borders,
            lang[key] = country.languages
        )
    })
    const refresh = () => {
        getData();
        window.location.reload(); 
    }
    // console.log(borders)
    // console.log(lang)
    return (
        <div className="main">
            <h1>Asian Countries</h1>
            <Button variant="secondary" onClick={refresh}>Refresh</Button>{' '}
            <div className="main_countries">
            {result.map((country, key) => {
                    return (
                        <CountryTile country={country} />
                    )
                })}
            </div>
        </div>
    )
}

export default Main
