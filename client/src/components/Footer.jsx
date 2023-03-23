import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Twitter, Telephone, EnvelopeAt } from "react-bootstrap-icons";
import logo from "../images/logo3.png";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div>
      <div className={`mt-4 ${styles.div} ${styles.container}`}>
        <footer className="text-light py-4">
          <div className="container">
            <nav className="row">
              <ul className="col-12 col-md-3 list-unstyled">
                <Link to="/" className="col-12 col-md-3 d-flex aling-items-center justyfy-content-center">
                  <img src={logo} className="mx-2 pb-4" style={{ height: "70px" }}alt="" />
                </Link>
                <li><Telephone /> 123 456 789 </li>
                <li> <EnvelopeAt />medilab@gmail.com</li>
              </ul>
              <ul className=" text-light col-12 col-md-3 list-unstyled">
                <li className="pb-2"> <strong>Nosotros</strong></li>
                <li><Link to="/about" className="text-reset"> Sobre Medilab </Link></li>
                <li><Link to="/faq" className="text-reset"> Preguntas Frecuentes</Link></li>
                <li><Link to="/privacy-policies" className="text-reset"> Política de privacidad </Link></li>
              </ul>
              <ul className="text-light col-12 col-md-3 list-unstyled">
                <li className="pb-2"><strong>Nuestros Servicios</strong></li>
                <li><Link to="/search" className="text-reset"> Analisis Clinicos </Link>
                </li>
                <li>
                  <Link to="/covid" className="text-reset">
                    Pruebas Covid
                  </Link>
                </li>
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
