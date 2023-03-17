import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import React, { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "1000px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function SelectAppointment(props) {
  const { openSA, handleCloseSA, handleShow } = props;
  const [appointment, setAppointment] = useState({ day: "", hour: "" });
  const hours = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"];

  const handleChange = (event) => {
    if (event.target?.name) {
      setAppointment((prevAppointment) => ({ ...prevAppointment, [event.target.name]: event.target.value }));
    } else {
      setAppointment((prevAppointment) => ({
        ...prevAppointment,
        day: `${event.$D.toString()}/${(event.$M + 1).toString().padStart(2, "0")}/${event.$y}`,
      }));
    }
  };

  const handleSubmit = () => {
    handleCloseSA();
    handleShow();
    setAppointment({ day: "", hour: "" });
  };

  return (
    <div>
      <Modal open={openSA} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2" fontWeight={700} sx={{ fontFamily: "Raleway" }}>
            Seleccione su turno
          </Typography>
          <Typography id="modal-modal-description" fontWeight={700} sx={{ fontFamily: "Raleway" }}>
            Seleccione por favor el día y la hora disponibles para tomar sus exámenes.
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <div style={{ width: "300px" }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar onChange={handleChange} minDate={dayjs().add(1, "day")} views={["day"]} />
              </LocalizationProvider>
            </div>

            <div
              style={{
                width: "400px",
                height: "300px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <div style={{ width: "300px" }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Hora</InputLabel>
                  <Select labelId="demo-simple-select-label" id="demo-simple-select" value={appointment.hour} label="Hour" name="hour" onChange={handleChange}>
                    {hours.map((e, key) => (
                      <MenuItem key={key} value={e}>
                        {e}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              <Typography variant="h6" fontWeight={700} sx={{ fontFamily: "Raleway" }}>
                {appointment.day !== "" && appointment.hour !== "" ? (
                  <div>
                    <Typography variant="h6" fontWeight={700} sx={{ fontFamily: "Raleway" }}>
                      La fecha en la que tomará sus exámenes será el día {appointment.day} a las {appointment.hour}.
                    </Typography>
                    <Typography fontWeight={700} sx={{ fontFamily: "Raleway", fontSize: "13px", marginTop: "10px" }}>
                      * Recuerde por favor llevar su comprobante de pago y DNI.
                    </Typography>
                  </div>
                ) : null}
              </Typography>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "end" }}>
            <Button
              variant="contained"
              color="error"
              onClick={() => {
                handleCloseSA();
                setAppointment({
                  day: "",
                  hour: "",
                });
              }}
            >
              CERRAR
            </Button>
            {appointment.day === "" || appointment.hour === "" ? (
              <Button variant="contained" color="success" disabled style={{ marginLeft: "10px" }}>
                PROCESAR COMPRA
              </Button>
            ) : (
              <Button
                variant="contained"
                color="success"
                onClick={() => {
                  handleSubmit();
                  setAppointment({
                    day: "",
                    hour: "",
                  });
                }}
                style={{ marginLeft: "10px" }}
              >
                PROCESAR COMPRA
              </Button>
            )}
          </div>
        </Box>
      </Modal>
    </div>
  );
}
