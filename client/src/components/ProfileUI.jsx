import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Avatar, Grid, Paper, Typography } from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import HeightIcon from '@mui/icons-material/Height';
import EmailIcon from '@mui/icons-material/Email';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import PolicyIcon from '@mui/icons-material/Policy';
import ChurchIcon from '@mui/icons-material/Church';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

const BACK = process.env.REACT_APP_BACK

export default function ProfileUI() {
    const token = useSelector(state => state.token)
    const name = useSelector(state => state.name)

    const [user, setUser] = useState({})

    useEffect(() => {
        fetch(`${BACK}/users/me`, {
            headers: {
                'token': token
            }
        })
            .then(response => response.json())
            .then(data => setUser(data))
    }, [token])

    return (
        <Paper>
            <Grid container direction="column" justifyContent="space-evenly" alignItems="center">
                <Avatar alt={user.name} referrerPolicy="no-referrer" src={user.photo} sx={{ width: 86, height: 86 }} />
                <Typography fontWeight={700}>
                    {name}
                </Typography>
                <Grid container direction="column" justifyContent="space-evenly" alignItems="center">
                    <Typography variant="body2">
                        <LocalPhoneIcon />{user.phone}
                    </Typography>
                    <Typography variant="body2">
                        <HeightIcon />{user.height}
                    </Typography>
                    <Typography variant="body2">
                        <MedicalInformationIcon /> {user.id}
                    </Typography>
                    <Typography variant="body2">
                        <EmailIcon /> {user.email}
                    </Typography>
                    <Typography variant="body2">
                        {user.sex === 'M' ? <><MaleIcon />Hombre</> : null}
                        {user.sex === 'F' ? <><FemaleIcon />Mujer</> : null}
                    </Typography>
                    <Typography variant="body2">
                        <PolicyIcon />{user.role ? user.role : 'Paciente'}
                    </Typography>
                    <Typography variant="body2">
                        <ChurchIcon />{user.civil}
                    </Typography>
                    <Typography variant="body2">
                        <VerifiedUserIcon />{user.username}
                    </Typography>
                    <Typography variant="body2">
                        <FingerprintIcon />{user.dni}
                    </Typography>
                    <Typography variant="body2">
                        <AccessTimeFilledIcon />{user.createdAt}
                    </Typography>
                </Grid>
            </Grid>
        </Paper >
    )
}
