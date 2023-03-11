import React, { useEffect } from "react";
import styles from "./Profile.module.css";
import axios from "axios";
import { useSelector } from "react-redux";
import img from "../../images/logo.png"
const BACK = process.env.REACT_APP_BACK;


export default function Profile() {
  const token = useSelector((state) => state.sessionId?.token);

  const getMe = async () => {
    try {
      const config = {
        headers: { token:`${token}`},
      };
      const response = await axios.get(`${BACK}/users/me`,config);
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  };
  
  useEffect(() => {
    getMe()
  },[])

  return (
    <div className={styles.UserCard}>
      <div className={styles.Container}>
        <div className={styles.Banner}>
          MEDILAB - AFILIADO
        </div>
        <div className={styles.Information}>
          <div className={styles.Avatar}><div className={styles.AvatarPhoto}><img src={img} alt="ProfilePicture"></img></div></div>
          <div className={styles.UserInfo}>
            <p>Nombre</p>
            <p>Edad</p>
            <p>DNI</p>
            <p>Numero</p>
          </div>
        </div>
      </div>
    </div>
  );
}
