import React, { useEffect, useState } from 'react';
import api from '../../configuration/api';

const Sellers = () => {
  useEffect(getAllSeller, []);
  const [sellers, setSellers] = useState([]);


  function getAllSeller() {
    api
      .get('sellers/')
      .then(function (response) {
setSellers(response.data);      })
      .catch(function (error) {
        console.log(error);
      });
  }

 

  return (<div>
    {
    sellers.map(person => (
    <p>{person.username} </p>
))}

</div>)}

    



export default Sellers;
