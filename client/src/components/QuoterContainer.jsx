import { Link } from "react-router-dom";
import qstyles from "./QuoterContainer.module.css";

export default function QuoterContainer() {

  return (
    <div className={`${qstyles.quoter} ${qstyles.container}`} style={{fontFamily: 'Raleway'}}>
      <div style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems:"center"}}>
        <div style={{width: '30%'}}>
          <img style={{width: '90%'}}src='/img/MedIcon.png' alt='logo'></img>
        </div>
        <div style={{width: '70%', display:"flex", flexDirection:"column", textAlign:"center", justifyContent:"center", alignItems:"center", color:"#012970"}}>
          <h1 style={{marginTop:"20px", fontWeight:"900"}}>PRUEBAS DE LABORATORIO CONVENIENTES EN SU HORARIO</h1>
          <h3 style={{marginTop:"20px",fontWeight:"500"}}>Solicite pruebas asequibles con facilidad y obtenga resultados rápidos. Órdenes de laboratorio médico en línea incluidas. Órdenes de laboratorio médico en línea incluidas.</h3>
          <Link style={{textTransform:"uppercase"}} variant={Link} to={`/search`} className={qstyles.quoterButton}>Cotizar análisis</Link>
        </div>
      </div> 
    </div>
  );
}
