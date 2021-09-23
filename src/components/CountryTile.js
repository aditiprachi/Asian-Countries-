import React from 'react'
import Card from 'react-bootstrap/Card'
import "../App.css"


const CountryTile = ({country}) => {
    const borders = [];
    if(country.borders){
        Object.entries(country.borders).forEach(([key, value]) => {
            borders[key] = value
        })
    }
    const lang = [];
    Object.entries(country.languages).forEach(([key, value]) => {
        lang[key]=value.name
    })
    const name = country.name;
   
    return (
        <div className="country">
            <Card style={{ width: '20rem'}}>
                            <Card.Img className="image" variant="top" src={country.flags[1]} />
                            <Card.Body>
                                <h3>{country.name}</h3>
                                <h5>{country.capital}</h5>
                                <div>
                                    Region - {country.region}
                                </div>
                                <div>
                                    Population - {country.population}
                                </div>
                                {country.borders && <span>Border-  {borders.map((b,key)=> <span>{b} </span>)}</span>
                                }
                                <div>Languages- {lang.map((b,key)=> <span>{b} </span>)}</div>
                            </Card.Body>
            </Card>
        </div>
    )
}

export default CountryTile
