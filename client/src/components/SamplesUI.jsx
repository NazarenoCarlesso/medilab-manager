import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {
    Button, FormControl, Grid, MenuItem, Modal,
    Pagination,
    Paper, Select, TextField, Typography
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import CheckIcon from '@mui/icons-material/Check'
import CloseIcon from '@mui/icons-material/Close'
import AddIcon from '@mui/icons-material/Add'

const BACK = process.env.REACT_APP_BACK

function Sample({ id, name, handleEdit, handleDelete }) {
    return (
        <Paper sx={{ width: 320, margin: '2px', boxShadow: '0px 0px 10px 0px #00000047' }}>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Typography title={name} sx={{ width: 180, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontFamily: 'Raleway' }}>
                    {name}
                </Typography>
                <Button onClick={() => handleEdit({ id, name })}>
                    <EditIcon />
                </Button>
                <Button onClick={() => handleDelete({ id, name })}>
                    <DeleteIcon />
                </Button>
            </Grid>
        </Paper>
    )
}

export default function SamplesUI() {
    // get token from store
    const token = useSelector(state => state.token)
    // array of samples
    const [samples, setSamples] = useState([])
    // edit modal state and hooks
    const [openEdit, setOpenEdit] = useState(false)
    const handleOpenEdit = () => setOpenEdit(true)
    const handleCloseEdit = () => setOpenEdit(false)
    // delete modal state and hooks
    const [openDelete, setOpenDelete] = useState(false)
    const handleOpenDelete = () => setOpenDelete(true)
    const handleCloseDelete = () => setOpenDelete(false)
    // selected sample state
    const [sample, setSample] = useState('')
    // merge state (sample fk in tests => merge sample)
    const [merge, setMerge] = useState('')
    // edit handler
    const handleEdit = (sample) => {
        handleOpenEdit()
        setSample(sample)
    }
    // delete handler
    const handleDelete = (sample) => {
        handleOpenDelete()
        setSample(sample)
    }
    // input handler
    const handleChange = (event) => {
        setSample({ ...sample, [event.target.name]: event.target.value })
    }
    // select handler
    const handleSelect = (event) => {
        setMerge(event.target.value)
    }
    // page state
    const [page, setPage] = useState(1)
    const [count, setCount] = useState(1)
    const [search, setSearch] = useState('')
    // page change handler
    const handleChangePage = (e, value) => setPage(value)
    // search effect
    useEffect(() => setPage(1), [search])
    // create state
    const [create, setCreate] = useState('')
    // create modal state and hooks
    const [openCreate, setOpenCreate] = useState(false)
    const handleOpenCreate = () => setOpenCreate(true)
    const handleCloseCreate = () => setOpenCreate(false)
    // edit request
    const sendEdit = () => {
        fetch(`${BACK}/samples/${sample.id}`, {
            method: 'put',
            headers: { 'token': token, 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: sample.name })
        }).then(() => handleCloseEdit())
    }
    // delete request
    const sendDelete = () => {
        fetch(`${BACK}/samples/${sample.id}/${merge}`, {
            method: 'delete',
            headers: { 'token': token }
        }).then(() => handleCloseDelete())
    }
    // create request
    const sendCreate = () => {
        fetch(`${BACK}/samples`, {
            method: 'post',
            headers: { 'token': token, 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: create })
        }).then(() => handleCloseCreate())
    }
    // reload list effect
    useEffect(() => {
        fetch(`${BACK}/samples/admin/?page=${page}&limit=36&search=${search}`, { headers: { 'token': token } })
            .then(response => response.json())
            .then(data => {
                setSamples(data.rows)
                setCount(data.count)
            })
    }, [token, openEdit, openDelete, openCreate, search, page])
    // render component
    return (
        <Grid container direction="column" justifyContent="center" alignItems="flex-start">
            <Modal open={openEdit} onClose={handleCloseEdit}>
                <Paper sx={{
                    position: 'absolute', top: '50%', left: '50%',
                    transform: 'translate(-50%, -50%)', width: 400,
                    bgcolor: 'background.paper', border: '2px solid #000',
                    boxShadow: 24, p: 4
                }}>
                    <TextField name="name" value={sample.name} onChange={handleChange} variant="standard" />
                    <Button>
                        <CheckIcon onClick={sendEdit} />
                    </Button>
                    <Button>
                        <CloseIcon onClick={handleCloseEdit} />
                    </Button>
                </Paper>
            </Modal>
            <Modal open={openDelete} onClose={handleCloseDelete}>
                <Paper sx={{
                    position: 'absolute', top: '50%', left: '50%',
                    transform: 'translate(-50%, -50%)', width: 400,
                    bgcolor: 'background.paper', border: '2px solid #000',
                    boxShadow: 24, p: 4
                }}>
                    <FormControl>
                        <Select value={merge} label="Age" onChange={handleSelect}>
                            <MenuItem value={''}>Ninguna</MenuItem>
                            {samples.filter(s => s.id !== sample.id).map(s => <MenuItem key={s.id} value={s.id}>{s.name}</MenuItem>)}
                        </Select>
                    </FormControl>
                    <Button>
                        <CheckIcon onClick={sendDelete} />
                    </Button>
                    <Button>
                        <CloseIcon onClick={handleCloseDelete} />
                    </Button>
                </Paper>
            </Modal>
            <Modal open={openCreate} onClose={handleCloseCreate}>
                <Paper sx={{
                    position: 'absolute', top: '50%', left: '50%',
                    transform: 'translate(-50%, -50%)', width: 400,
                    bgcolor: 'background.paper', border: '2px solid #000',
                    boxShadow: 24, p: 4
                }}>
                    <TextField name="name" value={create} onChange={e => setCreate(e.target.value)} variant="standard" />
                    <Button>
                        <CheckIcon onClick={sendCreate} />
                    </Button>
                    <Button>
                        <CloseIcon onClick={handleCloseCreate} />
                    </Button>
                </Paper>
            </Modal>
            <Paper sx={{
                width: 968, marginBottom: 0.25, marginTop: 0.1,
                boxShadow: '0px 0px 10px 0px #00000047'
            }}>
                <Grid container direction="row" justifyContent="center" alignItems="center">
                    <TextField variant="standard" value={search} onChange={e => setSearch(e.target.value)} />
                    <Pagination page={page} count={Math.ceil(count / 36)} onChange={handleChangePage} />
                    <Button onClick={handleOpenCreate}>
                        <AddIcon />
                    </Button>
                </Grid>
            </Paper>
            <Grid container direction="column" justifyContent="flex-start" alignItems="flex-start" sx={{ height: 480, width: 'fit-content' }}>
                {samples.map(s => <Sample key={s.id} id={s.id} name={s.name} handleEdit={handleEdit} handleDelete={handleDelete} />)}
            </Grid>
        </Grid>
    )
}