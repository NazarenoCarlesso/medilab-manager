import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Grid, Modal, Paper, styled } from '@mui/material'
import { Draggable } from 'react-beautiful-dnd'

// reducer
import { addToCart, removeFromCart } from '../reducer'

// styles
import './UIStyles.css'

const BACK = process.env.REACT_APP_BACK

export function DetailUI({ id, addToCart, removeFromCart }) {
    // get cart from store
    const cart = useSelector(state => state.cart)
    // test state
    const [test, setTest] = useState({})
    // get test detail
    useEffect(() => {
        fetch(`${BACK}/tests/${id}`)
            .then(response => response.json())
            .then(data => setTest(data))
    }, [id])
    
    // render component
    return (
        <div className='TestUI' style={{ padding: '0px 20px 20px 0px', height: "inherit", width: '100%', color:'black', backgroundColor:'white', borderRadius:"10px" }}>
            <div className="content">
                <Grid container direction="row" justifyContent="space-evenly" alignItems="center" >
                    <div className="title">{test.name}</div>
                    <div className="price">${test.price}.00</div>
                </Grid>
                <div className="description" style={{fontFamily: 'Raleway'}}>
                    <p>{test.description}</p></div>
            </div>
            {cart.includes(id)
                ? <ButtonUI color='secondary' onClick={() => removeFromCart(id)} sx={{ minWidth: 200}}>
                    Quitar del carrito
                </ButtonUI>
                : <Button onClick={() => addToCart(id)} sx={{ minWidth: 200, border:'1px solid #5080FD'  }}>
                    Agregar al carrito
                </Button>}
        </div>
    )
}

const ButtonUI = styled(Button)(({ theme }) => ({
    color:"white",
    background: 'linear-gradient(293deg, rgb(185, 185, 255) 0%, rgb(72, 225, 255) 100%);',
    '&:hover': { backgroundColor: '#d70000' }
}))

export default function TestUI({ id, name, sample, category, price, index }) {
    // dispatch hook
    const dispatch = useDispatch()
    // get cart from store
    const cart = useSelector(state => state.cart)
    // modal state and hooks
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    return (
    
        <Draggable key={id} draggableId={id.toString()} index={index}>
        {(provided)=>(
        <div className="TestUI" {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
            <div  className="content">
                <div className="name" style={{fontFamily: 'Raleway', overflowWrap:"anywhere", padding: "0px 4px" }}>{name}</div>
                <div className="tag">${price}.00</div>
                <div className="sample"><strong>Categoria:  </strong> {category}</div>
                <div className="sample"><strong>Tipo de muestra:  </strong> {sample}</div>
            </div>
            <Grid container direction="row" justifyContent="space-evenly" alignItems="center">
                <Button  variant="outlined" onClick={handleOpen}>
                    Detalles
                </Button>
                <Modal open={open} onClose={handleClose}>
                    <Paper sx={{
                        position: 'absolute', top: '50%', left: '50%',
                        transform: 'translate(-50%, -50%)', width: '60%',
                        bgcolor: 'transparent'
                    }}>
                        {open
                            ? <DetailUI id={id}
                                addToCart={(id) => dispatch(addToCart(id))}
                                removeFromCart={(id) => dispatch(removeFromCart(id))} />
                            : null}
                    </Paper>
                </Modal>
                {cart.includes(id)
                    ? <ButtonUI onClick={() => dispatch(removeFromCart(id))}>
                        Quitar
                    </ButtonUI>
                    : <Button variant="outlined" onClick={() => dispatch(addToCart(id))}>
                        Agregar
                    </Button>}
            </Grid>
            </div>
            )}
            </Draggable>
    )
}
