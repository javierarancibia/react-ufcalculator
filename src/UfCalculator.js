import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const UfCalculator = (props) => {
  return (
    <div>
      <h5 className="text-info">Valor uf de hoy: ${props.val}</h5>
      <h2 className="mt-5 text-center font-weight-bold text-primary h1">
        Calculadora UF
      </h2>
      <Row>
        <Col className="mt-5 text-center">
          <form className="col">
            <label className="mb-3 mt-3 font-weight-bold h4 text-primary">
              Pesos Chilenos
            </label>
            <input
              type="text"
              className="input"
              onChange={(e) => setUfPrice(e.target.value / props.val)}
            />
          </form>
          {!isNaN(ufPrice) ? (
            <h2 className="text-center text-primary">{ufPrice.toFixed(1)}UF</h2>
          ) : (
            <h2 className="h3 text-primary">Ingrese un numero valido</h2>
          )}
        </Col>

        <Col className="mt-5 text-center">
          <form className="col">
            <label className="mb-3 mt-3 font-weight-bold h4 text-primary">
              UF
            </label>
            <input
              type="text"
              className="input"
              onChange={(e) => setPesos(e.target.value * val)}
            />
          </form>
          {!isNaN(pesos) ? (
            <h2 className="text-center text-primary">
              ${pesos.toFixed().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
            </h2>
          ) : (
            <h2 className="h3 text-primary">Ingrese un numero valido</h2>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default UfCalculator;
