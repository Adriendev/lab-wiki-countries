import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const CountryDetails = ({ countriesData }) => {
//   const [countryInfo, setcountryInfo] = useState(null);

  const params = useParams();
  const findCountry = countriesData.find(
    (country) => country.alpha3Code === params.id
  );
  const {
    name: { official },
    capital,
    area,
    borders,
  } = findCountry;
  console.log(params);
  

  const listBorder = borders.map(border => (
    <li><Link to={`/${border}`} key={border}>{countriesData.find(
    (country) => country.alpha3Code === border).name.official}</Link></li>
  ))

  return (
    <div className="col-7">
      <h1>{official}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{capital}</td>
          </tr>
          <tr>
            <td>area</td>
            <td>
              {area}
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>borders</td>
            <td>
              <ul>
              {listBorder}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetails;
