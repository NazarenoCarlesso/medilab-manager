import { React, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import QuoterContainer from './QuoterContainer'
import PopularUI from './PopularUI'
import ReviewsUI from './ReviewsUI'
import EnterpriseUI from './EnterpriseUI'
import Contact from './Contact'
import Comment from './Comment'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';




export default function Home() {
    const toke = useSelector((state) => state.token);
    const [mostrarBoton, setMostrarBoton] = useState(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        height: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    useEffect(() => {
        if (toke) {
            setMostrarBoton(true);
        } else {
            setMostrarBoton(false);
        }
    }, [toke]);

    return (
        <div>
            <QuoterContainer />
            <EnterpriseUI />
            <PopularUI />
            <ReviewsUI />
            <Contact />

            {mostrarBoton && (<Button style={{
                boxShadow: "5px 5px 9px 0px #00000063", fontFamily: "raleway", borderRadius: "0px 20px 20px 20px",
                position: "fixed", transform: "rotate(270deg)", backgroundColor: "rgb(26 68 108)", color: "white", bottom: "50%", width: "100px", height: "38px", right: "-26px", alignContent: "center",
            }} onClick={handleOpen}>Comentar</Button>)}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <button onClick={handleClose} style={{ fontFamily: "raleway", fontSize: "20px", color: "red", backgroundColor: "red#e5d6d6", borderColor: "red", position: "absolute", right: "20px", boxShadow: "50px #00000063", borderRadius: "10px", }} type="">X</button>
                    <Typography id="modal-modal-title" variant="h6" component="h2" style={{ fontFamily: "raleway" }} >
                        Comparte tu opinión: Déjanos saber lo que piensas
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {<Comment />}
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}
