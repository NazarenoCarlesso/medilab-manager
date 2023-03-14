import React from 'react'
import { Divider, Grid, Paper, Typography } from '@mui/material'
import BloodtypeIcon from '@mui/icons-material/Bloodtype'
import MasksIcon from '@mui/icons-material/Masks'
import AnalyticsIcon from '@mui/icons-material/Analytics'
import EngineeringIcon from '@mui/icons-material/Engineering'

const colors = ['palevioletred', 'palegreen', 'palegoldenrod', 'paleturquoise']

export default function EnterpriseUI() {
    return (
        <Grid container direction="column" justifyContent="space-evenly" alignItems="center"
            sx={{ minHeight: 280, background: 'linear-gradient(59deg, rgba(122,255,182,1) 0%, rgba(174,255,64,1) 52%, rgba(255,252,25,1) 100%)' }}>
            <Typography variant="h3" fontWeight={700} sx={{ fontFamily: 'Raleway', margin: 4 }}>
                Medilab Manager es la mejor solución para tu laboratorio
            </Typography>
            <Grid container direction="row" justifyContent="space-evenly" alignItems="center" sx={{ marginBottom: '30px' }}>
                <Paper sx={{ width: 240, height: 130, padding: 0.5, margin: '10px' }}>
                    <Typography variant="subtitle1" fontWeight={600}
                        sx={{
                            margin: '4px', fontFamily: 'Raleway', width: 'fit-content',
                            display: 'flex', justifycontent: 'center', color: colors[0]
                        }}>
                        <BloodtypeIcon sx={{ padding: '1px', marginRight: '2px', fill: colors[0] }} /> Para pacientes
                    </Typography>
                    <Divider />
                    <Typography variant="subtitle1" sx={{ margin: '0px 4px', height: 80, color: '#dbdbdb', fontFamily: 'Raleway', overflowY: 'hidden' }}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo veniam placeat totam est
                    </Typography>
                </Paper>
                <Paper sx={{ width: 240, height: 130, padding: 0.5, margin: '10px' }}>
                    <Typography variant="subtitle1" fontWeight={600}
                        sx={{
                            margin: '4px', fontFamily: 'Raleway', width: 'fit-content',
                            display: 'flex', justifycontent: 'center', color: colors[1]
                        }}>
                        <MasksIcon sx={{ padding: '1px', marginRight: '2px', fill: colors[1] }} /> Desde casa
                    </Typography>
                    <Divider />
                    <Typography variant="subtitle1" sx={{ margin: '0px 4px', height: 80, color: '#dbdbdb', fontFamily: 'Raleway', overflowY: 'hidden' }}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo veniam placeat totam est
                    </Typography>
                </Paper>
                <Paper sx={{ width: 240, height: 130, padding: 0.5, margin: '10px' }}>
                    <Typography variant="subtitle1" fontWeight={600}
                        sx={{
                            margin: '4px', fontFamily: 'Raleway', width: 'fit-content',
                            display: 'flex', justifycontent: 'center', color: colors[2]
                        }}>
                        <AnalyticsIcon sx={{ padding: '1px', marginRight: '2px', fill: colors[2] }} /> Para laboratorios
                    </Typography>
                    <Divider />
                    <Typography variant="subtitle1" sx={{ margin: '0px 4px', height: 80, color: '#dbdbdb', fontFamily: 'Raleway', overflowY: 'hidden' }}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo veniam placeat totam est
                    </Typography>
                </Paper>
                <Paper sx={{ width: 240, height: 130, padding: 0.5, margin: '10px' }}>
                    <Typography variant="subtitle1" fontWeight={600}
                        sx={{
                            margin: '4px', fontFamily: 'Raleway', width: 'fit-content',
                            display: 'flex', justifycontent: 'center', color: colors[3]
                        }}>
                        <EngineeringIcon sx={{ padding: '1px', marginRight: '2px', fill: colors[3] }} /> Soporte técnico
                    </Typography>
                    <Divider />
                    <Typography variant="subtitle1" sx={{ margin: '0px 4px', height: 80, color: '#dbdbdb', fontFamily: 'Raleway', overflowY: 'hidden' }}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo veniam placeat totam est
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    )
}