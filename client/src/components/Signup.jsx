import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { setAvatar, setName, setRole, setToken } from "../reducer";
import { validateLogin, validateSignUp } from "../utils/validate";
import GoogleSignIn from "./GoogleSignIn";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import IconButton from "@mui/material/IconButton";
import { Container } from "@mui/material";
import logo from "../images/logo3.png";
import styles from "./Signup.module.css";
const BACK = process.env.REACT_APP_BACK;

export default function Signup(props) {
   const { setShowAlertLogin, fromCart } = props;
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const location = useLocation();
   // Variable user para el Login
   const [user, setUser] = useState({
      username: "",
      password: "",
      touched: {
         username: false,
         password: false,
      },
   });
   // Variable errors del user para el Login
   const [errorsUser, setErrorsUser] = useState({
      username: "",
      password: "",
   });
   // Variable user para el SignUp
   const [userSignUp, setUserSignUp] = useState({
      username: "",
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      dni: "",
      number: "",
      sex: "",
      height: "",
      civilState: "",
      confirmPassword: "",
      touched: {
         username: false,
         email: false,
         password: false,
         confirmPassword: false,
         firstName: false,
         lastName: false,
         dni: false,
         number: false,
         sex: false,
         height: false,
         civilState: false,
      },
   });
   // Variable errors del user para el SignUp
   const [errorsUserSignUp, setErrorsUserSignUp] = useState({
      username: "",
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      dni: "",
      number: "",
      sex: "",
      height: "",
      civilState: "",

      confirmPassword: "",
   });

   const [selectedSex, setSelectedSex] = useState("");
   const [selectedForm, setSelectedForm] = useState("login");

   // Ingresar los datos al objeto user y verificar errores
   const handleChange = (event) => {
      const { name, value } = event.target;
      setUser((prevState) => ({
         ...prevState,
         [name]: value,
         touched: { ...prevState.touched, [name]: true },
      }));
      setErrorsUser(
         validateLogin({
            ...user,
            [name]: value,
         })
      );
   };

   // Ingresar los datos al objeto userSignUp y verificar errores
   const handleChangeSignUp = (event) => {
      const { name, value, innerText } = event.target;
      if (innerText && name === "civilState") {
         setUserSignUp((prevState) => ({
            ...prevState,
            [name]: innerText.toLowerCase(),
            touched: { ...prevState.touched, [name]: true },
         }));
         setErrorsUserSignUp(
            validateSignUp({
               ...userSignUp,
               [name]: innerText.toLowerCase(),
            })
         );
      } else {
         if (name === "sex" && value !== selectedSex) {
            setSelectedSex(value);
         }
         setUserSignUp((prevState) => ({
            ...prevState,
            [name]: value,
            touched: { ...prevState.touched, [name]: true },
         }));
         setErrorsUserSignUp(
            validateSignUp({
               ...userSignUp,
               [name]: value,
            })
         );
      }
   };

   const handleSubmit = async (event) => {
      event.preventDefault();
      if (hasValues) {
         alert("Debe completar todos los espacios");
      } else if (hasErrors) {
         alert("Debe completar los datos correctamente");
      } else {
         try {
            const response = await axios.post(`${BACK}/users/login`, user);
            const userData = {
               name: response.data.name,
               token: response.headers.token,
               avatar: response.data.avatar,
               role: response.data.role,
            };
            dispatch(setToken(userData.token));
            dispatch(setName(userData.name));
            dispatch(setRole(userData.role));
            dispatch(setAvatar(userData.avatar));
            // devuelve al iniciar sesión al perfil del usuario con url modificada con parte de su usuario
            if (fromCart === true) {
               setShowAlertLogin(false);
               navigate("/cart");
            } else {
               navigate("/dashboard");
            }
         } catch (error) {
            let alertError = "";
            if (error.response.data?.errors) {
               alertError = "El Username no ha válidado su correo o no existe.";
            } else {
               alertError = error.response.data?.msg;
            }
            alert(alertError);
         }
      }
   };

   const handleSubmitSignUp = async (event) => {
      event.preventDefault();
      if (hasValuesSignUp) {
         alert("Debe completar todos los espacios");
      } else if (hasErrorsSignUp) {
         alert("Debe completar los datos correctamente");
      } else {
         try {
            await axios.post(`${BACK}/users/signup`, userSignUp);
            window.alert("Registro exitoso. Verifique su email");
            setSelectedForm("login");
         } catch (error) {
            const alertError = error.response.data.errors[0]?.msg;
            alert(alertError);
         }
      }
   };

   const hasErrors = Object.values(errorsUser).some((value) => value !== "");
   const hasErrorsSignUp = Object.values(errorsUserSignUp).some((value) => value !== "");
   const hasValues = Object.values(user).some((value) => value === "");
   const hasValuesSignUp = Object.values(userSignUp).some((value) => value === "");

   const showErrors = function (e) {
      const { innerText } = e.target;
      if (innerText === "Ingresar") {
         for (const key in user) {
            setUser((prevState) => ({
               ...prevState,
               touched: {
                  ...prevState.touched,
                  [key]: true,
               },
            }));
         }
         setErrorsUser(
            validateLogin({
               ...user,
            })
         );
      } else {
         for (const key in userSignUp) {
            setUserSignUp((prevState) => ({
               ...prevState,
               touched: {
                  ...prevState.touched,
                  [key]: true,
               },
            }));
         }
         setErrorsUserSignUp(
            validateSignUp({
               ...userSignUp,
            })
         );
      }
   };
   return (
      <Container maxWidth="lg" style={{ fontFamily: "Raleway", fontWeight: "700" }}>
         <Box style={location.pathname === "/signup" ? { display: "flex", justifyContent: "center", width: "100%" } : { display: "inline-block" }}>
            {/* Imagen */}
            {location.pathname === "/signup" ? (
               <Box className={styles.boxImage}>
                  <img src={logo} alt={logo} />
               </Box>
            ) : null}
            {/* Formulario */}
            <Box className={location.pathname === "/signup" ? styles.boxFormSignUp : styles.boxForm}>
               {/* h2 iniciar sesion o registrarse */}
               {location.pathname === "/signup" ? (
                  <div style={{ display: "flex", alignItems: "center" }}>
                     {selectedForm === "signup" ? (
                        <IconButton style={{ borderRadius: "50%", width: "60px", height: "60px" }}>
                           <ArrowLeftIcon onClick={() => setSelectedForm("login")} style={{ width: "60px", height: "60px" }}></ArrowLeftIcon>
                        </IconButton>
                     ) : null}

                     <Typography className={styles.typoH2Title} variant="h2" fontWeight={700} fontFamily={"Raleway"}>
                        {selectedForm === "login" ? `Iniciar Sesión` : `Registrarse`}
                     </Typography>
                     {selectedForm === "login" ? (
                        <IconButton style={{ borderRadius: "50%", width: "60px", height: "60px" }}>
                           <ArrowRightIcon onClick={() => setSelectedForm("signup")} style={{ width: "60px", height: "60px" }}></ArrowRightIcon>
                        </IconButton>
                     ) : null}
                  </div>
               ) : null}

               <Box sx={{ display: "flex" }}>
                  {/* Iniciar Sesión */}
                  <Collapse orientation="horizontal" in={selectedForm === "login"}>
                     <div
                        style={
                           location.pathname === "/signup"
                              ? {
                                   display: "inline-block",
                                   backgroundColor: "white",
                                   boxShadow: "0px 0px 10px gray",
                                   marginTop: "20px",
                                   width: "65%",
                                   paddingTop: "20px",
                                   paddingBottom: "20px",
                                }
                              : {
                                   display: "inline-block",
                                   backgroundColor: "white",
                                   marginTop: "10px",
                                }
                        }
                     >
                        {/* Iniciar Sesión con Google */}
                        {selectedForm === "login" ? (
                           <Row style={{ width: "100%", margin: "auto" }}>
                              <p style={{ textAlign: "center" }}>Inicie Sesión con Google</p>
                              <div
                                 style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    maxWidth: "100%",
                                 }}
                              >
                                 <GoogleSignIn setShowAlertLogin={setShowAlertLogin} fromCart={fromCart} />
                              </div>
                           </Row>
                        ) : null}
                        {/* Línea */}
                        <Row style={{ width: "100%", margin: "auto" }}>
                           <div
                              style={{
                                 display: "flex",
                                 alignItems: "center",
                                 justifyContent: "space-evenly",
                              }}
                           >
                              <div style={{ borderBottom: "1px solid grey", width: "40%" }}></div>
                              <p style={{ textAlign: "center", margin: "0 10px" }}>O</p>
                              <div style={{ borderBottom: "1px solid grey", width: "40%" }}></div>
                           </div>
                        </Row>

                        {/* Formulario Iniciar sesión */}
                        <div style={{ width: "100%", margin: "auto" }}>
                           <Form
                              onSubmit={(e) => {
                                 handleSubmit(e);
                              }}
                              style={{
                                 width: "90%",
                                 margin: "auto",
                              }}
                           >
                              <Form.Group className="mb-3">
                                 <Form.Label>Nombre de usuario</Form.Label>
                                 <Form.Control
                                    name="username"
                                    onChange={(e) => {
                                       handleChange(e);
                                    }}
                                    type="text"
                                    placeholder="Ingrese su nombre de usuario"
                                    style={{ fontFamily: "Raleway" }}
                                 />
                                 <p style={{ color: "red", fontSize: "12px" }}>{user.touched.username ? errorsUser.username : null}</p>
                              </Form.Group>
                              <Form.Group className="mb-3" style={{ position: "relative" }}>
                                 <Form.Label>Contraseña</Form.Label>
                                 <Form.Control
                                    name="password"
                                    onChange={(e) => {
                                       handleChange(e);
                                    }}
                                    type="password"
                                    placeholder="Ingrese su contraseña"
                                 />
                                 <div
                                    style={{
                                       position: "absolute",
                                       fontSize: "12px",
                                       bottom: "-20px",
                                       right: "0px",
                                    }}
                                 >
                                    <a href={"signup"}>¿Olvidaste tu contraseña?</a>
                                 </div>
                                 <p style={{ color: "red", fontSize: "12px" }}>{user.touched.password ? errorsUser.password : null}</p>
                              </Form.Group>

                              <Button
                                 variant="contained"
                                 color="info"
                                 type="submit"
                                 onClick={(e) => {
                                    showErrors(e);
                                 }}
                                 style={{ marginTop: "10px", width: "150px", fontFamily: "Raleway" }}
                              >
                                 Iniciar Sesión
                              </Button>
                              {/* Aún no tienes cuenta? */}
                              <div
                                 style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    marginTop: "10px",
                                    alignItems: "center",
                                 }}
                              >
                                 <div style={{ borderBottom: "1px solid grey", width: "90%", marginBottom: "10px" }}></div>

                                 <p>¿Aún no tienes cuenta?</p>
                                 <Button
                                    variant="contained"
                                    color="success"
                                    onClick={(e) => {
                                       setSelectedForm("signup");
                                    }}
                                    style={{ width: "150px", fontFamily: "Raleway" }}
                                 >
                                    Registrarse
                                 </Button>
                              </div>
                           </Form>
                        </div>
                     </div>
                  </Collapse>
                  {/* Registrarse */}
                  <Box style={selectedForm === "signup" ? null : { height: "0px" }}>
                     <Collapse orientation="horizontal" in={selectedForm === "signup"}>
                        <div
                           style={
                              location.pathname === "/signup"
                                 ? {
                                      display: "inline-block",
                                      backgroundColor: "white",
                                      boxShadow: "0px 0px 10px gray",
                                      marginTop: "20px",
                                      width: "65%",
                                      paddingTop: "20px",
                                      paddingBottom: "20px",
                                   }
                                 : {
                                      display: "inline-block",
                                      backgroundColor: "white",
                                      marginTop: "10px",
                                   }
                           }
                        >
                           {/* Registrarse con Google */}
                           {selectedForm === "signup" ? (
                              <Row style={{ width: "100%", margin: "auto" }}>
                                 <p style={{ textAlign: "center" }}>Regístrese con Google</p>
                                 <div
                                    style={{
                                       display: "flex",
                                       justifyContent: "center",
                                    }}
                                 >
                                    <GoogleSignIn setShowAlertLogin={setShowAlertLogin} fromCart={fromCart} />
                                 </div>
                              </Row>
                           ) : null}
                           {/* Botón volver a login en "/cart" */}
                           {location.pathname === "/cart" ? (
                              selectedForm === "signup" ? (
                                 <div style={{ position: "absolute", top: "10px", left: "10px" }}>
                                    <Button variant="contained" color="info" onClick={() => setSelectedForm("login")}>
                                       <ArrowLeftIcon /> Iniciar Sesión
                                    </Button>
                                 </div>
                              ) : null
                           ) : null}

                           {/* Línea */}
                           <Row style={{ width: "100%", margin: "auto" }}>
                              <div
                                 style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-evenly",
                                 }}
                              >
                                 <div style={{ borderBottom: "1px solid grey", width: "40%" }}></div>
                                 <p style={{ textAlign: "center", margin: "0 10px" }}>O</p>
                                 <div style={{ borderBottom: "1px solid grey", width: "40%" }}></div>
                              </div>
                           </Row>
                           {/* Formulario SignUp */}
                           <div style={{ width: "100%", margin: "auto" }}>
                              <Form
                                 onSubmit={(e) => {
                                    handleSubmitSignUp(e);
                                 }}
                                 style={{ width: "90%", margin: "auto" }}
                              >
                                 {/* Nombre */}
                                 <Row>
                                    <Col>
                                       <Form.Group className="mb-3">
                                          <Form.Label>Nombre(s)</Form.Label>
                                          <Form.Control
                                             name="firstName"
                                             onChange={(e) => {
                                                handleChangeSignUp(e);
                                             }}
                                             type="text"
                                             placeholder="Ingrese su(s) nombre(s)"
                                          />
                                          <p style={{ color: "red", fontSize: "12px" }}>
                                             {userSignUp.touched.firstName ? errorsUserSignUp.firstName : null}
                                          </p>
                                       </Form.Group>
                                    </Col>
                                 </Row>
                                 {/* Apellido */}
                                 <Row>
                                    <Col>
                                       <Form.Group className="mb-3">
                                          <Form.Label>Apellido(s)</Form.Label>
                                          <Form.Control
                                             name="lastName"
                                             onChange={(e) => {
                                                handleChangeSignUp(e);
                                             }}
                                             type="text"
                                             placeholder="Ingrese su(s) apellido(s)"
                                          />
                                          <p style={{ color: "red", fontSize: "12px" }}>
                                             {userSignUp.touched.lastName ? errorsUserSignUp.lastName : null}
                                          </p>
                                       </Form.Group>
                                    </Col>
                                 </Row>
                                 {/* Nombre de Usuario */}
                                 <Row>
                                    <Col>
                                       <Form.Group className="mb-3">
                                          <Form.Label>Nombre de usuario</Form.Label>
                                          <Form.Control
                                             name="username"
                                             onChange={(e) => {
                                                handleChangeSignUp(e);
                                             }}
                                             type="text"
                                             placeholder="Ingrese un nombre de usuario"
                                          />
                                          <p style={{ color: "red", fontSize: "12px" }}>
                                             {userSignUp.touched.username ? errorsUserSignUp.username : null}
                                          </p>
                                       </Form.Group>
                                    </Col>
                                 </Row>
                                 {/* DNI */}
                                 <Row>
                                    <Col>
                                       <Form.Group className="mb-3">
                                          <Form.Label>DNI</Form.Label>
                                          <Form.Control
                                             name="dni"
                                             onChange={(e) => {
                                                handleChangeSignUp(e);
                                             }}
                                             type="text"
                                             placeholder="Ingrese su DNI"
                                          />
                                          <p style={{ color: "red", fontSize: "12px" }}>{userSignUp.touched.dni ? errorsUserSignUp.dni : null}</p>
                                       </Form.Group>
                                    </Col>
                                 </Row>
                                 {/* Número de teléfono */}
                                 <Row>
                                    <Col>
                                       <Form.Group className="mb-3">
                                          <Form.Label>Número de teléfono</Form.Label>
                                          <Form.Control
                                             name="number"
                                             onChange={(e) => {
                                                handleChangeSignUp(e);
                                             }}
                                             type="text"
                                             placeholder="Ingrese su número de teléfono"
                                          />
                                          <p style={{ color: "red", fontSize: "12px" }}>
                                             {userSignUp.touched.number ? errorsUserSignUp.number : null}
                                          </p>
                                       </Form.Group>
                                    </Col>
                                 </Row>
                                 {/* Correo electrónico */}
                                 <Row>
                                    <Col>
                                       <Form.Group className="mb-3">
                                          <Form.Label>Correo Electrónico</Form.Label>
                                          <Form.Control
                                             name="email"
                                             onChange={(e) => {
                                                handleChangeSignUp(e);
                                             }}
                                             type="text"
                                             placeholder="Ingrese su correo electrónico"
                                          />
                                          <p style={{ color: "red", fontSize: "12px" }}>{userSignUp.touched.email ? errorsUserSignUp.email : null}</p>
                                       </Form.Group>
                                    </Col>
                                 </Row>
                                 {/* Género */}
                                 <Row>
                                    <Col>
                                       <Form.Group className="mb-3">
                                          <Form.Label>Género</Form.Label>
                                          <Row style={{ width: "90%", margin: "auto" }}>
                                             <Col>
                                                <Form.Check
                                                   name="sex"
                                                   value={"M"}
                                                   checked={selectedSex === "M"}
                                                   onChange={(e) => {
                                                      handleChangeSignUp(e);
                                                   }}
                                                   type="checkbox"
                                                   label="Hombre"
                                                />
                                             </Col>
                                             <Col>
                                                <Form.Check
                                                   name="sex"
                                                   value={"F"}
                                                   checked={selectedSex === "F"}
                                                   onChange={(e) => {
                                                      handleChangeSignUp(e);
                                                   }}
                                                   type="checkbox"
                                                   label="Mujer"
                                                />
                                             </Col>
                                          </Row>
                                          <p style={{ color: "red", fontSize: "12px" }}>{userSignUp.touched.sex ? errorsUserSignUp.sex : null}</p>
                                       </Form.Group>
                                    </Col>
                                 </Row>
                                 {/* Altura */}
                                 <Row>
                                    <Col>
                                       <Form.Group className="mb-3">
                                          <Form.Label>Altura (cm)</Form.Label>
                                          <Form.Control
                                             name="height"
                                             onChange={(e) => {
                                                handleChangeSignUp(e);
                                             }}
                                             type="text"
                                             placeholder="Ingrese su altura en cm"
                                          />
                                          <p style={{ color: "red", fontSize: "12px" }}>
                                             {userSignUp.touched.height ? errorsUserSignUp.height : null}
                                          </p>
                                       </Form.Group>
                                    </Col>
                                 </Row>
                                 {/* Estado civil */}
                                 <Row>
                                    <Col>
                                       <Form.Group className="mb-3">
                                          <Form.Label>Estado civil</Form.Label>
                                          <DropdownButton
                                             variant="outline-dark"
                                             title={
                                                userSignUp.civilState === ""
                                                   ? "Seleccione su estado civil"
                                                   : userSignUp.civilState.charAt(0).toUpperCase() + userSignUp.civilState.slice(1)
                                             }
                                             name="civilState"
                                             onClick={(e) => {
                                                //console.log("event", e.target.name);
                                                if (e.target.name !== "") {
                                                   handleChangeSignUp(e);
                                                }
                                             }}
                                          >
                                             <Dropdown.Item name="civilState" value="soltero">
                                                Soltero
                                             </Dropdown.Item>
                                             <Dropdown.Item name="civilState" value="casado">
                                                Casado
                                             </Dropdown.Item>
                                             <Dropdown.Item name="civilState" value="divorciado">
                                                Divorciado
                                             </Dropdown.Item>
                                             <Dropdown.Item name="civilState" value="viudo">
                                                Viudo
                                             </Dropdown.Item>
                                          </DropdownButton>
                                          <p style={{ color: "red", fontSize: "12px" }}>
                                             {userSignUp.touched.civilState ? errorsUserSignUp.civilState : null}
                                          </p>
                                       </Form.Group>
                                    </Col>
                                 </Row>
                                 {/* Contraseña */}
                                 <Row>
                                    <Col>
                                       <Form.Group className="mb-3">
                                          <Form.Label>Contraseña</Form.Label>
                                          <Form.Control
                                             name="password"
                                             onChange={(e) => {
                                                handleChangeSignUp(e);
                                             }}
                                             type="password"
                                             placeholder="Ingrese una contraseña"
                                          />
                                          <p style={{ color: "red", fontSize: "12px" }}>
                                             {userSignUp.touched.password ? errorsUserSignUp.password : null}
                                          </p>
                                       </Form.Group>
                                    </Col>
                                 </Row>
                                 {/* Confirmar contraseña */}
                                 <Row>
                                    <Col>
                                       <Form.Group className="mb-3">
                                          <Form.Label>Confirme su contraseña</Form.Label>
                                          <Form.Control
                                             name="confirmPassword"
                                             onChange={(e) => {
                                                handleChangeSignUp(e);
                                             }}
                                             type="password"
                                             placeholder="Confirme su contraseña"
                                          />
                                          <p style={{ color: "red", fontSize: "12px" }}>
                                             {userSignUp.touched.confirmPassword ? errorsUserSignUp.confirmPassword : null}
                                          </p>
                                       </Form.Group>
                                    </Col>
                                 </Row>
                                 <Button
                                    variant="contained"
                                    color="success"
                                    type="submit"
                                    onClick={(e) => {
                                       showErrors(e);
                                    }}
                                    style={{ width: "150px" }}
                                 >
                                    Registrarse
                                 </Button>
                              </Form>
                           </div>
                        </div>
                     </Collapse>
                  </Box>
               </Box>
            </Box>
         </Box>
      </Container>
   );
}
