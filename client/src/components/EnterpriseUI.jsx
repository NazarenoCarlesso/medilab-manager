import React from 'react'
import { Divider, Grid, Paper, Typography } from '@mui/material'
import BloodtypeIcon from '@mui/icons-material/Bloodtype'
import MasksIcon from '@mui/icons-material/Masks'
import AnalyticsIcon from '@mui/icons-material/Analytics'
import EngineeringIcon from '@mui/icons-material/Engineering'

export default function EnterpriseUI() {
    return (
        <Grid container direction="column" justifyContent="space-evenly" alignItems="center"
            sx={{ minHeight: 280, background: 'linear-gradient(59deg, rgb(122 138 255) 0%, rgb(64 123 255) 52%, rgb(25 234 255) 100%)' }}>
            <Typography variant="h3" fontWeight={700} sx={{ fontFamily: 'Raleway', margin: 4 }}>
                Medilab Manager es la mejor solución para tu laboratorio
            </Typography>
            <Grid container direction="row" justifyContent="space-evenly" alignItems="center" sx={{ marginBottom: '30px' }}>
                <Paper sx={{ width: 240, height: 130, padding: 0.5, margin: '10px', borderRadius: '20px', boxShadow: '2px 6px 24px 6px #00000070' }}>
                    <Typography variant="subtitle1" fontWeight={600}
                        sx={{
                            margin: '4px', fontFamily: 'Raleway', width: 'fit-content',
                            display: 'flex', justifycontent: 'center'
                        }}>
                        <BloodtypeIcon sx={{ padding: '1px', marginRight: '2px' }} /> Para pacientes
                    </Typography>
                    <Divider />
                    <Typography variant="subtitle1" sx={{ margin: '0px 4px', height: 80, fontFamily: 'Raleway', overflowY: 'hidden' }}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo veniam placeat totam est
                    </Typography>
                </Paper>
                <Paper sx={{ width: 240, height: 130, padding: 0.5, margin: '10px', borderRadius: '20px', boxShadow: '2px 6px 24px 6px #00000070' }}>
                    <Typography variant="subtitle1" fontWeight={600}
                        sx={{
                            margin: '4px', fontFamily: 'Raleway', width: 'fit-content',
                            display: 'flex', justifycontent: 'center'
                        }}>
                        <MasksIcon sx={{ padding: '1px', marginRight: '2px' }} /> Desde casa
                    </Typography>
                    <Divider />
                    <Typography variant="subtitle1" sx={{ margin: '0px 4px', height: 80, fontFamily: 'Raleway', overflowY: 'hidden' }}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo veniam placeat totam est
                    </Typography>
                </Paper>
                <Paper sx={{ width: 240, height: 130, padding: 0.5, margin: '10px', borderRadius: '20px', boxShadow: '2px 6px 24px 6px #00000070' }}>
                    <Typography variant="subtitle1" fontWeight={600}
                        sx={{
                            margin: '4px', fontFamily: 'Raleway', width: 'fit-content',
                            display: 'flex', justifycontent: 'center'
                        }}>
                        <AnalyticsIcon sx={{ padding: '1px', marginRight: '2px' }} /> Para laboratorios
                    </Typography>
                    <Divider />
                    <Typography variant="subtitle1" sx={{ margin: '0px 4px', height: 80, fontFamily: 'Raleway', overflowY: 'hidden' }}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo veniam placeat totam est
                    </Typography>
                </Paper>
                <Paper sx={{ width: 240, height: 130, padding: 0.5, margin: '10px', borderRadius: '20px', boxShadow: '2px 6px 24px 6px #00000070' }}>
                    <Typography variant="subtitle1" fontWeight={600}
                        sx={{
                            margin: '4px', fontFamily: 'Raleway', width: 'fit-content',
                            display: 'flex', justifycontent: 'center'
                        }}>
                        <EngineeringIcon sx={{ padding: '1px', marginRight: '2px' }} /> Soporte técnico
                    </Typography>
                    <Divider />
                    <Typography variant="subtitle1" sx={{ margin: '0px 4px', height: 80, fontFamily: 'Raleway', overflowY: 'hidden' }}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo veniam placeat totam est
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    )
}