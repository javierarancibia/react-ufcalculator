import React, { useState, useEffect, Fragment } from 'react';

const ufContainer = () => {
  const [val, setVal] = useState(0);
  const [number, setNumber] = useState(0);

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
        return setVal(ufToday);
      });
  }, []);

  const handleSubmit = e => {};

  return (
    <Fragment>
      <form onChange={handleSubmit}>
        <label style={{ marginRight: '2rem' }}>Calculadora UF</label>
        <input type="text" onChange={e => setNumber(e.target.value * val)} />
      </form>
      <h2>${number}</h2>
    </Fragment>
  );
};

export default ufContainer;
