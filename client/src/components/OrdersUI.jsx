import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {
    Button, Grid, Paper, Typography
} from '@mui/material'
import PaidIcon from '@mui/icons-material/Paid'

const BACK = process.env.REACT_APP_BACK

function Order({ id, test, paymnet }) {
    return (
        <Paper sx={{ width: 480, margin: '2px' }}>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Typography title={test} sx={{ width: 190, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {test}
                </Typography>
                <Button>
                    <PaidIcon />
                </Button>
            </Grid>
        </Paper>
    )
}

export default function OrdersUI() {
    // get token from store
    const token = useSelector(state => state.token)
    const role = useSelector(state => state.role)
    // array of orders
    const [orders, setOrders] = useState([])
    // reload list effect
    useEffect(() => {
        fetch(`${BACK}/orders/${role === 'ADMIN' ? 'admin' : ''}`, { headers: { 'token': token } })
            .then(response => response.json())
            .then(data => setOrders(data))
    }, [token, role])
    // render component
    return (
        <Grid container direction="column" justifyContent="space-evenly" alignItems="center">
            <Grid container direction="column" sx={{ height: 480 }}>
                {orders
                    .slice(0, 24)
                    .map(o => <Order key={o.id} id={o.id} test={o.test} payment={o.payment} />)}
            </Grid>
        </Grid>
    )
}