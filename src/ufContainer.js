import React, { useState, useEffect, Fragment } from 'react';

const ufContainer = () => {
  const [val, setVal] = useState(0);
  const [ufPrice, setUfPrice] = useState(0);
  const [pesos, setPesos] = useState(0);

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

  return (
    <Fragment>
      <form>
        <h5 style={{ color: 'grey' }}>Valor uf de hoy: {val}</h5>
        <h2>Calculadora UF</h2>
        <label style={{ marginRight: '2rem' }}>UF - Pesos Chilenos</label>
        <input type="text" onChange={e => setUfPrice(e.target.value / val)} />
      </form>
      <h2>{ufPrice.toFixed(1)}UF</h2>
      <form>
        <label style={{ marginRight: '2rem' }}>Pesos Chilenos - UF</label>
        <input type="text" onChange={e => setPesos(e.target.value * val)} />
      </form>
      <h2>${pesos.toFixed().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</h2>
    </Fragment>
  );
};

export default ufContainer;
