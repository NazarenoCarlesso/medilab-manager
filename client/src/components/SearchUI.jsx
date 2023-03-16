import React, { useEffect, useState } from 'react'
import { FormControl, FormHelperText, Grid, Pagination, PaginationItem, Paper, Stack, TextField } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

// components
import TestUI from './TestUI'

const BACK = process.env.REACT_APP_BACK

export default function TestsUI() {
    const [tests, setTests] = useState([])
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(1)
    const [count, setCount] = useState(1)

    useEffect(() => {
        fetch(`${BACK}/tests/search/?search=${search}&page=${page}&limit=5`)
            .then(response => response.json())
            .then(data => {
                setTests(data.rows)
                setCount(data.count)
            })
    }, [search, page])

    useEffect(() => setPage(1), [search])

    return (
        <Grid container direction="column" justifyContent="space-evenly" alignItems="center">
            <Paper sx={(theme)=>({background: theme.palette.secondary.main})} style={{ width: 360, margin: "3%"}}>
                <Grid container direction="column" justifyContent="space-evenly" alignItems="center">
                    <FormControl sx={{ m: 1, width: 340 }}>
                        <TextField value={search} onChange={e => setSearch(e.target.value)} id="outlined-search" label="Busqueda" type="search" />
                        <FormHelperText>Escribe tu exámen acá</FormHelperText>
                    </FormControl>
                    <Stack spacing={2}>
                        <Pagination
                            count={Math.round(count / 5)}
                            page={page}
                            onChange={(e, v) => setPage(v)}
                            renderItem={(item) => <PaginationItem
                                slots={{
                                    previous: ArrowBackIcon,
                                    next: ArrowForwardIcon
                                }}
                                {...item} />}
                        />
                    </Stack>
                </Grid>
            </Paper>
            <DragDropContext> 
        <Droppable droppableId="id">
        {(provided)=>(
            <Grid container direction="row" justifyContent="space-evenly" alignItems="center"
            {...provided.droppableProps}
            ref={provided.innerRef}>
                {tests.map((test, index) => <TestUI
                    key={test.id}
                    id={test.id}
                    name={test.name}
                    description={test.description}
                    price={test.price}
                    index={index}
                />)}
            </Grid>
            
        )}
        </Droppable>
    </DragDropContext>
        </Grid>
    )
}