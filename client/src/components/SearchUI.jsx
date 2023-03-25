import React, { useEffect, useState } from 'react'
import { FormControl, FormHelperText, Grid, Pagination, PaginationItem, Paper, Stack, TextField, Typography } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import cstyles from "./Contact.module.css";

// components
import TestUI from './TestUI'
//
import './UIStyles.css'

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

    function handleOnDragEnd(result){
        if (!result.destination) return;
        const items = Array.from(tests);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setTests(items);
    }

    return (
        <Grid container direction="column" justifyContent="space-evenly" alignItems="center">
            <Typography className={cstyles.contactTitle} variant="h3" fontWeight={700} sx={{ fontFamily: 'Raleway', whiteSpace:'nowrap', textOverflow: 'ellipsis', overflow: 'hidden'}}>
                Todos nuestros Exámenes
            </Typography>
            <Paper className='PaperContainer' sx={{background: "linear-gradient(180deg,#F0F8FF 0%, #9fffff 100%)"}} style={{margin: "1%"}}>
                    <FormControl sx={{padding: 1, width: 400}}>
                        <TextField value={search} onChange={e => setSearch(e.target.value)} id="outlined-search" label="Buscar" type="search"/>
                        <FormHelperText>Ingrese el nombre del exámen</FormHelperText>
                    </FormControl>
            </Paper>
            <DragDropContext onDragEnd={handleOnDragEnd}> 
                <Droppable droppableId="id" direction='horizontal'>
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
                        />
                        )}
                        {provided.placeholder}
                    </Grid> 
                )}
                </Droppable>
            </DragDropContext>
            <Stack spacing={2} sx={{marginTop:6}}>
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
    )
}