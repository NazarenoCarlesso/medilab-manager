import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import ReceiptIcon from "@mui/icons-material/Receipt";
import { Grid, Typography } from "@mui/material";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import PaymentDetail from "./PaymentDetail";
import PaidIcon from "@mui/icons-material/Paid";
import AddIcon from "@mui/icons-material/Add";

const BACK = process.env.REACT_APP_BACK;

export default function Payments() {
  const [payments, setPayments] = useState([]);
  const [detailData, setDetailData] = useState([]);
  const [dateToDetail, setDateToDetail] = useState("");
  const [idToDetail, setIdToDetail] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const token = useSelector((state) => state.token);
  const role = useSelector((state) => state.role);
  const [tests, setTests] = useState([]);

  useEffect(() => {
    async function fetchPayments() {
      try {
        const config = {
          headers: { token: `${token}` }, // se envía el token por header
        };
        const response = await axios.get(`${BACK}/payments/${role === "ADMIN" ? "admin" : ""}`, config);
        setPayments(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchPayments();
  }, [token, role]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BACK}/tests`);
        setTests(response.data);
      } catch (error) {
        console.log(error);
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
    const { id } = e.currentTarget;
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
    // setIdToDetail(e.currentTarget.dataset.key);
    setIdToDetail(id);
    setShowAlert(true);
  }

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        overflow: "hidden",
        overflowY: "scroll",
      }}
    >
      <Grid container direction="column">
        {/* Botón (+) para admin */}
        <Paper
          sx={{
            width: "100%",
            marginBottom: 0.25,
            marginTop: 0.1,
            boxShadow: "0px 0px 10px 0px #00000047",
          }}
        >
          <Grid container direction="row" justifyContent="center" alignItems="center">
            {role === "ADMIN" ? (
              <Button>
                <AddIcon />
              </Button>
            ) : null}
          </Grid>
        </Paper>
        {/* Pagos */}
        <Grid container direction="column" alignItems="center" sx={{ height: 480 }}>
          {payments.slice(0, 36).map((e, key) => (
            <Paper key={key} sx={{ width: 320, margin: "2px", paddingLeft: "10px", boxShadow: "0px 0px 10px 0px #00000047" }}>
              <Grid container direction="row" justifyContent="center" alignItems="center">
                <Typography title={e.id} sx={{ width: "80px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", fontFamily: "Raleway", fontWeight: "500" }}>
                  {e.id}
                </Typography>
                <Typography title={e.id} sx={{ width: "140px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", fontFamily: "Raleway", fontWeight: "500" }}>
                  {getTestNamesById(e.Orders).join(", ")}
                </Typography>

                <PaidIcon color="success"></PaidIcon>

                <Button id={e.id} data-key={key + 1} onClick={handleDetailData}>
                  <ReceiptIcon />
                </Button>
              </Grid>
            </Paper>
          ))}
        </Grid>
      </Grid>
      <PaymentDetail showAlert={showAlert} setShowAlert={setShowAlert} detailData={detailData} dateToDetail={dateToDetail} idToDetail={idToDetail} />
    </div>
  );
}
