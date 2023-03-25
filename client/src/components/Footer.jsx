import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Facebook, Instagram, Youtube, Twitter, Telephone, EnvelopeAt } from "react-bootstrap-icons";
import logo from "../images/logo3.png";
import styles from "./Footer.module.css";


export default function Footer() {
  const location = useLocation().pathname
  console.log(location)

  return (
    <div className={styles.Footer} >
      <div className={`mt-4 ${styles.div} ${styles.container}`}>
        <footer className="text-light py-3">
          <div className="container">
            <nav className="row">
              <div className="col-12 col-md-3 d-flex justify-content-start align-items-center">
                <Link className={styles.FooterLogo} to="/"><img src={logo} className="" style={{ width: "150px" }}alt="MediLabLogo" /></Link>
              </div>
              <ul className=" text-light col-12 col-md-3 list-unstyled">
                <li className="pb-2"> <strong>Más información</strong></li>
                <li style={{left:-10}}><Telephone style={{marginRight: "5px"}}/> <EnvelopeAt style={{marginRight: "5px"}}/><Link to={location === "/" ? "#Contacto" : "/Contact"} className={styles.linkto}>Medios de contacto</Link></li>
              </ul>
              <ul className="text-light col-12 col-md-3 list-unstyled">
                <li className="pb-2"><strong>Nuestros Servicios</strong></li>
                <li><Link to="/search" className={styles.linkto}> Analisis Clinicos </Link></li>
                <li><Link to="/privacy-policies" className={styles.linkto}> Política de privacidad </Link></li>
              </ul>
              <ul className=" text-light col-12 col-md-3 list-unstyled">
                <li className="pb-2">
                  <strong>Siguenos</strong>
                </li>
                <li>
                  <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><Facebook size={22} color="#ffffff"></Facebook></a>&nbsp;
                  <a href="https://www.youtube.com/" target="_blank" rel="noreferrer"><Instagram size={22} color="#ffffff"></Instagram></a>&nbsp;
                  <a href="https://www.youtube.com/" target="_blank" rel="noreferrer"><Youtube size={22} color="#ffffff"></Youtube></a>&nbsp;
                  <a href="https://twitter.com/" target="_blank" rel="noreferrer"><Twitter size={22} color="#ffffff"></Twitter></a>
                </li>               
              </ul>
            </nav>
          </div>
        </footer>
      </div>
    </div>
  );
}
