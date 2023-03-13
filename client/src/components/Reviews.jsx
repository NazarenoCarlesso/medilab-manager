import React from "react";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";


  



export default function Reviews () {
const token = useSelector((state) => state.sessionId?.token);

console.log(token)

    return (
        <div>
   

<div   style={{ width: "500px", marginLeft: "100px", padding:"10px " }}> 
<img style={{ width: "100px", top: "100px", padding:"10px", position:"relative" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi3gjBvxBFwkGtNT10HL5B4c4V-2UGoBui4w&usqp=CAU" alt="img.jpg" />
    <p style={{borderRadius:"100px 100px 100px 100px", width: "500px", marginLeft: "100px", 
    padding:"10px", top:"10px", position:"relative", backgroundColor:"black",
    color:"white",}} >Usuario: </p>

    <p style={{ width: "500px", marginLeft: "100px", 
    padding:"10px", top:"10px", position:"relative", backgroundColor:"black",
    color:"white", 

}}>La página de laboratorios es informativa y tiene buena presentación,
 pero me hubiera gustado encontrar más información acerca de los precios de los servicios.
  Aunque hay una sección de 'cotización', me pareció un poco difícil de encontrar. En general, 
  es una buena página pero podría ser más clara en cuanto a los costos.".</p>
</div>

<div   style={{ width: "500px", marginLeft: "100px", padding:"10px " }}> 
<img style={{ width: "100px", top: "100px", padding:"10px", position:"relative" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi3gjBvxBFwkGtNT10HL5B4c4V-2UGoBui4w&usqp=CAU" alt="img.jpg" />
    <p style={{borderRadius:"10px 0px 0px 100px", width: "500px", marginLeft: "100px", 
    padding:"10px", top:"10px", position:"relative", backgroundColor:"black",
    color:"white",}} >Usuario: </p>

    <p style={{borderRadius:"20px 0px 0px 0px"  , width: "500px", marginLeft: "100px", 
    padding:"10px", top:"10px", position:"relative", backgroundColor:"black",
    color:"white", 

}}>Bueno: "¡Excelente página de laboratorios! Me impresionó la variedad de servicios que ofrecen, 
y cómo se describen de forma detallada. También aprecio que se hayan incluido testimonios de clientes
 satisfechos. La navegación es intuitiva y el diseño es muy atractivo. ¡Muy recomendado!"</p>
</div>
<div   style={{ width: "500px", marginLeft: "100px", padding:"10px " }}> 
<img style={{ width: "100px", top: "100px", padding:"10px", position:"relative" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi3gjBvxBFwkGtNT10HL5B4c4V-2UGoBui4w&usqp=CAU" alt="img.jpg" />
    <p style={{ borderRadius:"100px 0px 0px 100px", width: "500px", marginLeft: "100px", 
    padding:"10px", top:"10px", position:"relative", backgroundColor:"black",
    color:"white",}} >Usuario: </p>

    <p style={{ width: "500px", marginLeft: "100px", 
    padding:"10px", top:"10px", position:"relative", backgroundColor:"black",
    color:"white", 

}}>Bueno: "La página de laboratorios es muy clara y fácil de usar. Me gusta cómo se presenta toda
 la información de forma organizada y cómo se pueden encontrar fácilmente los servicios disponibles.
  Además, es muy útil que se puedan hacer reservas en línea. ¡Gran trabajo!"</p>
</div>

    </div>
    
    )

}