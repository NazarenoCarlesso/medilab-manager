import { Link } from "react-router-dom";
import test from "../images/test.png";
import result from "../images/results.png";
import qstyles from "./QuoterContainer.module.css";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function QuoterContainer() {
  const navigate = useNavigate();
  const token = useSelector((state) => state.token);

  function handleClick() {
    if (token) {
      navigate("/dashboard");
    } else {
      navigate("/signup");
    }
  }

  return (
    <div className={`${qstyles.quoter} ${qstyles.container}`}>
      <div className="row p-5">
        <div className="col-sm-12 col-md-12 col-lg-4 text-center p-4">
          <h2 className="p-4">Bienvenido</h2>
          <h5>¿Qué te gustaría hacer hoy?</h5>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 p-4">
          <Link variant={Link} to={`/search`} className={qstyles.quoterButton}>
            <img src={test} className="mx-2 p-2" style={{ height: "90px" }}alt="Cotizar Análisis" /> Cotizar análisis
          </Link>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 p-4">
          <div className={qstyles.quoterButton} as="Link" style={{ height: "160px" }} onClick={handleClick}>
            <img src={result}className="mx-2 p-2" style={{ height: "90px" }} alt="Ver Resultados" /> Ver resultados
          </div>
        </div>
      </div>
    </div>
  );
}
