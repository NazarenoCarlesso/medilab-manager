import React from 'react'
import { useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import TestUI from './TestUI';
import NavUI from './NavUI';

export default function TestsUI() {
    const tests = useSelector((state) => state.filteredTests.slice(0, 4))

    return (
        <>
            <NavUI />
            <div>
                <Grid container direction="row" justifyContent="space-evenly" alignItems="center">
                    {tests.map(test => <TestUI
                        key={test.id}
                        id={test.id}
                        name={test.name}
                        description={test.description}
                        price={test.price}
                    />)}
                </Grid>
            </div>
        </>
    )
}