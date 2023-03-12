import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {
    Button, Grid, Paper, Typography
} from '@mui/material'
import PaidIcon from '@mui/icons-material/Paid'

const BACK = process.env.REACT_APP_BACK

function Payment({ id }) {
    return (
        <Paper sx={{ width: 480, margin: '2px' }}>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Typography title={id} sx={{ width: 190, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {id}
                </Typography>
                <Button>
                    <PaidIcon />
                </Button>
            </Grid>
        </Paper>
    )
}

export default function PaymentsUI() {
    // get token from store
    const token = useSelector(state => state.token)
    const role = useSelector(state => state.role)
    // array of payments
    const [payments, setPayments] = useState([])
    // reload list effect
    useEffect(() => {
        fetch(`${BACK}/payments/${role === 'ADMIN' ? 'admin' : ''}`, { headers: { 'token': token } })
            .then(response => response.json())
            .then(data => setPayments(data))
    }, [token, role])
    // render component
    return (
        <Grid container direction="column" justifyContent="space-evenly" alignItems="center">
            <Grid container direction="column" sx={{ height: 480 }}>
                {payments
                    .slice(0, 24)
                    .map(o => <Payment key={o.id} id={o.id} />)}
            </Grid>
        </Grid>
    )
}