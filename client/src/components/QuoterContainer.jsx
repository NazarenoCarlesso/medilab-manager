
import { Link } from "react-router-dom";

export default function QuoterContainer() {


  return (
    <div>
      <Link as={Link} to="/quoter">Cotizar analisis</Link>
      <Link as={Link} to="/results">Ver resultados</Link>  
    </div>
  );
}
