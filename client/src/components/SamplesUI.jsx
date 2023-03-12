import { Grid, Paper } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const BACK = process.env.REACT_APP_BACK

export default function SamplesUI() {
    const token = useSelector(state => state.token)

    const [samples, setSamples] = useState([])

    useEffect(() => {
        fetch(`${BACK}/samples/admin`, {
            headers: {
                'token': token
            }
        })
            .then(response => response.json())
            .then(data => setSamples(data))
    }, [token])
    return (
        <Grid container direction="column" justifyContent="space-evenly" alignItems="center">
            {samples.map(s => <Paper key={s.id} sx={{ padding: '5px', width: 200 }}>{s.name}</Paper>)}
        </Grid>
    )
}