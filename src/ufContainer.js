import React, { useState, useEffect, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";
import Spinner from "./spinner.gif";
import img from "./calculator.svg"


const ufContainer = () => {
  const [val, setVal] = useState(0);
  const [ufPrice, setUfPrice] = useState(0);
  const [pesos, setPesos] = useState(0);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    fetch("https://mindicador.cl/api/uf")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Request failed");
      })
      .then((responseJson) => {
        let ufToday = responseJson.serie[0].valor;
        return setVal(ufToday);
      });

    setTimeout(() => {
      setLoad(false);
    }, 3000);
  }, []);

  if (load === true && val !== 0) {
    return (
      <Container className="mt-5">
        <img src={Spinner} />
      </Container>
    );
  }

  return (
    <Fragment>
      <Container className="mt-5">
        <h5 style={{color:'#6C63FF'}}>Valor uf de hoy: ${val}</h5>
        <h2 className="mt-5 text-center font-weight-bold h1" style={{color:'#6C63FF'}} >
          Calculadora UF
        </h2>
        <Row>
          <Col className="mt-5 text-center">
            <form className="col">
              <label className="mb-3 mt-3 font-weight-bold h4" style={{color:'#6C63FF'}}>
                Pesos Chilenos
              </label>
              <input
                type="text"
                className="input"
                onChange={(e) => setUfPrice(e.target.value / val)}
              />
            </form>
            {!isNaN(ufPrice) ? (
              <h2 className="text-center" style={{color:'#6C63FF'}}>
                {ufPrice.toFixed(1)}UF
              </h2>
            ) : (
              <h2 className="h3">Ingrese un numero valido</h2>
            )}
          </Col>

          <Col className="mt-5 text-center">
            <form className="col">
              <label className="mb-3 mt-3 font-weight-bold h4" style={{color:'#6C63FF'}}>
                UF
              </label>
              <input
                type="text"
                className="input"
                onChange={(e) => setPesos(e.target.value * val)}
              />
            </form>
            {!isNaN(pesos) ? (
              <h2 className="text-center" style={{color:'#6C63FF'}}>
                ${pesos.toFixed().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
              </h2>
            ) : (
              <h2 className="h3" style={{color:'#6C63FF'}}>Ingrese un numero valido</h2>
            )}
          </Col>
        </Row>
          <img style={{marginTop:'50rem'}} src={img} width="800" height="360" className="container mt-5 mx-auto d-block" /> 
      </Container>
    </Fragment>
  );
};

export default ufContainer;
