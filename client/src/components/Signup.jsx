import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Badge from "react-bootstrap/Badge";
import InputGroup from "react-bootstrap/InputGroup";
import { setSessionId, addUser } from "../reducer";
import { validateLogin, validateSignUp } from "../utils/validate";

const BACK = process.env.REACT_APP_BACK;

export default function Signup() {
  const dispatch = useDispatch();
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
    const { name, value, checked, innerText } = event.target;
    if (!checked && name === "sex") {
      setUserSignUp((prevState) => ({
        ...prevState,
        [name]: "",
        touched: { ...prevState.touched, [name]: true },
      }));
      setErrorsUserSignUp(
        validateSignUp({
          ...userSignUp,
          [name]: "",
        })
      );
    } else if (innerText && name === "civilState") {
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
      /*const login = await fetch(`${BACK}/patients/login`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then((response) => response.json());
*/
      const response = await axios.post(`${BACK}/patients/login`, user);
      console.log(response.data);
      dispatch(setSessionId(response.data));
    }
  };

  const handleSubmitSignUp = async (event) => {
    event.preventDefault();
    if (hasValuesSignUp) {
      alert("Debe completar todos los espacios");
    } else if (hasErrorsSignUp) {
      alert("Debe completar los datos correctamente");
    } else {
      dispatch(addUser(userSignUp));
      window.alert("Registro exitoso.");
    }
  };

  const hasErrors = Object.values(errorsUser).some((value) => value !== "");
  const hasErrorsSignUp = Object.values(errorsUserSignUp).some(
    (value) => value !== ""
  );
  const hasValues = Object.values(user).some((value) => value === "");
  const hasValuesSignUp = Object.values(userSignUp).some(
    (value) => value === ""
  );

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col">
          <h3>Registrarse</h3>
          <Form
            onSubmit={(e) => {
              handleSubmitSignUp(e);
            }}
          >
            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                name="firstName"
                onChange={(e) => {
                  handleChangeSignUp(e);
                }}
                type="text"
                placeholder="Ingrese su nombre"
              />
              <p style={{ color: "red", fontSize: "12px" }}>
                {userSignUp.touched.firstName
                  ? errorsUserSignUp.firstName
                  : null}
              </p>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Apellidos</Form.Label>
              <Form.Control
                name="lastName"
                onChange={(e) => {
                  handleChangeSignUp(e);
                }}
                type="text"
                placeholder="Ingrese sus apellidos"
              />
              <p style={{ color: "red", fontSize: "12px" }}>
                {userSignUp.touched.lastName ? errorsUserSignUp.lastName : null}
              </p>
            </Form.Group>
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
              <p style={{ color: "red", fontSize: "12px" }}>
                {userSignUp.touched.dni ? errorsUserSignUp.dni : null}
              </p>
            </Form.Group>
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
            <Form.Group className="mb-3">
              <Form.Label>Género</Form.Label>
              <Row>
                <Col>
                  <Form.Check
                    name="sex"
                    value={"M"}
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
                    onChange={(e) => {
                      handleChangeSignUp(e);
                    }}
                    type="checkbox"
                    label="Mujer"
                  />
                </Col>
              </Row>
              <p style={{ color: "red", fontSize: "12px" }}>
                {userSignUp.touched.sex ? errorsUserSignUp.sex : null}
              </p>
            </Form.Group>
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
            <Form.Group className="mb-3">
              <Form.Label>Estado civil</Form.Label>

              <DropdownButton
                variant="outline-secondary"
                title={
                  userSignUp.civilState === ""
                    ? "Seleccione su estado civil"
                    : userSignUp.civilState.charAt(0).toUpperCase() +
                      userSignUp.civilState.slice(1)
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
                {userSignUp.touched.civilState
                  ? errorsUserSignUp.civilState
                  : null}
              </p>
            </Form.Group>
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
              <p style={{ color: "red", fontSize: "12px" }}>
                {userSignUp.touched.email ? errorsUserSignUp.email : null}
              </p>
            </Form.Group>
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
                {userSignUp.touched.confirmPassword
                  ? errorsUserSignUp.confirmPassword
                  : null}
              </p>
            </Form.Group>
            <Button variant="primary" type="submit">
              Registrarse
            </Button>
          </Form>
        </div>
        <div className="col">
          <h3>Ingresar</h3>
          <Form
            onSubmit={(e) => {
              handleSubmit(e);
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
              />
              <p style={{ color: "red", fontSize: "12px" }}>
                {user.touched.username ? errorsUser.username : null}
              </p>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                name="password"
                onChange={(e) => {
                  handleChange(e);
                }}
                type="password"
                placeholder="Ingrese su contraseña"
              />
              <p style={{ color: "red", fontSize: "12px" }}>
                {user.touched.password ? errorsUser.password : null}
              </p>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check type="checkbox" label="Mantener la sesión iniciada" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Ingresar
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
