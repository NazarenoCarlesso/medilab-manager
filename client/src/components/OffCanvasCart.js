import React from "react"
import Offcanvas from "react-bootstrap/Offcanvas"

export default function OffCanvasCart(props) {
    const { show, setShow } = props;
    const handleClose = () => setShow(false);

    return (
        <div>
            <Offcanvas show={show} placement={"end"} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Método de pago</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>Selecciona un método de pago:</Offcanvas.Body>
            </Offcanvas>
        </div>
    );
}
