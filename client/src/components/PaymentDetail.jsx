import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import React, { useRef } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { format } from "date-fns";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "900px",
  maxHeight: "500px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function PaymentDetail(props) {
  const { showAlert, setShowAlert, detailData, dateToDetail, idToDetail } = props;

  const tableRef = useRef(null); // Ref para referenciar la tabla en el DOM

  const fecha = dateToDetail ? new Date(dateToDetail) : null;
  const formattedDate = fecha ? format(fecha, "dd/MM/yyyy HH:mm:ss") : null;
  const date = formattedDate?.slice(0, 10);
  const time = formattedDate?.slice(11, 16);

  const handleClose = () => {
    setShowAlert(false);
  };

  const handleDownload = () => {
    const doc = new jsPDF();
    doc.autoTable({ html: tableRef.current });
    doc.save("recibo.pdf");
  };

  return (
    <div>
      <Modal keepMounted open={showAlert} aria-labelledby="keep-mounted-modal-title" aria-describedby="keep-mounted-modal-description">
        <Box sx={style}>
          <div>
            <Typography id="keep-mounted-modal-title" variant="h4" component="h2" style={{ fontFamily: "Raleway", fontWeight: "700" }}>
              Recibo de Pago
            </Typography>
            <Typography id="keep-mounted-modal-description" variant="h5" style={{ fontFamily: "Raleway", fontWeight: "500" }}>
              Puede consultar su validez al teléfono 123 456 789
            </Typography>
            <TableContainer component={Paper} sx={{ maxHeight: "300px" }}>
              <Table sx={{ minWidth: 650 }} aria-label="a dense table" ref={tableRef}>
                <TableHead>
                  <TableRow>
                    <TableCell align="center" colSpan={2}>
                      <Typography id="keep-mounted-modal-description" variant="h6" style={{ fontFamily: "Raleway", fontWeight: "700" }}>
                        Id de Pago
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography id="keep-mounted-modal-description" variant="h6" style={{ fontFamily: "Raleway", fontWeight: "500" }}>
                        {idToDetail}
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="center" colSpan={2}>
                      <Typography id="keep-mounted-modal-description" variant="h6" style={{ fontFamily: "Raleway", fontWeight: "700" }}>
                        Fecha de Pago
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography id="keep-mounted-modal-description" variant="h6" style={{ fontFamily: "Raleway", fontWeight: "500" }}>
                        {date} {time}
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="center">
                      <Typography id="keep-mounted-modal-description" variant="h6" style={{ fontFamily: "Raleway", fontWeight: "700" }}>
                        Id
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography id="keep-mounted-modal-description" variant="h6" style={{ fontFamily: "Raleway", fontWeight: "700" }}>
                        Producto
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography id="keep-mounted-modal-description" variant="h6" style={{ fontFamily: "Raleway", fontWeight: "700" }}>
                        Precio
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {detailData.map((e, key) => (
                    <TableRow key={key} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                      <TableCell component="th" scope="row" align="center">
                        <Typography id="keep-mounted-modal-description" variant="h6" style={{ fontFamily: "Raleway", fontWeight: "700" }}>
                          {key + 1}
                        </Typography>
                      </TableCell>
                      <TableCell align="left">
                        <Typography id="keep-mounted-modal-description" variant="h6" style={{ fontFamily: "Raleway", fontWeight: "500" }}>
                          {e.name}
                        </Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Typography id="keep-mounted-modal-description" variant="h6" style={{ fontFamily: "Raleway", fontWeight: "500" }}>
                          ${e.price}.00
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                  <TableRow>
                    <TableCell align="left"></TableCell>
                    <TableCell align="left">
                      <Typography id="keep-mounted-modal-description" variant="h6" style={{ fontFamily: "Raleway", fontWeight: "700" }}>
                        TOTAL
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography id="keep-mounted-modal-description" variant="h6" style={{ fontFamily: "Raleway", fontWeight: "700" }}>
                        ${detailData?.map((e) => e.price || 0).reduce((a, b) => a + b, 0)}.00
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "20px" }}>
            <Button variant="contained" color="success" onClick={handleDownload}>
              Descargar Recibo
            </Button>
            <Button variant="contained" color="error" onClick={handleClose} style={{ marginLeft: "10px" }}>
              Close
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
