import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import TestUI from './TestUI';
import NavUI from './NavUI';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button, FormControl, FormHelperText, InputLabel, MenuItem, Paper, Select, TextField } from '@mui/material';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
})

export default function TestsUI() {
    const samples = useSelector((state) => state.samples)
    const categories = useSelector((state) => state.categories)

    const [sample, setSample] = useState('')
    const [category, setCategory] = useState('')

    const tests = useSelector((state) => state.filteredTests.slice(0, 4))

    return (
        <ThemeProvider theme={darkTheme}>
            <NavUI />
            <Grid container direction="column" justifyContent="space-evenly" alignItems="center" sx={{ background: 'whitesmoke' }}>
                <div style={{ minHeight: 20 }} />
                <Paper>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <TextField id="outlined-search" label="Search field" type="search" />
                        <FormHelperText>With label + helper text</FormHelperText>
                    </FormControl>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-helper-label">Categoria</InputLabel>
                        <Select labelId="demo-simple-select-helper-label" id="demo-simple-select-helper" label="Age"
                            value={category} onChange={e => setCategory(e.target.value)}>
                            <MenuItem value=""><em>Ninguna</em> </MenuItem>
                            {categories.map(c => <MenuItem value={c}>{c}</MenuItem>)}
                        </Select>
                        <FormHelperText>With label + helper text</FormHelperText>
                    </FormControl>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-helper-label">Muestra</InputLabel>
                        <Select labelId="demo-simple-select-helper-label" id="demo-simple-select-helper" label="Age"
                            value={sample} onChange={e => setSample(e.target.value)}>
                            <MenuItem value=""><em>Ninguno</em></MenuItem>
                            {samples.map(s => <MenuItem value={s}>{s}</MenuItem>)}
                        </Select>
                        <FormHelperText>With label + helper text</FormHelperText>
                    </FormControl>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <Button variant="contained">Contained</Button>
                        <FormHelperText>With label + helper text</FormHelperText>
                    </FormControl>
                </Paper>
                <Paper>
                    <Stack spacing={2}>
                        <Pagination
                            count={10}
                            renderItem={(item) => (
                                <PaginationItem
                                    slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                                    {...item}
                                />
                            )}
                        />
                    </Stack>
                </Paper>
                <Grid container direction="row" justifyContent="space-evenly" alignItems="center">
                    {tests.map(test => <TestUI
                        key={test.id}
                        id={test.id}
                        name={test.name}
                        description={test.description}
                        price={test.price}
                    />)}
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}