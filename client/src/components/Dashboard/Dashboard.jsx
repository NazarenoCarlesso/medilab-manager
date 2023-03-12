import React from "react";
import styles from "./Dashboard.module.css";
import {Link, Outlet} from "react-router-dom"

export default function User() {

  const admin=null //Variable de testeo null || "ADMIN"

  if(admin==="ADMIN"){
    return (
      <div className={styles.BodyContainer}>
        <div className={styles.Panel} title="Zona de Sidebar y display" >
          <div className={styles.Sidebar} title="Sidebar">
            <ul className={styles.ListOfLinks}>
              <Link className={styles.Links} to="/dashboard/admin/chart"><li className={styles.Box}>ESTADISTICAS</li></Link>
              <Link className={styles.Links} to="/dashboard/admin/allorders"><li className={styles.Box}>ORDENES</li></Link>
              <Link className={styles.Links} to="/dashboard/admin/allexams"><li className={styles.Box}>EXAMENES</li></Link>
              <Link className={styles.Links} to="/dashboard/admin/allusers"><li className={styles.Box}>USUARIOS</li></Link>
              <Link className={styles.Links} to="/dashboard/admin/allappointments"><li className={styles.Box}>TODOS LOS TURNOS</li></Link>
            </ul>
          </div>
          <div className={styles.Display} title="Display"> <Outlet/> </div>
        </div>
      </div>
    );
  }
  else{
    return (
      <div className={styles.BodyContainer}>
          <div className={styles.Panel} title="Zona de Sidebar y display" >
            <div className={styles.Sidebar} title="Sidebar">
              <ul className={styles.ListOfLinks}>
                <Link className={styles.Links} to="/dashboard/user/profile"><li className={styles.Box}>Mi Perfil</li></Link>
                <Link className={styles.Links} to="/dashboard/user/orders"><li className={styles.Box}>Ordernes y Pagos</li></Link>
                <Link className={styles.Links} to="/dashboard/user/result&payment"><li className={styles.Box}>Examenes y Resultados</li></Link>
                <Link className={styles.Links} to="/dashboard/user/appointment"><li className={styles.Box}>Obtener turno</li></Link>
                <Link className={styles.Links} to="/dashboard/user/reviews"><li className={styles.Box}>Reviews</li></Link>
              </ul>
            </div>
            <div className={styles.Display} title="Display"> <Outlet/> </div>
          </div>
        </div>
    );
  }
}
