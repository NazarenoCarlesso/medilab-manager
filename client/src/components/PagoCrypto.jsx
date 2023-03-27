import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Web3 from 'web3';
import { useNavigate } from "react-router-dom";


const { REACT_APP_BACK } = process.env;

export default function PagoCryptoCharge(props) {
  const [preferenceId, setPreferenceId] = useState(null);
  const cart = useSelector((state) => state.cart);
  const { setShowAlert } = props;
  const token = useSelector(state => state.token)
  const navigate = useNavigate();


  // useEffect(() => {
  //   axios
  //     .post(`${REACT_APP_BACK}/payments/crypto`, cart)
  //     .then(data => {
  //   if (data.url) {
  //     window.location.href = data.url;
  //   }
  // });
  // },[]);

    //funciones crypto
    if (typeof window.ethereum !== 'undefined') {
      console.log('Metamask is installed!');  
    }
      // const ethereumProvider = window.ethereum;
      // const web3 = new Web3(ethereumProvider);
  

  // const PagoCryptoCharge = async() => {

  //   await axios
  //     .post(`${REACT_APP_BACK}/payments/crypto`, cart, {
  //       headers: {
  //         'token': token,
  //         'Content-Type': 'multipart/form-data',
  //       }
  //     })
  //     .then(data => {
  //       console.log(data);
  //   if (data.url) {
  //     window.location.href = data.url;
  //   }});
  // };

  const sendTransaction = async (to, value) => {
    try {
      //const accounts = await web3.eth.getAccounts();

      const web3 = new Web3(window.ethereum);

      // Solicitar acceso a la billetera MetaMask
      await window.ethereum.enable();

      // Obtener la dirección de la cuenta actual

      const accounts = await window.ethereum.request({ method: 'eth_accounts' });
      //console.log("accounts --- >>>", accounts);
      if (accounts.length === 0) {
        console.error("No accounts found");
        return;
      }
      const tx = {
        from: accounts[0],
        to: to,
        value: web3.utils.toWei(value.toString(), "ether"),
      };
      const transa = await web3.eth.sendTransaction(tx);
      console.log("transa --- >>>", transa);
      if (transa) navigate("/successful-payment");
    } catch (error) {
      console.error(error);
    }
  };
  
  

  return (
    <>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Pago Crypto</Accordion.Header>
        <Accordion.Body>
          <Button onClick={() => sendTransaction('0xB319ffa9A16054AD509E0186f64844e163a712ff', 0.0001)}> 
            CONTINUAR COMPRA CON CRYPTO</Button>
        </Accordion.Body>
      </Accordion.Item>
    </>
  );
}
