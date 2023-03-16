import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import PaymentDetail from "./PaymentDetail";

const BACK = process.env.REACT_APP_BACK;

export default function Payments() {
  const [payments, setPayments] = useState([]);
  const [detailData, setDetailData] = useState([]);
  const [dateToDetail, setDateToDetail] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const token = useSelector((state) => state.token);
  const role = useSelector((state) => state.role);
  const [tests, setTests] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchPayments() {
      try {
        const config = {
          headers: { token: `${token}` }, // se envía el token por header
        };
        const response = await axios.get(
          `${BACK}/payments/${role === "ADMIN" ? "admin" : ""}`,
          config
        )
        console.log(response.data)
        setPayments(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchPayments();
  }, [token]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BACK}/tests`);
        setTests(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  function getTestNamesById(orders) {
    const testNames = [];
    orders?.forEach((e) => {
      const test = tests.find((test) => {
        return test.id === e.TestId;
      });
      if (test) {
        testNames.push(test.name);
      }
    });
    return testNames;
  }

  function handleDetailData(e) {
    const { id } = e.target;
    const dataPayments = payments.find((p) => p.id === id);
    const dataTests = [];
    dataPayments?.Orders.forEach((e) => {
      const test = tests.find((test) => {
        return test.id === e.TestId;
      });
      if (test) {
        dataTests.push(test);
      }
    });

    setDetailData(dataTests);
    setDateToDetail(dataPayments.createdAt);
    setShowAlert(true);
  }

  return (
    <div
      style={{
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "90%",
      }}
    >
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Id de Pago</TableCell>
              <TableCell align="center">Contenido</TableCell>
              <TableCell align="center">Fecha de Pago</TableCell>
              <TableCell align="center">Detalles</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoading ? (
              <TableRow >
              <TableCell align="center" colSpan={4}>Cargando pagos...</TableCell>
            </TableRow>
            ) : payments.length === 0 ? (
              <TableRow >
                <TableCell align="center" colSpan={4}>No ha realizado ningún pago.</TableCell>
              </TableRow>
            ) : (
              payments.map((e, key) => {
                return (
                  <TableRow
                    key={key}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row" align="center">
                      {key + 1}
                    </TableCell>
                    <TableCell align="left">{getTestNamesById(e.Orders).join(", ")}</TableCell>
                    <TableCell align="center">{e.createdAt.slice(0, 10)}</TableCell>
                    <TableCell align="center">
                      <Button id={e.id} size="small" onClick={(e) => handleDetailData(e)}>
                        Detalles
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <PaymentDetail
        showAlert={showAlert}
        setShowAlert={setShowAlert}
        detailData={detailData}
        dateToDetail={dateToDetail}
      />
    </div>
  );
}
