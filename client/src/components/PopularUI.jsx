import React, { useEffect, useState } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import {
    Grid, Pagination, PaginationItem, Paper,
    Stack, Typography
} from '@mui/material'
// components
import TestUI from './TestUI'

const BACK = process.env.REACT_APP_BACK

export default function PopularUI() {
    const [tests, setTests] = useState([])
    const [page, setPage] = useState(1)

    useEffect(() => {
        fetch(`${BACK}/tests/orders/?limit=10`)
            .then(response => response.json())
            .then(data => setTests(data))
    }, [])
    
    function handleOnDragEnd(result){
        if (!result.destination) return;
        const items = Array.from(tests);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setTests(items);
    }

    return (
        <Grid container direction="column" justifyContent="space-evenly" alignItems="center" >
            <Typography variant="h3" fontWeight={700} sx={{ fontFamily: 'Raleway', margin: 4 }}>
                Exámenes mas populares
            </Typography>
            <Paper sx={{ padding: '6px 0px' }}>
                <Stack spacing={2}>
                    <Pagination
                        count={2}
                        page={page}
                        onChange={(e, v) => setPage(v)}
                        renderItem={(item) => <PaginationItem {...item} />}
                    />
                </Stack>
            </Paper>
            <DragDropContext onDragEnd={handleOnDragEnd}> 
                <Droppable droppableId="id" direction='horizontal'>
                {(provided)=>(
                    <Grid container direction="row" justifyContent="space-evenly" alignItems="center" sx={{ marginBottom: '30px' }}
                    {...provided.droppableProps}
                            ref={provided.innerRef}>
                        {tests.slice((page - 1) * 5, 5 + (5 * (page - 1))).map((test, index) => <TestUI
                            key={test.id}
                            id={test.id}
                            name={test.name}
                            description={test.description}
                            price={test.price}
                            index={index}
                        />)}
                        {provided.placeholder}
                    </Grid>
                )}
                </Droppable>
            </DragDropContext>
        </Grid>
    )
}