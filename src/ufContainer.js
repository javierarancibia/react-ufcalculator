import React, { useState, useEffect } from 'react';

const ufContainer = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    fetch('https://mindicador.cl/api/uf')
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Request failed');
      })
      .then(responseJson => {
        let ufToday = responseJson.serie[0].valor;
        return setValue(ufToday);
      });
  }, [value]);

  return <h1>{value}</h1>;
};

export default ufContainer;
