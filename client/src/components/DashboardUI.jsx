import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Button, Grid, Paper } from '@mui/material'
import SamplesUI from './SamplesUI'
import ProfileUI from './ProfileUI'
import CategoriesUI from './CategoriesUI'
import OrdersUI from './OrdersUI'
import PaymentsUI from './PaymentsUI'

export default function DashboardUI() {
    // get role from store
    const role = useSelector((state) => state.role)
    // selected option state
    const [option, setOption] = useState('orders')
    // set options
    let options = ['orders', 'payments']
    if (role === 'ADMIN') options = [...options, 'categories', 'samples']
    // render component
    return (
        <Grid container direction="row">
            <Paper sx={{ width: 320 }}>
                <Grid container direction="column">
                    <ProfileUI />
                    {options.includes('orders')
                        ? <Button
                            variant={option === 'orders' ? 'contained' : 'outlined'}
                            onClick={() => { setOption('orders') }}>
                            Ordenes
                        </Button>
                        : null}
                    {options.includes('payments')
                        ? <Button
                            variant={option === 'payments' ? 'contained' : 'outlined'}
                            onClick={() => { setOption('payments') }}>
                            Pagos
                        </Button>
                        : null}
                    {options.includes('categories')
                        ? <Button
                            variant={option === 'categories' ? 'contained' : 'outlined'}
                            onClick={() => { setOption('categories') }}>
                            Categorias
                        </Button>
                        : null}
                    {options.includes('samples')
                        ? <Button
                            variant={option === 'samples' ? 'contained' : 'outlined'}
                            onClick={() => { setOption('samples') }}>
                            Muestras
                        </Button>
                        : null}
                </Grid>
            </Paper>
            <Paper sx={{ width: 970, height: 480 }}>
                {option === 'orders' ? <OrdersUI /> : null}
                {option === 'payments' ? <PaymentsUI /> : null}
                {option === 'categories' ? <CategoriesUI /> : null}
                {option === 'samples' ? <SamplesUI /> : null}
            </Paper>
        </Grid>
    )
}
