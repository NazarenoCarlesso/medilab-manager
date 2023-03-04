import Row from "react-bootstrap/esm/Row"
import { Link } from "react-router-dom"

export default function QuoterContainer() {
    return (
        <div style={{ width: '100vw', maxWidth: '100%', textAlign: 'center' }}>
            <Row md={2} className="g-4">
                <Link as={Link} to="/quoter" style={{ color: 'navy', textDecoration: 'none' }}>
                    <h2>Cotizar analisis</h2>
                </Link>
                <Link as={Link} to="/results" style={{ color: 'navy', textDecoration: 'none' }}>
                    <h2>Ver resultados</h2>
                </Link>
            </Row>
        </div >
    )
}
